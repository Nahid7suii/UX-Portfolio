import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Search, Lightbulb, Palette, TestTube } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research & Discovery",
    description: "I start by understanding your users, business goals, and market landscape through comprehensive research and stakeholder interviews.",
    phase: "01"
  },
  {
    icon: Lightbulb,
    title: "Ideation & Strategy",
    description: "Based on research insights, I develop creative solutions and strategic approaches that align with user needs and business objectives.",
    phase: "02"
  },
  {
    icon: Palette,
    title: "Design & Prototype",
    description: "I create wireframes, high-fidelity designs, and interactive prototypes that bring the vision to life with attention to detail.",
    phase: "03"
  },
  {
    icon: TestTube,
    title: "Test & Iterate",
    description: "Through user testing and feedback, I refine and optimize the design to ensure the best possible user experience.",
    phase: "04"
  }
];

export function DesignProcess() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Design Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results through user-centered design principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted/20 group-hover:text-primary/30 transition-colors">
                    {step.phase}
                  </span>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-start pb-6">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              
              {/* Connection line for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-border rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}