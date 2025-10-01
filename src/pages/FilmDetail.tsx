import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FilmGallery from "@/components/FilmGallery";
import InvestmentPanel from "@/components/InvestmentPanel";
import FilmInfo from "@/components/FilmInfo";
import RecommendedFilms from "@/components/RecommendedFilms";
import Footer from "@/components/Footer";
import UnifiedPopup from "@/components/UnifiedPopup";
import { Film } from "@/types/film";
import { FilmService } from "@/services/filmService";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Heart } from "lucide-react";

const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchFilm = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        const filmData = await FilmService.getFilmById(id);
        if (filmData) {
          setFilm(filmData);
        } else {
          setError("Film not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch film");
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-muted-foreground">Loading film details...</div>
        </div>
      </div>
    );
  }

  if (error || !film) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <div className="text-red-500 text-center">
            {error || "Film not found"}
          </div>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Films
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header with film title and synopsis */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {film.title}
              </h1>
              
              {/* Genre, Date, Country */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  {film.genre}
                </span>
                <span className="text-sm text-muted-foreground">{film.targetDate}</span>
                <span className="text-sm text-muted-foreground">{film.country}</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {film.description}
              </p>
            </div>
            
            <div className="flex items-center gap-2 ml-8">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowPopup(true)}
              >
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowPopup(true)}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Film Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Film Gallery */}
            <FilmGallery film={film} />
            
            {/* Film Information */}
            <FilmInfo film={film} />
          </div>

          {/* Right Column - Investment Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <InvestmentPanel film={film} />
            </div>
          </div>
        </div>

        {/* Recommended Films Section */}
        <div className="mt-16">
          <RecommendedFilms currentFilmId={film.id} />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Unified Popup */}
      <UnifiedPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  );
};

export default FilmDetail;
