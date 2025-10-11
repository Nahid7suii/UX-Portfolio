import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Lightbulb } from "lucide-react";

interface CaseStudyPageProps {
  projectId: string;
  onBack: () => void;
  onGetInTouch?: () => void;
}

const caseStudies = {
  news: {
    title: "Business Focused News Magazine Website",
    subtitle: "User Friendly Website Design.",
    description: "A complete mobile shopping experience with intuitive navigation, seamless checkout, and personalized recommendations.",
    image: "/News Magazine/1.jpg",
    tags: ["Landing Page", "Wireframe", "Responsive"],
    duration: "2 days",
    team: "1 people",
    role: "Lead UX/UI Designer",
    client: "Task Project",
        challenge: [
      "Information Overload: Business news readers often face difficulty navigating through multiple categories and sources to find relevant updates quickly.",
      "Poor Content Hierarchy: Many existing business news platforms have cluttered homepages, making it hard for users to distinguish between featured, latest, and category-based articles.",
      "Low Engagement: Readers often leave after reading one article due to the lack of discovery elements like related or trending news.",
      "Unclear Navigation: Inconsistent or complex navigation structures make it challenging for users to find specific topics such as Market, Tech, or Economy.",
      "Trust and Readability: Cluttered interfaces reduce credibility and readability, which are crucial for business-focused audiences."
    ],
    solution: [
      "Structured Layout: Designed a clear homepage hierarchy that separates Latest, Featured, and Category-based news, improving scannability.",
      "Simple Navigation: Created a consistent, well-labeled navigation bar to help users explore different news sections effortlessly.",
      "Responsive Design: Ensured seamless usability across desktop, tablet, and mobile devices for accessibility on the go.",
      "Readable Typography: Applied professional fonts, balanced spacing, and clean visual hierarchy to enhance readability and trust.",
      "Engagement Features: Added related article recommendations and trending news sections to encourage continued user engagement."
    ],
    outcomes: [
  "Improved Readability: Users can easily scan and consume business news due to a clear content hierarchy and professional typography.",
  "Enhanced Navigation: The consistent navigation bar allows users to quickly access different news categories, reducing friction.",
  "Increased Engagement: Related articles and trending news sections encourage users to explore more content, boosting time on site.",
  "Responsive Experience: Seamless usability across desktop, tablet, and mobile ensures users can stay updated anytime, anywhere."
],

    process: [
      { phase: "Research", description: "Competitive analysis, and usability testing of the existing app" },
      { phase: "Ideation", description: "Collaborative workshops to generate solutions and prioritize features" },
      { phase: "Design", description: "Created wireframes, prototypes, and high-fidelity designs" },
      { phase: "Feedback", description: "Used user and stakeholder feedback to refine designs and meet key goals." }
    ],
    gallery: [
      "/News Magazine/Wireframe.jpg",
      "/News Magazine/Thumbnail.png",
      "/News Magazine/Hi-fi  (Desktop).jpg"
    ]
  },
  lumera: {
    title: "Lumera - Skincare Product Detail Page",
    subtitle: "Simplifying Complex Buying Journey",
    description: "Designed an intuitive skincare product page showcasing pricing, subscriptions, benefits, and reviews for a seamless browsing and purchasing experience.",
    image: "/Lumera/Thumbnail.png",
    tags: ["Web App", "Product Detail", "Ecommerce"],
    duration: "2 days",
    team: "1 people",
    role: "Lead UX Designer",
    client: "Contest",
    challenge: [
  "Complex Purchase Options: Users may get confused by multiple subscription plans and pricing options, leading to hesitation in completing a purchase.",
  "Content Hierarchy: Important information like product benefits and user reviews can get overlooked if not presented clearly.",
  "User Trust: Without clear presentation of reviews and benefits, users may hesitate to buy, affecting conversion.",
  "Seamless Experience: Ensuring the page allows users to browse, select options, and purchase without friction across devices."
],
solution: [
  "Clear Pricing & Subscription Options: Designed an intuitive interface for selecting subscriptions and viewing discounts.",
  "Structured Content Layout: Highlighted product benefits and user reviews in dedicated sections for easy scanning.",
  "Trust & Credibility: Incorporated authentic user reviews and clear benefit descriptions to build confidence.",
  "Smooth Purchase Flow: Ensured seamless navigation from browsing to checkout with a responsive design for all devices."
],

   outcomes: [
  "Users easily understand pricing, benefits, and reviews.",
  "Clear layout encourages exploring subscriptions and product details.",
  "Reviews and benefits boost user confidence to purchase.",
  "Smooth browsing and checkout across all devices."
],

    process: [
      { phase: "Research", description: "Gathered user needs and market insights for design direction." },
      { phase: "Wireframing", description: "Created low-fidelity layouts to structure content and flow." },
      { phase: "UI Design", description: "Developed visual elements ensuring clarity and brand consistency." },
      { phase: "Feedback", description: "Incorporated user input to refine and improve the design." }
    ],
    gallery: [
      "/Lumera/Thumbnail.png",
      "/Lumera/Lumera - Desktop view.png",
     
    ]
  },
  hrms: {
    title: "HR Management System - Admin and User Dashboard",
    subtitle: "Efficient HR Management with Intuitive Admin and Employee Dashboards",
    description: "Designed a complete HRMS featuring admin and employee dashboards for managing employees, leaves, holidays, announcements, profiles, and seamless user interactions.",
    image: "/HRMS/Thumbnail.jpg",
    tags: ["Dashboard", "Management", "Accessibility"],
    duration: "1 week",
    team: "1 people",
    role: "Lead UI/UX Designer",
    client: "DigidenIT",
    challenge: [
  "Complex Management: Admins need an organized system to manage employees, leaves, holidays, and announcements efficiently.",
  "User Accessibility: Employees require easy access to their profiles, leave management, and colleague information.",
  "Information Overload: Displaying multiple management features without overwhelming users is challenging.",
  "Seamless Interaction: Ensuring smooth navigation between admin and employee dashboards across devices."
],
solution: [
  "Organized Admin Panel: Structured sections for employee, leave, holiday, and announcement management.",
  "Intuitive Employee Dashboard: Easy access to profiles, leaves, and employee directory.",
  "Clear Layout: Simplified content hierarchy to reduce cognitive load for users.",
  "Consistent UI: Maintained uniform design elements to ensure clarity and ease of use."
],

    outcomes: [
      "Admins can handle employees, leaves, holidays, announcements seamlessly.",
      "Employees quickly access profiles, leave requests, and colleagues.",
      "Clear layout reduces confusion and simplifies dashboard navigation.",
      "Dashboards work smoothly across devices for all users."
    ],
    process: [
      { phase: "Requirement Analysis", description: "Defined key features and functionalities for both dashboards." },
      { phase: "User Flow Design", description: "Mapped out interactions for admins and employees efficiently." },
      { phase: "Prototyping", description: "Built interactive prototypes to validate design concepts." },
      { phase: "Usability Testing", description: "Collected feedback to improve navigation and overall experience." }
    ],
    gallery: [
      "/HRMS/Admin Preview.jpg",
      "/HRMS/User Preview.jpg",
    ]
  },
  communaid: {
    title: "CommunAid - A Local Community Problem Solving App",
    subtitle: "Empowering Communities to Collaborate and Solve Local Problems Together",
    description: "CommunAid is a case study of a mobile app designed for community problem solving, showcasing research, personas, and full-screen visual designs to improve collective action.",
    image: "/CommunAid/Cover.png",
    tags: ["Mobile App", "Community", "Problem Solving"],
    duration: "1 week",
    team: "1 people",
    role: "UX/UI Designer",
    client: "Personal Work",
    challenge: [
  "Lack of Collaboration: Communities often struggle to communicate and solve local issues collectively.",
  "Low Engagement: Residents have limited motivation or tools to participate in community problem-solving.",
  "Information Gap: Difficulty in tracking ongoing issues and proposed solutions within neighborhoods.",
  "User Accessibility: Ensuring the platform is easy to use for all age groups."
],
solution: [
  "Community-Centric Design: Created an intuitive platform to connect residents and foster collaboration.",
  "Engagement Features: Added task sharing, upvoting, and progress tracking to boost participation.",
  "Issue Tracking System: Enabled users to report, discuss, and monitor local problems effectively.",
  "Inclusive Interface: Designed a simple, accessible UI suitable for users of all ages."
],

    outcomes: [
  "Improved collaboration: Residents connect to solve local issues together.",
  "Higher engagement: Interactive features encourage active community participation.",
  "Better transparency: Users track issue progress and stay informed.",
  "Easy accessibility: Simple interface supports all age groups smoothly."
],

    process: [
      { phase: "Problem Understanding", description: "Analyzed community challenges to identify key issues to address." },
      { phase: "User Research", description: "Studied user behavior and gathered insights to uncover pain points." },
      { phase: "Ideation", description: "Brainstormed and conceptualized effective solutions based on research findings." },
      { phase: "Design Execution", description: "Translated insights into an intuitive, user-friendly community app interface." }
    ],
    gallery: [
      "/CommunAid/User Research.png",
      "/CommunAid/Solution.png",
      "/CommunAid/Final Presentation.png"
    ]
  },

  food: {
    title: "Food Delivery App",
    subtitle: "Smart Food and Essentials Delivery with Seamless User Experience",
    description: "Designed a food delivery app featuring categorized meals, special offers, multi-category shopping, detailed order pages, and store profile views.",
    image: "/Food Delivery App/Thumbnail.png",
    tags: ["Mobile App", "Food", "User Interface"],
    duration: "3 days",
    team: "1 people",
    role: "UX/UI Designer",
    client: "Personal Work",
    challenge: [
  "Complex Categorization: Managing multiple food categories and non-food items without cluttering the interface.",
  "User Navigation: Ensuring users can easily switch between food, grocery, and medicine sections.",
  "Offer Visibility: Displaying ongoing deals and discounts clearly without overwhelming the layout.",
  "Order Clarity: Designing an order page that presents all details in a simple, readable format."
],
solution: [
  "Organized Layout: Structured categories for food and essentials with clear visual hierarchy.",
  "Smooth Navigation: Implemented intuitive tabs for effortless section switching between item types.",
  "Highlighted Offers: Designed promotional banners and cards to showcase current deals effectively.",
  "Clear Order Interface: Created a clean, informative order page for a transparent checkout process."
],


   outcomes: [
  "Users easily find food and essentials by category.",
  "Clear offers encourage more frequent app interaction.",
  "Clean interface ensures quick and transparent order placement.",
  "Intuitive navigation provides a smooth, user-friendly experience."
],


    process: [
      { phase: "Research", description: "Studied user needs and market trends in food delivery apps." },
      { phase: "Competitive Analysis", description: "Analyzed existing apps to identify gaps and opportunities." },
      { phase: "Design", description: "Created intuitive interfaces with organized categories and clear navigation." },
      { phase: "Feedback", description: "Gathered user insights to refine and improve overall usability." }
    ],
    gallery: [
      "/Food Delivery App/preview1.png",
      "/Food Delivery App/preview2.png"
    ]
  },

  inventory: {
    title: "Stocktake and Inventory App",
    subtitle: "Streamlined Mobile Inventory Management for Warehouses",
    description: "Designed Android order-picking & inventory app for warehouse tasks: barcode scanning, lot/expiry tracking, efficient mobile workflow.",
    image: "/Stock and delivery/Thumbnail.png",
    tags: ["Mobile App", "Inventory", "Management"],
    duration: "3 days",
    team: "1 people",
    role: "UX/UI Designer",
    client: "Personal Work",
      challenge: [
    "Inventory Complexity: Managing large product databases with varying stock levels and expiry dates.",
    "Order Accuracy: Ensuring pickers select the correct items efficiently without confusion.",
    "Workflow Efficiency: Reducing time spent navigating between picking, scanning, and updating inventory.",
    "Usability: Designing an interface simple enough for quick adoption by warehouse staff."
  ],
  solution: [
    "Smart Inventory System: Organized products with real-time stock updates and expiry tracking.",
    "Accurate Order Picking: Integrated barcode scanning to minimize human error during selection.",
    "Optimized Workflow: Streamlined navigation for faster task switching and smoother operations.",
    "User-Friendly Design: Created a clean, intuitive interface tailored for warehouse efficiency."
  ],



    outcomes: [
    "Barcode scanning reduced picking and inventory errors significantly.",
    "Streamlined workflow increased warehouse task efficiency and speed.",
    "Live updates ensured accurate stock and expiry monitoring.",
    "Simple interface enabled quick learning for warehouse employees."
  ],


    process: [
      { phase: "Research", description: "Explored warehouse workflows and user needs in inventory management." },
      { phase: "Analysis", description: "Studied existing systems to identify challenges in order picking and tracking." },
      { phase: "Wireframing", description: "Planned efficient layouts to simplify inventory and order management tasks." },
      { phase: "UI Design", description: "Designed a clean, intuitive interface for seamless warehouse operations." }
    ],
    gallery: [
      "/Stock and delivery/preview1.png",
      "/Stock and delivery/preview2.png",
      "/Stock and delivery/preview3.png"
    ]
  },

  redesign: {
    title: "Ecommerce Clothing Website Redesign",
    subtitle: "Modern, Minimal, and Consistent eCommerce Experience",
    description: "Redesigned an eCommerce clothing website with a clean, consistent layout to enhance usability, visual appeal, and shopping experience.",
    image: "/Ecommerce/Thumbnail.png",
    tags: ["Website", "Fashion", "Responsive"],
    duration: "2 days",
    team: "1 people",
    role: "UX/UI Designer",
    client: "Personal Work",
      challenge: [
  "Visual Clutter: The previous design lacked structure, making navigation and browsing difficult.",
  "Inconsistent Design: Mixed typography, spacing, and colors created a disjointed user experience.",
  "Poor Product Focus: Visual distractions drew attention away from the clothing items.",
  "User Engagement: The outdated layout reduced user interest and conversion potential."
],
solution: [
  "Clean Layout: Redesigned the interface with clear spacing and visual hierarchy.",
  "Consistent Design System: Applied unified typography, colors, and components across all pages.",
  "Product-Centered Approach: Highlighted clothing items with large visuals and minimal distractions.",
  "Improved UX Flow: Simplified navigation and enhanced the overall shopping experience."
],

    outcomes: [
  "Enhanced usability: Users navigate and shop more easily with a clear layout.",
  "Stronger branding: Consistent visuals reflect the clothing brand’s modern identity.",
  "Better engagement: Clean design keeps users focused on products and offers.",
  "Improved conversions: Streamlined experience encourages quicker purchase decisions."
],


    process: [
      { phase: "Research", description: "Studied user behavior and pain points in online clothing shopping." },
      { phase: "Competitive Analysis", description: "Reviewed leading fashion websites to identify design trends and opportunities." },
      { phase: "Design", description: "Created a clean, consistent, and visually engaging eCommerce interface." },
      { phase: "Refinement", description: "Polished layout and visuals to ensure brand alignment and usability." }
    ],
    gallery: [
      "/Ecommerce/redesign1.png",
      "/Ecommerce/redesign2.png",
      "/Ecommerce/landing.png",
      "/Ecommerce/product.png"
    ]
  },
  RealEstate: {
    title: "Real Estate Client portfolio Dashboard",
    subtitle: "Comprehensive Real Estate Portfolio Management Dashboard",
    description: "Designed a real estate portfolio dashboard displaying ROI, active properties, rental income, and visual analytics for performance insights.",
    image: "/Real estate/Thumbnail.png",
    tags: ["Web App", "Real Estate", "Dashboard"],
    duration: "1 days",
    team: "1 people",
    role: "UX/UI Designer",
    client: "Client Work",
        challenge: [
      "Data Complexity: Displaying multiple financial metrics without overwhelming the user.",
      "Visual Clarity: Ensuring charts and graphs are easy to interpret at a glance.",
      "Information Hierarchy: Prioritizing key insights like ROI and rental income effectively.",
      "User Experience: Balancing detailed analytics with a clean, intuitive interface."
    ],
    solution: [
      "Structured Dashboard: Organized data into clear sections for quick portfolio overview.",
      "Data Visualization: Used intuitive charts and graphs to simplify complex insights.",
      "Clear Hierarchy: Highlighted ROI, active properties, and income as primary metrics.",
      "Minimalist Design: Maintained a clean layout for better readability and engagement."
    ],

   outcomes: [
  "Users instantly see key metrics and summaries.",
  "Visual analytics support informed investment choices.",
  "Charts simplify understanding property growth and allocation.",
  "Streamlined interface enhances user interaction and productivity."
],
    process: [
      { phase: "Requirement Gathering", description: "Understood client needs and investment tracking goals." },
      { phase: "Reference Research", description: "Explored existing dashboards for inspiration and best practices." },
      { phase: "Ideation", description: "Planned layout, metrics, and visualizations based on insights." },
      { phase: "Design Execution", description: "Created a clean, intuitive dashboard tailored to client requirements." }
    ],
    gallery: [
      "/Real estate/login.png",
      "/Real estate/dashboard.png"
    ]
  }
};

