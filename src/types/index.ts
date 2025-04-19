// src/types/index.ts
export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    buttonText: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    companyName: string;
    message: string;
    avatar: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }