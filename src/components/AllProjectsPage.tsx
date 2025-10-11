import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Eye, ExternalLink, Calendar, Users } from "lucide-react";

interface AllProjectsPageProps {
  onBack: () => void;
  onViewCaseStudy: (projectId: string) => void;
  onGetInTouch?: () => void;
}

const allProjects = [
  {
    id: "news",
    title: "Business Focused News Magazine Website",
    description: "A modern news magazine delivering sharp insights, trends, and analysis at the intersection of business, finance, and innovation.",
    image: "/News Magazine/1.jpg",
    tags: ["Landing Page", "Wireframe", "Responsive"],
    type: "Task Project",
    duration: "2 days",
    team: "1 people",
    year: "2025"
  },
  {
    id: "lumera",
    title: "Lumera - Skincare Product Detail Page",
    description: "Designed an intuitive skincare product page showcasing pricing, subscriptions, benefits, and reviews for a seamless browsing and purchasing experience.",
    image: "/Lumera/Thumbnail.png",
    tags: ["Web App", "Product Detail", "Ecommerce"],
    type: "Contest Work",
    duration: "2 days",
    team: "1 people",
    year: "2025"
  },
  {
    id: "hrms",
    title: "HR Management System - Admin and User Dashboard",
    description: "Designed a complete HRMS featuring admin and employee dashboards for managing employees, leaves, holidays, announcements, profiles, and seamless user interactions.",
    image: "/HRMS/Thumbnail.jpg",
    tags: ["Dashboard", "Management", "Accessibility"],
    type: "Client Work",
    duration: "1 week",
    team: "1 people",
    year: "2025"
  },
  {
    id: "communaid",
    title: "CommunAid - A Local Community Problem Solving App",
    description: "CommunAid is a case study of a mobile app designed for community problem solving, showcasing research, personas, and full-screen visual designs to improve collective action.",
    image: "/CommunAid/Cover.png",
    tags: ["Mobile App", "Community", "Problem Solving"],
    type: "Case Study",
    duration: "1 week",
    team: "1 people",
    year: "2025"
  },
  {
    id: "food",
    title: "Food Delivery App",
    description: "Designed a food delivery app featuring categorized meals, special offers, multi-category shopping, detailed order pages, and store profile views.",
    image: "/Food Delivery App/Thumbnail.png",
    tags: ["Mobile App", "Food", "User Interface"],
    type: "Personal Work",
    duration: "3 days",
    team: "1 people",
    year: "2024"
  },
  {
    id: "inventory",
    title: "Stocktake and Inventory App",
    description: "Designed Android order-picking & inventory app for warehouse tasks: barcode scanning, lot/expiry tracking, efficient mobile workflow.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc1OTQxMjc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Inventory", "Management"],
    type: "Contest Work",
    duration: "3 days",
    team: "1 people",
    year: "2024"
  },
  {
    id: "redesign",
    title: "Ecommerce Clothing Website Redesign",
    description: "Redesigned an eCommerce clothing website with a clean, consistent layout to enhance usability, visual appeal, and shopping experience.",
    image: "/Ecommerce/Thumbnail.png",
    tags: ["Website", "Fashion", "Responsive"],
    type: "Personal Work",
    duration: "2 days",
    team: "1 people",
    year: "2024"
  },

  {
    id: "RealEstate",
    title: "Real Estate Client portfolio Dashboard",
    description: "Designed a real estate portfolio dashboard displaying ROI, active properties, rental income, and visual analytics for performance insights.",
    image: "/Real estate/Thumbnail.png",
    tags: ["Web App", "Real Estate", "Dashboard"],
    type: "Client Work",
    duration: "1 days",
    team: "1 people",
    year: "2025"
  }
  
];

export function AllProjectsPage({ onBack, onViewCaseStudy, onGetInTouch }: AllProjectsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <ThemeToggle />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of my design work across various industries and platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        onClick={() => onViewCaseStudy(project.id)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        onClick={() => console.log("Live project:", project.id)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {project.type}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                    {project.year}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Like what you see?</h3>
            <p className="text-muted-foreground">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                if (onGetInTouch) {
                  onGetInTouch();
                } else {
                  const emailAddress = "abdullahnahid28@gmail.com";
                  const subject = encodeURIComponent("New Project Inquiry");
                  const body = encodeURIComponent("Hi Abdullah, I'd like to discuss starting a new project with you. Please let me know your availability for a consultation.");
                  
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, '_blank');
                }
              }}
            >
              Start a Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}