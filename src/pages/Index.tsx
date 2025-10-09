import Navigation from "@/components/Navigation";
import HowItWorks from "@/components/HowItWorks";
import FilmCard from "@/components/FilmCard";
import FAQ from "@/components/FAQ";
import ReturnsExplainer from "@/components/ReturnsExplainer";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useUpcomingFilms } from "@/hooks/useFilms";


const Index = () => {
  const { films: upcomingFilms, loading, error } = useUpcomingFilms();

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-proxima font-bold text-white mb-6 leading-tight">
            Crowdproduce Films
            <br />
            starting at ₱5,000
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Own a share of pre-production upside with transparent updates and clear terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToElement('how-it-works')}
              className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 py-6 h-auto w-full sm:w-auto"
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
      <section id="projects" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-proxima font-bold text-foreground mb-4">
              Films you can back soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover upcoming Filipino film projects from talented directors and established cast members.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-muted-foreground">Loading films...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-red-500">Error loading films: {error}</div>
            </div>
          ) : upcomingFilms.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-muted-foreground">No upcoming films available at the moment.</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingFilms.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Returns Explainer */}
      <ReturnsExplainer />


      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="gradient-cta py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-white mb-4">
            Ready to join the movement?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be first to access Filipino films open for crowdproduction.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToElement('how-it-works')}
            className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 py-6 h-auto w-full sm:w-auto"
          >
            Join the waitlist
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;