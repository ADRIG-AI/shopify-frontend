
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { supabase } from "../lib/supabaseClient";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate shop name format
    const shopNamePattern = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    if (!shopNamePattern.test(shopName)) {
      setError(
        "Please enter a valid shop name (e.g., your-store)"
      );
      setLoading(false);
      return;
    }
    // Construct the full store URL
    const normalizedStoreUrl = `${shopName.trim().toLowerCase()}.myshopify.com`;

    // Hash the password (client-side for demo; in production, do this server-side)
    const hashPassword = async (password: string) => {
      const msgUint8 = new TextEncoder().encode(password);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    };

    try {
      const password_hash = await hashPassword(password);
      // Insert user into Supabase
      const { error: supabaseError } = await supabase
        .from("users")
        .insert([{ name, email, password_hash }]);
      if (supabaseError) {
        setError(supabaseError.message);
        setLoading(false);
        return;
      }
      // Fetch the new user's id
      const { data: userData, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();
      if (fetchError || !userData) {
        setError(fetchError?.message || "Could not fetch user id");
        setLoading(false);
        return;
      }
      const userId = userData.id;
      // Use upsert to avoid duplicate shops for the same user and domain
      // onConflict must be a comma-separated string of columns
      const { error: shopError } = await supabase
        .from("shops")
        .upsert([{ user_id: userId, shopify_domain: normalizedStoreUrl }], {
          onConflict: "user_id,shopify_domain",
        });
      if (shopError) {
        setError(shopError.message);
        setLoading(false);
        return;
      }
      // Store email in localStorage for session persistence
      const user = { id: userId, name, email, type: 'admin', role: 'admin' };
      const token = 'temp_token_' + Math.random().toString(36); // Temporary token for OAuth flow
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));;
      // Redirect to Shopify OAuth
      const shopifyAuthUrl = `https://${normalizedStoreUrl}/admin/oauth/authorize?client_id=${import.meta.env.VITE_SHOPIFY_API_KEY
        }&scope=read_products,write_products,read_orders,write_orders&redirect_uri=${encodeURIComponent(
          import.meta.env.VITE_REDIRECT_URI ||
          "http://localhost:8080/auth/callback"
        )}&state=${Math.random().toString(36).substring(2, 15)}`;
      window.location.href = shopifyAuthUrl;
    } catch (err: any) {
      setError(err.message || "Signup failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="nav" linkTo="/" />

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Signup Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 py-16">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-6">
                <Logo size="lg" linkTo={null} />
              </div>

              <CardTitle className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</CardTitle>
              <CardDescription className="text-base text-slate-600">
                Sign up to manage your Dagala Analytics account
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSignup}>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Shop Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    placeholder="your-store"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">Your Shopify store name (e.g., your-store)</p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-600 hover:text-purple-600 font-semibold hover:underline transition-colors"
                >
                  Sign in
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Signup;
