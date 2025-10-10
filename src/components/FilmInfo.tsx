import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Award, 
  Film,
  DollarSign,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";
import { Film as FilmType } from "@/types/film";

type FilmInfoProps = {
  film: FilmType;
};

const FilmInfo = ({ film }: FilmInfoProps) => {

  return (
    <div className="space-y-8">

      {/* Overview Section */}
      <Card className="p-6">
        <h3 className="text-2xl font-proxima font-bold mb-6">Overview</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">DIRECTOR</h4>
              <p className="text-lg">{film.director}</p>
            </div>
            {film.producer && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">PRODUCER</h4>
                <p className="text-lg">{film.producer}</p>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">WRITER</h4>
              <p className="text-lg">{film.writer || "TBD"}</p>
            </div>
            {film.cinematographer && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">CINEMATOGRAPHER</h4>
                <p className="text-lg">{film.cinematographer || "TBD"}</p>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">LANGUAGE</h4>
              <p className="text-lg">{film.language}</p>
            </div>
            {film.productionCompany && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">PRODUCTION COMPANY</h4>
                <p className="text-lg">{film.productionCompany || "TBD"}</p>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">DISTRIBUTION RIGHTS</h4>
              <div className="flex flex-wrap gap-1">
                {film.distributionRights.map((right, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {right}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Cast & Crew Section */}
      <Card className="p-6">
        <h3 className="text-2xl font-proxima font-bold mb-6">Cast & Crew</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">MAIN CAST</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {film.cast.map((actor, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{actor}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">CREW</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Director</span>
                <span className="font-medium">{film.director}</span>
              </div>
              {film.producer && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Producer</span>
                  <span className="font-medium">{film.producer || "TBD"}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Writer</span>
                <span className="font-medium">{film.writer || "TBD"}</span>
              </div>
              {film.cinematographer && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Cinematographer</span>
                  <span className="font-medium">{film.cinematographer || "TBD"}</span>
                </div>
              )}
              {film.musicComposer && (
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Music Composer</span>
                  <span className="font-medium">{film.musicComposer || "TBD"}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Financials Section */}
      <Card className="p-6">
        <h3 className="text-2xl font-proxima font-bold mb-6">Financial Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">TOTAL BUDGET</h4>
                <p className="text-2xl font-bold">₱{film.budget.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">FUNDING GOAL</h4>
                <p className="text-2xl font-bold">₱{film.fundingGoal.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">EXPECTED RETURNS</h4>
                <p className="text-2xl font-bold text-primary">{film.expectedReturns}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">INVESTMENT RANGE</h4>
              <p className="text-lg">₱{film.minimumInvestment.toLocaleString()} - {film.maximumInvestment ? `₱${film.maximumInvestment.toLocaleString()}` : "No Limit"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">CURRENT FUNDING</h4>
              <p className="text-lg">₱{film.currentFunding.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Timeline Section */}
      <Card className="p-6">
        <h3 className="text-2xl font-proxima font-bold mb-6">Production Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold">Pre-Production</h4>
              <p className="text-sm text-muted-foreground">Script finalization, casting, location scouting</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold">Production</h4>
              <p className="text-sm text-muted-foreground">Principal photography and filming</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold">Post-Production</h4>
              <p className="text-sm text-muted-foreground">Editing, sound design, visual effects</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              4
            </div>
            <div>
              <h4 className="font-semibold">Distribution</h4>
              <p className="text-sm text-muted-foreground">Release and distribution to theaters/streaming</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FilmInfo;
