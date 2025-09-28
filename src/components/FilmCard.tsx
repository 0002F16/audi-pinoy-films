import { Card } from "@/components/ui/card";

type FilmCardProps = {
  title: string;
  genre: string;
  director: string;
  cast: string[];
  targetDate: string;
  description: string;
  posterUrl: string;
};

const FilmCard = ({ title, genre, director, cast, targetDate, description, posterUrl }: FilmCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={posterUrl}
          alt={`${title} film poster`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
            {genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Director:</span> {director}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Cast:</span> {cast.join(", ")}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Target:</span> {targetDate}
          </p>
        </div>
        
        <p className="text-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FilmCard;