import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activePage?:
    | "home"
    | "business"
    | "about"
    | "pricing"
    | "insights"
    | "login"
    | "signup";
  variant?: "default" | "auth"; // default = full navbar, auth = minimal for login/signup
}

const Navbar = ({ activePage, variant = "default" }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (page: string) => activePage === page;

  // Auth variant - minimal navbar for login/signup pages
  if (variant === "auth") {
    return (
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="sm" linkTo="/" />

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="ghost"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Default variant - full navbar
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo size="sm" linkTo="/" />

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium text-sm transition-colors ${
                isActive("home")
                  ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/business"
              className={`font-medium text-sm transition-colors ${
                isActive("business")
                  ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={`font-medium text-sm transition-colors ${
                isActive("about")
                  ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className={`font-medium text-sm transition-colors ${
                isActive("pricing")
                  ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
              <a
                href="mailto:support@tradeops.com"
                className="hover:text-slate-900 transition-colors"
              >
                support@tradeops.com
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-slate-900 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-slate-900 hover:bg-slate-100 text-sm"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium text-sm transition-colors ${
                  isActive("home")
                    ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/business"
                className={`font-medium text-sm transition-colors ${
                  isActive("business")
                    ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className={`font-medium text-sm transition-colors ${
                  isActive("about")
                    ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className={`font-medium text-sm transition-colors ${
                  isActive("pricing")
                    ? "text-slate-900 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <div className="flex flex-col space-y-2 text-sm text-slate-600">
                  <a
                    href="mailto:support@tradeops.com"
                    className="hover:text-slate-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    support@tradeops.com
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="hover:text-slate-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full text-slate-900 hover:bg-slate-100 justify-start"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
