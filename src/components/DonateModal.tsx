import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import LazyImage from "./LazyImage";

interface DonateModalProps {
  children: React.ReactNode;
}

export const DonateModal = ({ children }: DonateModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate Now</DialogTitle>
          <DialogDescription>
            Your contribution makes a huge difference. Thank you for your support!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Scan QR Code to Pay</h3>
            <div className="flex justify-center">
              <LazyImage 
                src="https://placehold.co/250x250/f97316/FFFFFF/png?text=QR+Code" 
                alt="Donation QR Code"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Bank Transfer Details</h3>
            <div className="space-y-1 text-sm bg-gray-100 p-4 rounded-lg">
              <p><strong>Bank Name:</strong> [Your Bank Name]</p>
              <p><strong>Account Name:</strong> Punaroday Foundation</p>
              <p><strong>Account Number:</strong> [Your Account Number]</p>
              <p><strong>IFSC Code:</strong> [Your IFSC Code]</p>
              <p><strong>Branch:</strong> [Your Branch Name]</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};