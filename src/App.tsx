import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { DesignProcess } from "./components/DesignProcess";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { FooterBanner } from "./components/FooterBanner";
import { Footer } from "./components/Footer";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { AllProjectsPage } from "./components/AllProjectsPage";
import { ScrollToTop } from "./components/ScrollToTop";

type PageType = 'home' | 'case-study' | 'all-projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  const handleViewCaseStudy = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('case-study');
    window.scrollTo(0, 0);
  };



  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleGetInTouch = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for the page to render then scroll to footer
      setTimeout(() => {
        document.getElementById('footer-banner')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('footer-banner')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPage === 'case-study') {
    return (
      <>
        <CaseStudyPage 
          projectId={selectedProjectId}
          onBack={handleBackToHome}
          onGetInTouch={handleGetInTouch}
        />
        <ScrollToTop />
      </>
    );
  }

  if (currentPage === 'all-projects') {
    return (
      <>
        <AllProjectsPage 
          onBack={handleBackToHome}
          onViewCaseStudy={handleViewCaseStudy}
          onGetInTouch={handleGetInTouch}
        />
        <ScrollToTop />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <DesignProcess />
        <Portfolio 
          onViewCaseStudy={handleViewCaseStudy}
        />
        <Services />
        <FooterBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}