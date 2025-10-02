import { Dialog, DialogContent } from './ui/dialog';
import { siteConfig } from '@/config/site';

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] p-0">
        <div className="h-full overflow-hidden p-6">
          <iframe
            src={siteConfig.calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a conversation with Atelier Casa Mãe"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
