// src/components/Pricing.tsx
import { Check } from "lucide-react";
import { Button } from "@/components/ui/buttons";
import { PricingTier } from "../types";
import { Link } from "react-router-dom";

const Pricing = () => {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$9.99",
      description: "Perfect for individuals and small projects",
      features: [
        "100 GB Storage",
        "5 Team Members",
        "Basic File Operations",
        "Standard Support",
        "7-day Retention"
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$29.99",
      description: "Ideal for growing teams and businesses",
      features: [
        "1 TB Storage",
        "15 Team Members",
        "Advanced File Operations",
        "Priority Support",
        "30-day Retention",
        "Access Controls",
        "API Access"
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited Storage",
        "Unlimited Team Members",
        "Custom Integration",
        "24/7 Dedicated Support",
        "90-day Retention",
        "Advanced Security Controls",
        "SLA Guarantee",
        "Custom Deployment Options"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Choose the plan that works best for your needs. All plans include access to our core features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-lg border ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "bg-card shadow"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
                </div>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-2">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                variant={tier.highlighted ? "default" : "outline"}
              >
                <Link to={tier.name === "Enterprise" ? "/#contact" : "/login"}>
                  {tier.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;