import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Check, Star, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for small DTC brands getting started",
      features: [
        "Up to 100 products",
        "Basic HS code detection",
        "Export documentation",
        "Email support",
        "1 team member",
      ],
      popular: false,
      icon: Zap,
    },
    {
      id: "professional",
      name: "Professional",
      price: { monthly: 99, yearly: 990 },
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Up to 1,000 products",
        "AI-powered HS code detection",
        "Advanced export documentation",
        "Landed cost calculator",
        "ESG risk assessment",
        "Priority support",
        "5 team members",
        "API access",
      ],
      popular: true,
      icon: Star,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: 299, yearly: 2990 },
      description: "For large organizations with advanced compliance needs",
      features: [
        "Unlimited products",
        "Custom AI model training",
        "White-label documentation",
        "Advanced ESG analytics",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited team members",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
      icon: Crown,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar activePage="pricing" />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
              Pricing
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-10">
            Choose the plan that fits your business needs. All plans include a
            14-day free trial.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`font-medium ${
                billingCycle === "monthly" ? "text-slate-900" : "text-slate-600"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-medium ${
                billingCycle === "yearly" ? "text-slate-900" : "text-slate-600"
              }`}
            >
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <Badge className="bg-green-100 text-green-800 border-0">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards - Matching Billing UI */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {plans.map((plan) => {
              const price = plan.price[billingCycle as keyof typeof plan.price];

              return (
                <Card
                  key={plan.id}
                  className={`border-0 shadow-lg relative ${
                    plan.popular ? "border-2 border-blue-500 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-slate-900">
                        ${price}
                      </div>
                      <div className="text-sm text-slate-600">
                        per {billingCycle === "yearly" ? "year" : "month"}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to="/signup">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-600 to-purple-600"
                            : "bg-gradient-to-r from-blue-600 to-purple-600"
                        }`}
                      >
                        Upgrade to {plan.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Choose TradeOps Analytica?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              All plans include our core features and benefits
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 mb-3">
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm text-slate-600 leading-relaxed text-center">
                  Comprehensive data analysis and insights
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 mb-3">
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm text-slate-600 leading-relaxed text-center">
                  Enterprise-grade security and compliance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 mb-3">
                  Global Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm text-slate-600 leading-relaxed text-center">
                  Support for 50+ countries worldwide
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 mb-3">
                  Custom Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm text-slate-600 leading-relaxed text-center">
                  Tailored solutions for your business needs
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-0 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Need a Custom Plan?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact our sales team to discuss enterprise solutions tailored to
              your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base"
                >
                  Contact Sales
                </Button>
              </Link>
              <Link to="/signup" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-300 text-slate-900 hover:bg-slate-50 font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base"
                >
                  Start Free Trial
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

export default Pricing;
