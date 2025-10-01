import { useState, useEffect } from "react";
import FilmCard from "@/components/FilmCard";
import { Film } from "@/types/film";
import { FilmService } from "@/services/filmService";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UnifiedPopup from "./UnifiedPopup";

type RecommendedFilmsProps = {
  currentFilmId: string;
};

const RecommendedFilms = ({ currentFilmId }: RecommendedFilmsProps) => {
  const [recommendedFilms, setRecommendedFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchRecommendedFilms = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get all films and filter out the current one
        const allFilms = await FilmService.getAllFilms();
        const filteredFilms = allFilms
          .filter(film => film.id !== currentFilmId)
          .slice(0, 3); // Show only 3 recommendations
        
        setRecommendedFilms(filteredFilms);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recommended films');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedFilms();
  }, [currentFilmId]);

  const handleViewAllFilms = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="text-muted-foreground">Loading recommendations...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || recommendedFilms.length === 0) {
    return null; // Don't show section if there are no recommendations
  }

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-proxima font-bold text-foreground mb-2">
              You might also like
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover other films ready for investment
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleViewAllFilms}
            className="hidden md:flex items-center gap-2"
          >
            View all films
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedFilms.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button 
            variant="outline" 
            onClick={handleViewAllFilms}
            className="flex items-center gap-2"
          >
            View all films
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Unified Popup */}
      <UnifiedPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </section>
  );
};

export default RecommendedFilms;
