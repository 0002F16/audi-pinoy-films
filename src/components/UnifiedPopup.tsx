import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type UnifiedPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UnifiedPopup = ({ isOpen, onClose }: UnifiedPopupProps) => {
  const handleCalendarClick = () => {
    // Replace with your actual calendar link
    window.open("https://calendly.com/your-username", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Important Information
          </DialogTitle>
          <DialogDescription className="pt-4">
            This is a fake project, but we would like to invite you to an interview to discuss the real Audience Impact platform and your interest in crowdproducing Filipino films.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button 
            onClick={handleCalendarClick}
            className="w-full"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Interview
          </Button>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnifiedPopup;
