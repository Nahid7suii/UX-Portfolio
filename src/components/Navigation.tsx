import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="font-medium">Portfolio</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <Button 
                onClick={() => scrollToSection('footer-banner')}
                className="ml-4"
              >
                Contact
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}