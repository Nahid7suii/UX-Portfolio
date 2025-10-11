import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Smartphone, Monitor, Users, Zap, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Native and cross-platform mobile applications designed for optimal user experience and engagement.",
    features: ["iOS & Android Design", "Responsive Layouts", "Touch Interactions", "App Store Guidelines"]
  },
  {
    icon: Monitor,
    title: "Web Application Design",
    description: "Modern web applications and dashboards that are both beautiful and highly functional.",
    features: ["Responsive Design", "Component Systems", "Accessibility Standards", "Performance Optimization"]
  },
  {
    icon: Users,
    title: "UX Research & Strategy",
    description: "In-depth user research and strategic planning to ensure your product meets real user needs.",
    features: ["User Interviews", "Usability Testing", "Journey Mapping", "Strategic Planning"]
  },
  {
    icon: Zap,
    title: "Design Systems",
    description: "Comprehensive design systems that ensure consistency and scalability across your product ecosystem.",
    features: ["Component Libraries", "Style Guides", "Documentation", "Team Training"]
  }
];

export function Services() {
  const handleGetStarted = () => {
    document.getElementById('footer-banner')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsultation = () => {
    // Navigate to contact section
    document.getElementById('footer-banner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services to help bring your digital product vision to life with exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full group-hover:bg-primary/90 transition-colors"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored approach that fits your goals and budget.
          </p>
          <Button size="lg" onClick={handleConsultation}>
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}