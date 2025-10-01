import { Card } from "@/components/ui/card";
import { Film } from "@/types/film";
import { useNavigate } from "react-router-dom";

type FilmCardProps = {
  film: Film;
  showDetails?: boolean;
};

const FilmCard = ({ film, showDetails = false }: FilmCardProps) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    genre,
    director,
    cast,
    targetDate,
    description,
    posterUrl,
    budget,
    fundingGoal,
    currentFunding,
    minimumInvestment,
    status
  } = film;

  const fundingPercentage = fundingGoal > 0 ? (currentFunding / fundingGoal) * 100 : 0;

  const handleClick = () => {
    navigate(`/film/${id}`);
  };
  return (
    <Card 
      className="group overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={posterUrl}
          alt={`${title} film poster`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
            {genre}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full font-medium ${
            status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
            status === 'funding' ? 'bg-yellow-100 text-yellow-800' :
            status === 'in-production' ? 'bg-purple-100 text-purple-800' :
            status === 'completed' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {status.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-proxima font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Director:</span> {director}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Cast:</span> {cast.slice(0, 3).join(", ")}{cast.length > 3 ? ` +${cast.length - 3} more` : ''}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Target:</span> {targetDate || "TBD"}
          </p>
        </div>
        
        <p className="text-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {showDetails && (
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Budget:</span>
              <span className="font-medium">₱{budget.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Min. Investment:</span>
              <span className="font-medium">₱{minimumInvestment.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>₱{currentFunding.toLocaleString()} raised</span>
              <span>{fundingPercentage.toFixed(1)}% of ₱{fundingGoal.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FilmCard;