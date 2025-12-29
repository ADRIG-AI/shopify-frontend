import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="lg" linkTo="/" textColor="light" bgType="dark" />
            </div>
            <p className="text-slate-300 leading-relaxed text-sm mb-6 max-w-md">
              AI-powered Global Trade automation platform for Shopify merchants. Automate compliance, streamline documentation, and scale internationally with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:support@TradeOps.com" className="hover:text-white transition-colors">
                  support@tradeops.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/tradeops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a
                href="https://twitter.com/tradeops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-transparent"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a
                href="https://github.com/tradeops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-transparent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a
                href="https://facebook.com/tradeops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">Product</h4>
            <div className="space-y-3">
              <Link to="/business" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Features
              </Link>
              <Link to="/pricing" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Pricing
              </Link>
              <Link to="/insights" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Analytics
              </Link>
              <Link to="/business" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Integrations
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                About Us
              </Link>
              <Link to="/business" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Services
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Contact
              </Link>
              <Link to="/careers" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Careers
              </Link>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">Support</h4>
            <div className="space-y-3">
              <Link to="/help" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Help Center
              </Link>
              <Link to="/docs" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Documentation
              </Link>
              <Link to="/status" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Status
              </Link>
              <Link to="/privacy" className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} TradeOps Analytica. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

