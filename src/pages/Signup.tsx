import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/ui/stars-background";
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
    <div className="min-h-screen bg-dagala-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dagala-white/95 backdrop-blur-md border-b border-dagala-light shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center relative bg-dagala-black">
                  <div className="w-6 h-6 border-2 rounded-full border-dagala-white"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dagala-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display text-dagala-black">
                  Dagala
                </span>
                <span className="text-xs font-body-medium -mt-1 tracking-wider text-dagala-medium">
                  ANALYTICS
                </span>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" className="font-body-medium text-dagala-medium hover:text-dagala-black">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Stars Background */}
      <section className="h-screen w-full overflow-hidden relative">
        <StarsBackground
          className="h-full w-full"
          starColor="#ffffff"
          speed={20}
          factor={0.05}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="relative mx-auto flex max-w-md flex-col items-center justify-center px-4 py-10 md:py-20">
              <div className="w-full bg-dagala-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative bg-dagala-black">
                      <div className="w-8 h-8 border-2 rounded-full border-dagala-white"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-dagala-white"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display text-dagala-black">
                      Dagala
                    </span>
                    <span className="text-xs font-body-medium -mt-1 tracking-wider text-dagala-medium">
                      ANALYTICS
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-display text-dagala-black mb-2">Create Your Account</h2>
                <p className="text-dagala-medium mb-6 font-body">Sign up to manage your Dagala Analytics account</p>

                {error && (
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 w-full text-center font-body">
                    {error}
                  </div>
                )}

                <form className="w-full" onSubmit={handleSignup}>
                  <div className="mb-4">
                    <label className="block text-dagala-black mb-1 font-body-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:ring-2 focus:ring-dagala-black focus:border-dagala-black transition-colors font-body"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-dagala-black mb-1 font-body-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:ring-2 focus:ring-dagala-black focus:border-dagala-black transition-colors font-body"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-dagala-black mb-1 font-body-medium">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:ring-2 focus:ring-dagala-black focus:border-dagala-black transition-colors font-body"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-dagala-black mb-1 font-body-medium">Shop Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:ring-2 focus:ring-dagala-black focus:border-dagala-black transition-colors font-body"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      placeholder="your-store"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-dagala-black hover:bg-dagala-dark text-dagala-white font-body-bold py-3 rounded-lg transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>

                <div className="mt-6 text-dagala-medium text-sm font-body">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-dagala-black hover:underline font-body-bold"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StarsBackground>
      </section>
    </div>
  );
};

export default Signup;
