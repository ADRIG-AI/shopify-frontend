import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [signupComplete, setSignupComplete] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Store user data and token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show connect button
      setSignupComplete(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Signup failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar variant="auth" activePage="signup" />

      {/* Signup Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6 pt-6">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Logo size="md" linkTo={null} />
              </div>

              <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Create Your Account
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-slate-600">
                Sign up to manage your TradeOps Analytica account
              </CardDescription>
            </CardHeader>

            <CardContent className="px-4 sm:px-8 pb-6 sm:pb-8">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              {!signupComplete ? (
                <form className="space-y-5" onSubmit={handleSignup}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Name
                    </label>
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
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email
                    </label>
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
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900 placeholder:text-slate-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    const user = JSON.parse(
                      localStorage.getItem("user") || "{}"
                    );
                    const shopifyAuthUrl = `https://shopify.com/admin/oauth/authorize?client_id=${
                      import.meta.env.VITE_SHOPIFY_API_KEY
                    }&scope=read_customers,read_files,read_order_edits,read_orders,read_products,write_customers,write_files,write_order_edits,write_orders,write_products&redirect_uri=${encodeURIComponent(
                      import.meta.env.VITE_REDIRECT_URI
                    )}&response_type=code&state=${user.id}`;
                    window.location.href = shopifyAuthUrl;
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Connect Shopify Store
                </Button>
              )}

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
