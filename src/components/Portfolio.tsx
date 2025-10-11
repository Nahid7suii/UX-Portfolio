import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const initialProjects = [
  {
    id: "hrms",
    title: "HR Management System - Admin and User Dashboard",
    description: "Designed a complete HRMS featuring admin and employee dashboards for managing employees, leaves, holidays, announcements, profiles, and seamless user interactions.",
    image: "/HRMS/Thumbnail.jpg",
    tags: ["Dashboard", "Management", "Accessibility"],
    type: "Client Work"
  },
  
  {
    id: "RealEstate",
    title: "Real Estate Client portfolio Dashboard",
    description: "Designed a real estate portfolio dashboard displaying ROI, active properties, rental income, and visual analytics for performance insights.",
    image: "/Real estate/Thumbnail.png",
    tags: ["Web App", "Real Estate", "Dashboard"],
    type: "Client Work"
  },

  {
    id: "lumera",
    title: "Lumera - Skincare Product Detail Page",
    description: "Designed an intuitive skincare product page showcasing pricing, subscriptions, benefits, and reviews for a seamless browsing and purchasing experience.",
    image: "/Lumera/Thumbnail.png",
    tags: ["Web App", "Product Detail", "Ecommerce"],
    type: "Contest Work"
  },

  {
    id: "news",
    title: "Business Focused News Magazine Website",
    description: "A modern news magazine delivering sharp insights, trends, and analysis at the intersection of business, finance, and innovation.",
    image: "/News Magazine/1.jpg",
    tags: ["Landing Page", "Wireframe", "Responsive"],
    type: "Task Project"
  },
  

  {
    id: "communaid",
    title: "CommunAid - A Local Community Problem Solving App",
    description: "CommunAid is a case study of a mobile app designed for community problem solving, showcasing research, personas, and full-screen visual designs to improve collective action.",
    image: "/CommunAid/Cover.png",
    tags: ["Mobile App", "Community", "Problem Solving"],
    type: "Case Study"
  }
];

const additionalProjects = [
  {
    id: "food",
    title: "Food Delivery App",
    description: "Designed a food delivery app featuring categorized meals, special offers, multi-category shopping, detailed order pages, and store profile views.",
    image: "/Food Delivery App/Thumbnail.png",
    tags: ["Mobile App", "Food", "User Interface"],
    type: "Personal Work"
  },
  {
    id: "inventory",
    title: "Stocktake and Inventory App",
    description: "Designed Android order-picking & inventory app for warehouse tasks: barcode scanning, lot/expiry tracking, efficient mobile workflow.",
    image: "/Stock and delivery/Thumbnail.png",
    tags: ["Mobile App", "Inventory", "Management"],
    type: "Contest Work"
  },
  {
    id: "redesign",
    title: "Ecommerce Clothing Website Redesign",
    description: "Redesigned an eCommerce clothing website with a clean, consistent layout to enhance usability, visual appeal, and shopping experience.",
    image: "/Ecommerce/Thumbnail.png",
    tags: ["Website", "Fashion", "Responsive"],
    type: "Personal Work"
  }
  
];

interface PortfolioProps {
  onViewCaseStudy?: (projectId: string) => void;
}

export function Portfolio({ onViewCaseStudy }: PortfolioProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const allProjects = showAllProjects ? [...initialProjects, ...additionalProjects] : initialProjects;
  const handleCaseStudyClick = (projectId: string) => {
    if (onViewCaseStudy) {
      onViewCaseStudy(projectId);
    }
  };

  const handleLiveViewClick = (projectId: string) => {
    // This would typically open a live demo or prototype
    window.open(`https://prototype-demo-${projectId}.example.com`, '_blank');
  };

  const handleViewAllClick = () => {
    setShowAllProjects(true);
  };

  const handleViewLessClick = () => {
    setShowAllProjects(false);
    // Scroll to portfolio section for better UX
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and case studies showcasing user-centered design solutions across various industries.
          </p>
        </div>
        
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
                      onClick={() => handleCaseStudyClick(project.id)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      onClick={() => handleLiveViewClick(project.id)}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {project.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {!showAllProjects ? (
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleViewAllClick}
            >
              View All Projects
            </Button>
          ) : (
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleViewLessClick}
            >
              View Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}