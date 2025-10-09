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
    window.open("https://calendar.app.google/CikbTmd3v91epCbR6", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Important Information
          </DialogTitle>
          <DialogDescription className="pt-4 text-justify">
            This is a concept test — Audience Impact is launching soon.
            We'd love to invite you to a short interview to share your thoughts about the real platform and the future of crowdproducing Filipino films.
            <br /><br />
            <strong>As thanks for your time, we'll send ₱500 after the session.</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button 
            onClick={handleCalendarClick}
            className="w-full"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Call
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
