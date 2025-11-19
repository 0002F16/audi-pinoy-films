import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield, 
  Info
} from "lucide-react";
import { Film } from "@/types/film";
import UnifiedPopup from "./UnifiedPopup";

type InvestmentPanelProps = {
  film: Film;
};

const InvestmentPanel = ({ film }: InvestmentPanelProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const fundingPercentage = film.fundingGoal > 0 ? (film.currentFunding / film.fundingGoal) * 100 : 0;
  const daysLeft = film.targetDate ? Math.ceil((new Date(film.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

  const handleCrowdproduce = () => {
    setShowPopup(true);
  };

  const handleReadMore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="space-y-6">
      {/* Combined Funding Progress and CTA Section */}
      <Card className="p-6">
        <div className="space-y-6">
          {/* Deal Terms Header */}
          <h4 className="font-semibold text-lg">Deal Terms</h4>

          {/* Investment Details */}
          <div className="space-y-3">
            {/* Allocation */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Allocation</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">₱{film.fundingGoal.toLocaleString()}</span>
                <Info className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-help" title="Total funding goal for this film" />
              </div>
            </div>

            {/* Minimum Investment */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Minimum investment</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">₱{film.minimumInvestment.toLocaleString()}</span>
                <Info className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-help" title="Minimum amount required to invest in this film" />
              </div>
            </div>

            {/* Deadline */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Deadline</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{film.targetDate || "TBD"}</span>
                <Info className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-help" title="Last day to invest in this film" />
              </div>
            </div>
          </div>

          <Separator />

          {/* Main CTA Button */}
          <Button 
            onClick={handleCrowdproduce}
            className="w-full"
            size="lg"
          >
            Crowdproduce Now
          </Button>

          {/* Subtext with Read More Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ₱1,000 minimum investment.{" "}
              <button 
                onClick={handleReadMore}
                className="text-primary hover:text-primary/80 underline font-medium"
              >
                Read more
              </button>
            </p>
          </div>
        </div>
      </Card>


      {/* Risk Warning */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-yellow-600 mt-0.5" />
          <div className="text-xs text-yellow-800">
            <p className="font-medium mb-1">Investment Risk Warning</p>
            <p>Film investments are high-risk. You may lose your entire investment. Only invest what you can afford to lose.</p>
          </div>
        </div>
      </Card>

      {/* Questions Button */}
      <Button 
        onClick={handleReadMore}
        variant="outline" 
        className="w-full"
      >
        Questions?
      </Button>

      {/* Unified Popup */}
      <UnifiedPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  );
};

export default InvestmentPanel;
