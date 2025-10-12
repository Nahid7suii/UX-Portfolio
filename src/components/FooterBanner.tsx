import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function FooterBanner() {
  const emailAddress = "abdullahnahid28@gmail.com";
  const subject = encodeURIComponent("Project Inquiry");
  const body = encodeURIComponent(
    "Hi Abdullah, I'm interested in discussing a project with you. I'd like to learn more about your services and availability."
  );

  const handleGetInTouch = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault(); // Prevent mailto from triggering on desktop
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");
    }
  };

  return (
    <section id="footer-banner" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Create Something
              <span className="block">Amazing Together?</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Let's transform your ideas into exceptional digital experiences that users love and businesses thrive on.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
              onClick={handleGetInTouch}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group border-0"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">24h</div>
              <div className="text-sm text-primary-foreground/70">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">2-4 weeks</div>
              <div className="text-sm text-primary-foreground/70">Project Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}