import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    toast({
      title: "Preferences saved",
      description: "You have accepted all cookies",
    });
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    toast({
      title: "Preferences saved",
      description: "You have rejected non-essential cookies",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          We use our own and third-party cookies to improve our services.
          You can accept all cookies or configure your preferences.
          For more information, please check our{" "}
          <a href="/cookies" className="text-primary hover:underline">
            Cookie Policy
          </a>
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReject}>
            Reject non-essential
          </Button>
          <Button onClick={handleAccept}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
};