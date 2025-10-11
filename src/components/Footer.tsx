import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Dribbble, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-al-mamun-243j2n24/", label: "LinkedIn" },
  { icon: Dribbble, href: "https://dribbble.com/Abdullahnahid7", label: "Dribbble" },
  { icon: Facebook, href: "https://www.facebook.com/abdullah.nahid.395895", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/+8801843270387", label: "WhatsApp" }
];

const quickLinks = [
  { label: "About", href: "#hero" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#footer-banner" }
];

export function Footer() {
  const handleScheduleCall = () => {
    // Open Gmail compose in browser for scheduling
    const emailAddress = "abdullahnahid28@gmail.com";
    const subject = encodeURIComponent("Get In Touch - Project Consultation");
    const body = encodeURIComponent("Hi Abdullah, I'd like to get in touch to discuss a potential project. Please let me know your availability for a consultation.");
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, '_blank');
  };

  const handleQuickLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactEmail = () => {
    const emailAddress = "abdullahnahid28@gmail.com";
    const subject = encodeURIComponent("Project Inquiry");
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`, '_blank');
  };

  const handleContactPhone = () => {
    window.open("tel:+8801843270387", '_self');
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional digital experiences through user-centered design and innovative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto"
                  asChild
                >
                  <a 
                    href={social.href} 
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(link.href, e)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mobile App Design</li>
              <li>Web Application Design</li>
              <li>UX Research & Strategy</li>
              <li>Design Systems</li>
              <li>Consultation</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div 
                className="flex items-center space-x-3 text-sm cursor-pointer hover:text-foreground transition-colors"
                onClick={handleContactEmail}
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">abdullahnahid28@gmail.com</span>
              </div>
              <div 
                className="flex items-center space-x-3 text-sm cursor-pointer hover:text-foreground transition-colors"
                onClick={handleContactPhone}
              >
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+880 1843270387</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Chattagram, Bangladesh</span>
              </div>
            </div>
            <Button className="w-full" onClick={handleScheduleCall}>
              Get In Touch
            </Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Abdullah Al Mamun. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}