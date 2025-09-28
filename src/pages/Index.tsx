import Navigation from "@/components/Navigation";
import HowItWorks from "@/components/HowItWorks";
import FilmCard from "@/components/FilmCard";
import EmailCapture from "@/components/EmailCapture";
import FAQ from "@/components/FAQ";
import ReturnsExplainer from "@/components/ReturnsExplainer";
import { Button } from "@/components/ui/button";

// Import film poster images
import filmPoster1 from "@/assets/film-poster-1.jpg";
import filmPoster2 from "@/assets/film-poster-2.jpg";
import filmPoster3 from "@/assets/film-poster-3.jpg";

const filmProjects = [
  {
    title: "Lungsod",
    genre: "Urban Drama",
    director: "Maria Santos",
    cast: ["Carlo Aquino", "Janine Gutierrez", "John Arcilla"],
    targetDate: "March 2025",
    description: "A gripping tale of family and survival in modern Manila's changing landscape.",
    posterUrl: filmPoster1
  },
  {
    title: "Probinsya",
    genre: "Rural Romance",
    director: "Juan dela Cruz",
    cast: ["Alden Richards", "Julia Barretto", "Eddie Garcia"],
    targetDate: "June 2025", 
    description: "Love blooms in the rice fields as tradition meets modernity in this heartwarming story.",
    posterUrl: filmPoster2
  },
  {
    title: "Pag-ibig",
    genre: "Contemporary Romance",
    director: "Anna Reyes",
    cast: ["Daniel Padilla", "Kathryn Bernardo", "Piolo Pascual"],
    targetDate: "September 2025",
    description: "A modern love story that explores connection in the digital age.",
    posterUrl: filmPoster3
  }
];

const Index = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero py-24 md:py-32 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold text-white mb-6 leading-tight">
            Crowdproduce{" "}
            <span className="accent-underline">Filipino films</span>
            {", "}starting at ₱5k–₱10k.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Own a share of pre-production upside with transparent updates and clear terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToElement('email-capture')}
              className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 py-6 h-auto"
            >
              Join the waitlist
            </Button>
            <button
              onClick={() => scrollToElement('how-it-works')}
              className="text-white/90 hover:text-white underline text-lg transition-colors"
            >
              How it works
            </button>
          </div>
        </div>
      </section>

      {/* Projects Available */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-foreground mb-4">
              Films you can back soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover upcoming Filipino film projects from talented directors and established cast members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmProjects.map((film, index) => (
              <FilmCard key={index} {...film} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Returns Explainer */}
      <ReturnsExplainer />

      {/* Email Capture */}
      <section id="email-capture" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-foreground mb-4">
            Get launch updates
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Be the first to know when Filipino films open for crowdproduction.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="gradient-cta py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">
            Ready to join the movement?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be first to access Filipino films open for crowdproduction.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToElement('email-capture')}
            className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 py-6 h-auto"
          >
            Join the waitlist
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-grotesk font-bold text-secondary-foreground mb-2">
                Audience Impact
              </h3>
              <p className="text-secondary-foreground/70 text-sm max-w-md">
                Crowdproducing Filipino films with transparency and clear terms.
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
            <p className="text-secondary-foreground/60 text-sm">
              No promise of returns. Investments are risky and may result in loss.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;