export function CaseStudyPage({ projectId, onBack, onGetInTouch }: CaseStudyPageProps) {
  const study = caseStudies[projectId as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {study.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{study.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{study.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{study.description}</p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ImageWithFallback
              src={study.image}
              alt={study.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Duration</div>
                  <div className="text-sm text-muted-foreground">{study.duration}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Team Size</div>
                  <div className="text-sm text-muted-foreground">{study.team}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">My Role</div>
                  <div className="text-sm text-muted-foreground">{study.role}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Client</div>
                  <div className="text-sm text-muted-foreground">{study.client}</div>
                </CardContent>
              </Card>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-destructive">The Challenge</h3>
                  {Array.isArray(study.challenge) ? (
  <ul className="list-disc list-inside text-muted-foreground space-y-2">
    {study.challenge.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
)}
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">The Solution</h3>
                  {Array.isArray(study.solution) ? (
  <ul className="list-disc list-inside text-muted-foreground space-y-2">
    {study.solution.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
)}

                </CardContent>
              </Card>
            </div>

            {/* Process */}
            <Card className="mb-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Design Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {study.process.map((step, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <h4 className="font-semibold">{step.phase}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outcomes */}
            <Card className="mb-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Key Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Project Gallery</h3>
          <div className="space-y-6"> 
            {study.gallery.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt={`${study.title} gallery ${index + 1}`}
                className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
              />
            ))}
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Interested in working together?</h3>
            <p className="text-muted-foreground">
              Let's discuss how I can help bring your next project to life with exceptional user experiences.
            </p>
            <Button
              size="lg"
              onClick={() => {
                if (onGetInTouch) {
                  onGetInTouch();
                } else {
                  const emailAddress = "abdullahnahid28@gmail.com";
                  const subject = encodeURIComponent("Project Collaboration Inquiry");
                  const body = encodeURIComponent(
                    "Hi Abdullah, I'm interested in discussing a potential project collaboration. I'd love to learn more about your design process and how we can work together."
                  );
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, "_blank");
                }
              }}
            >
              Get In Touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
