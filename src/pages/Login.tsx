import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/ui/stars-background";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Dispatch custom event to notify PlanContext
        window.dispatchEvent(new Event('loginSuccess'));

        navigate('/dashboard');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Login failed');
    } finally {
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

                <h2 className="text-3xl font-display text-dagala-black mb-2">Welcome Back</h2>
                <p className="text-dagala-medium mb-6 font-body">Sign in to your Dagala Analytics account</p>

                {error && (
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 w-full text-center font-body">
                    {error}
                  </div>
                )}

                <form className="w-full" onSubmit={handleLogin}>
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
                  <div className="mb-6">
                    <label className="block text-dagala-black mb-1 font-body-medium">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:ring-2 focus:ring-dagala-black focus:border-dagala-black transition-colors font-body"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-dagala-black hover:bg-dagala-dark text-dagala-white font-body-bold py-3 rounded-lg transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-6 text-dagala-medium text-sm font-body">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-dagala-black hover:underline font-body-bold"
                  >
                    Sign up
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

export default Login;
