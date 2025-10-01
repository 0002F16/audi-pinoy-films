import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UnifiedPopup from "./UnifiedPopup";

const Navigation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = () => {
    setShowPopup(true);
  };

  const handleSignUp = () => {
    setShowPopup(true);
  };

  const handleViewProjects = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-xl font-proxima font-bold text-foreground hover:text-primary transition-colors">
                Audience Impact
              </h1>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleViewProjects}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              View Projects
            </button>
            <button 
              onClick={() => {/* TODO: Navigate to About Us page */}}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={handleLogin}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </button>
            <Button 
              onClick={handleSignUp}
              className="gradient-cta hover:opacity-90 transition-opacity"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Unified Popup */}
      <UnifiedPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </nav>
  );
};

export default Navigation;