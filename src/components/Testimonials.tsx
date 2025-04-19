// src/components/Testimonials.tsx
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/buttons";
import { Testimonial } from "../types";

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      companyName: "TechCorp Inc.",
      message: "TeeFS has completely transformed how our development team manages and accesses files. The familiar interface meant zero training time, and the performance is incredible.",
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "David Chen",
      role: "DevOps Lead",
      companyName: "CloudSystems",
      message: "The distributed nature of TeeFS gives us the reliability we need without sacrificing ease of use. It's become an essential part of our infrastructure.",
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Data Engineer",
      companyName: "DataFlow Analytics",
      message: "Working with large datasets across multiple regions used to be a nightmare. TeeFS makes it feel like all our files are local, with amazing speeds and rock-solid stability.",
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "Michael Park",
      role: "IT Director",
      companyName: "GlobalTech Solutions",
      message: "The security features in TeeFS gave our compliance team peace of mind, while the intuitive interface keeps our employees happy. It's the best of both worlds.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + (window.innerWidth >= 768 ? 3 : 1));

  const handlePrev = () => {
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Join thousands of satisfied users who have transformed their file management with TeeFS.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col gap-4 p-6 rounded-lg border bg-card shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.companyName}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.message}"</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex >= testimonials.length - (window.innerWidth >= 768 ? 3 : 1)}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;