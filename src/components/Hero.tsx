// src/components/Hero.tsx
import { Button } from "@/components/ui/buttons";
import { Link } from "react-router-dom";
import { Database, Cloud, Save } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Access Your Files Anywhere with TeeFS
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A distributed file system with familiar interfaces. Access your data just like S3 or Google Drive, but with the power of distributed storage.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/login">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#contact">Contact Sales</Link>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-8 text-card-foreground shadow">
              <Database className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Distributed Storage</h3>
              <p className="text-center text-muted-foreground">
                Resilient, fault-tolerant data storage across multiple nodes
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-8 text-card-foreground shadow">
              <Cloud className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Universal Access</h3>
              <p className="text-center text-muted-foreground">
                Simple tfs:// protocol lets you access files from anywhere
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-8 text-card-foreground shadow">
              <Save className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Familiar Interface</h3>
              <p className="text-center text-muted-foreground">
                Works just like S3 or Google Drive, with the tools you already know
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;