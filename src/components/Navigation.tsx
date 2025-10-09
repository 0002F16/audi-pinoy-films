import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import UnifiedPopup from "./UnifiedPopup";

const Navigation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLElement>(null);

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


  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [isMobile, isMobileMenuOpen]);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-background border-b border-border">
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

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <Link 
                to="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                View Projects
              </Link>
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
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Sign up
              </Button>
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div className={`absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/projects"
                onClick={closeMobileMenu}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                View Projects
              </Link>
              <button 
                onClick={() => {
                  /* TODO: Navigate to About Us page */
                  closeMobileMenu();
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  handleLogin();
                  closeMobileMenu();
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Login
              </button>
              <button 
                onClick={() => {
                  handleSignUp();
                  closeMobileMenu();
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unified Popup */}
      <UnifiedPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </nav>
  );
};

export default Navigation;