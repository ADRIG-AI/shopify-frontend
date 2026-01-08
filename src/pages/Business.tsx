import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Building2,
  Target,
  Lightbulb,
  Globe,
  ArrowRight,
  CheckCircle,
  Package,
  FileText,
  DollarSign,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";

const Business = () => {
  const services = [
    {
      icon: Zap,
      title: "Automated HS Code Detection",
      description:
        "AI-powered classification with 95%+ accuracy. Eliminate manual errors and speed up customs processing.",
      features: [
        "AI Classification",
        "95%+ Accuracy",
        "Real-time Processing",
        "Multi-country Support",
      ],
    },
    {
      icon: FileText,
      title: "Export Documentation",
      description:
        "Auto-generate commercial invoices, certificates of origin, and packing lists with one click.",
      features: [
        "Commercial Invoices",
        "Certificates of Origin",
        "Packing Lists",
        "Custom Templates",
      ],
    },
    {
      icon: DollarSign,
      title: "Landed Cost Estimation",
      description:
        "Calculate import taxes, duties, and total landed costs for any destination worldwide in real-time.",
      features: [
        "Real-time Calculations",
        "50+ Countries",
        "Tax & Duty Estimates",
        "Currency Conversion",
      ],
    },
    {
      icon: Shield,
      title: "ESG Risk Assessment",
      description:
        "Comprehensive supply chain risk analysis with environmental and social impact scoring.",
      features: [
        "Risk Scoring",
        "Supply Chain Analysis",
        "Compliance Monitoring",
        "Impact Reports",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Shopify Stores", icon: Package },
    { number: "95%", label: "HS Code Accuracy", icon: CheckCircle },
    { number: "80%", label: "Time Saved", icon: BarChart3 },
    { number: "50+", label: "Countries Supported", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar activePage="business" />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
              Our Services
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            Global Trade Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              For Shopify Merchants
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-10">
            Comprehensive tools to automate compliance, streamline
            documentation, and scale your international commerce operations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Everything You Need for Global Trade
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Powerful features designed to streamline your international
              commerce operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-0 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 500+ Shopify merchants already automating their global trade
              operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-300 text-slate-900 hover:bg-slate-50 font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
