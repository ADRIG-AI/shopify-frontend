import { useState, useEffect } from "react";
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
import {
  CreditCard,
  Check,
  Star,
  Calendar,
  Download,
  Settings,
  AlertTriangle,
  Crown,
  Zap,
  CheckCircle,
} from "lucide-react";
import { DashboardNavigation } from "@/components/DashboardNavigation";
import React from "react";
import { usePlan } from "@/context/PlanContext";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 1, yearly: 10 },
    priceId: {
      monthly: "price_1RcnoUQiUhrwJo9CamPZGsh1",
      yearly: "price_1RcnosQiUhrwJo9CzIMCgiea",
    },
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
    priceId: {
      monthly: "price_1RcnpzQiUhrwJo9CVz7Wsug6",
      yearly: "price_1RcnqKQiUhrwJo9CCdhvD8Ep",
    },
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
    priceId: {
      monthly: "price_1QZ002FZ0000000000000000",
      yearly: "price_1QZ002FZ0000000000000000",
    },
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

const Billing = () => {
  const [currentPlan, setCurrentPlan] = useState("");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [loadingPlan, setLoadingPlan] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { planId, subscriptionStatus, hasAccess, loading, refreshPlan } = usePlan();

  useEffect(() => {
    if (planId && hasAccess && subscriptionStatus === 'active') {
      setCurrentPlan(planId);
    } else {
      setCurrentPlan("free");
    }
  }, [planId, hasAccess, subscriptionStatus]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');
    const errorParam = urlParams.get('error');
    const planParam = urlParams.get('plan');
    
    if (successParam === 'true') {
      const planName = planParam ? plans.find(p => p.id === planParam)?.name || planParam : 'your plan';
      setSuccess(`🎉 ${planName} activated successfully! Welcome to your new subscription.`);
      refreshPlan();
      // Clean URL after a delay to show the success message
      setTimeout(() => {
        window.history.replaceState({}, '', '/billing');
      }, 100);
    } else if (errorParam) {
      setError(`Subscription error: ${errorParam.replace(/_/g, ' ')}`);
      // Clean URL
      window.history.replaceState({}, '', '/billing');
    }
  }, [refreshPlan]);

  const handleCheckout = async (priceId: string, planId: string) => {
    setLoadingPlan(planId);
    setError(null);
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to continue.');
        return;
      }
  
      const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/shopify/billing/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ planId }),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.confirmationUrl) {
        window.location.href = data.confirmationUrl;
      } else {
        throw new Error('No checkout URL received from server');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoadingPlan('');
    }
  };





  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Billing & Subscription
            </h1>
            <p className="text-slate-600">
              Manage your subscription and billing preferences
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Payment Settings
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="h-4 w-4 mr-2" />
              Download Invoices
            </Button>
          </div>
        </div>

        {/* Success Display */}
        {success && (
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 mb-6 animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-600 animate-bounce" />
                </div>
                <div>
                  <p className="text-green-800 font-semibold text-lg">{success}</p>
                  <p className="text-green-600 text-sm mt-1">Your subscription is now active and ready to use!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {error && (
          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Current Plan Status */}
        <Card className="border-0 shadow-lg mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  {currentPlan === "free" || currentPlan === "" ? (
                    <Star className="h-6 w-6 text-white" />
                  ) : plans.find((p) => p.id === currentPlan)?.icon ? (
                    React.createElement(
                      plans.find((p) => p.id === currentPlan).icon,
                      { className: "h-6 w-6 text-white" }
                    )
                  ) : (
                    <Star className="h-6 w-6 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {currentPlan === "free" || currentPlan === ""
                      ? "Free Plan"
                      : plans.find((p) => p.id === currentPlan)?.name ||
                        "Unknown Plan"}
                  </h2>
                  <p className="text-slate-600">
                    {currentPlan === "free" || currentPlan === ""
                      ? "No subscription. Enjoy our free features!"
                      : `Active until next billing cycle`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">
                  {currentPlan === "free" || currentPlan === ""
                    ? "$0"
                    : `$${
                        plans.find((p) => p.id === currentPlan)?.price[
                          billingCycle
                        ]
                      }`}
                </div>
                <div className="text-sm text-slate-600">
                  {currentPlan === "free" || currentPlan === ""
                    ? "per month"
                    : billingCycle === "yearly"
                    ? "per year"
                    : "per month"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = plan.price[billingCycle];
            const isCurrentPlan = plan.id === currentPlan;

            return (
              <Card
                key={plan.id}
                className={`border-0 shadow-lg relative ${
                  plan.popular ? "border-2 border-blue-500 scale-105" : ""
                } ${isCurrentPlan ? "ring-2 ring-green-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                {isCurrentPlan && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-green-600 text-white">
                      Current Plan
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

                  <Button
                    className={`w-full ${
                      isCurrentPlan
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}
                    disabled={isCurrentPlan || loadingPlan === plan.id}
                    onClick={() => handleCheckout(plan.priceId[billingCycle], plan.id)}
                  >
                    {isCurrentPlan
                      ? "Current Plan"
                      : loadingPlan === plan.id
                      ? "Processing..."
                      : `Upgrade to ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Billing;