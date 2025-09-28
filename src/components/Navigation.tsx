import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-grotesk font-bold text-foreground">
              Audience Impact
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToElement('email-capture')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </button>
            <Button 
              onClick={() => scrollToElement('email-capture')}
              className="gradient-cta hover:opacity-90 transition-opacity"
            >
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;