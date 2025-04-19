// src/components/Features.tsx
import { FileText, Share2, Lock, Globe, Zap, Server } from "lucide-react";
import { Feature } from "../types";

const Features = () => {
  const features: Feature[] = [
    {
      title: "Simple File Access",
      description: "Access your files easily with the familiar tfs://{folder}/.../file format from any device or location.",
      icon: FileText
    },
    {
      title: "Seamless Sharing",
      description: "Share files and folders with your team or clients with customizable permissions and expiration dates.",
      icon: Share2
    },
    {
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption and comprehensive access controls to keep your data safe and compliant.",
      icon: Lock
    },
    {
      title: "Global Distribution",
      description: "Data is distributed across multiple regions ensuring low-latency access from anywhere in the world.",
      icon: Globe
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed with parallel operations and smart caching strategies for instant access.",
      icon: Zap
    },
    {
      title: "Reliable Infrastructure",
      description: "Built on redundant, fault-tolerant architecture with 99.99% uptime SLA guarantee.",
      icon: Server
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Everything you need to manage, store, and access your files in a distributed environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2 p-6 rounded-lg border bg-card shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;