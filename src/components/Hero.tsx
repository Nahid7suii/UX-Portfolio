import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Creating Digital
                <span className="block text-primary">Experiences</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                I'm a UI/UX Designer passionate about crafting intuitive and beautiful digital products that solve real problems and delight users.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume.pdf';
                  link.download = 'Abdullah Al Mamun-UX-Designer-Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            {/* Circular Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl">
                <ImageWithFallback
                  src="/Hero-Profile.png"
                  alt="Abdullah Al Mamun - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Chat Bubble */}
              <div className="absolute -top-6 -left-8 bg-primary text-primary-foreground px-4 py-3 rounded-2xl shadow-lg animate-pulse">
                <div className="relative">
                  <p className="text-sm font-medium whitespace-nowrap">Hi, I am Abdullah Al Mamun</p>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary"></div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-12 bg-card p-3 rounded-lg shadow-lg border">
                <div className="text-sm font-medium">Design & Prototyping</div>
                <div className="text-xs text-muted-foreground">Figma</div>
              </div>
              
              <div className="absolute -bottom-8 -left-12 bg-card p-3 rounded-lg shadow-lg border">
                <div className="text-sm font-medium">User Research</div>
                <div className="text-xs text-muted-foreground">Insights & Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}