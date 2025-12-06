import { Download, FileText, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground opacity-0">
            <FileText className="h-4 w-4" />
            Free Document Library
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up stagger-1 mb-6 text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl lg:text-6xl">
            Your Document{" "}
            <span className="text-gradient">Resource Center</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up stagger-2 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 sm:text-xl">
            Access and download important documents, guides, and resources. 
            Everything you need, organized in one place.
          </p>

          {/* Stats */}
          <div className="animate-fade-up stagger-3 flex flex-wrap items-center justify-center gap-8 opacity-0 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Documents</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">Free</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">Easy</p>
                <p className="text-sm text-muted-foreground">Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
