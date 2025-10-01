import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Calendar, Globe } from "lucide-react";
import { Film } from "@/types/film";

type FilmGalleryProps = {
  film: Film;
};

const FilmGallery = ({ film }: FilmGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Create a carousel with multiple images
  // In a real app, you'd have multiple images/videos from the database
  const images = [
    { url: film.posterUrl, type: "poster", alt: `${film.title} poster` },
    { url: film.posterUrl, type: "behind-scenes", alt: `${film.title} behind the scenes` },
    { url: film.posterUrl, type: "production", alt: `${film.title} production still` },
    { url: film.posterUrl, type: "cast", alt: `${film.title} cast photo` },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] bg-muted">
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with play button for videos */}
            {images[currentImageIndex].type === "video" && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
            )}

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Film Status and Basic Info Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge 
            variant="secondary" 
            className={`${
              film.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
              film.status === 'funding' ? 'bg-yellow-100 text-yellow-800' :
              film.status === 'in-production' ? 'bg-purple-100 text-purple-800' :
              film.status === 'completed' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}
          >
            {film.status.replace('-', ' ').toUpperCase()}
          </Badge>
          
          <Badge 
            variant="secondary"
            className="bg-primary text-primary-foreground"
          >
            {film.genre}
          </Badge>
        </div>
      </div>

    </div>
  );
};

export default FilmGallery;
