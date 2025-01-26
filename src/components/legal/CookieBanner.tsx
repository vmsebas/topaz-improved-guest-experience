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
      title: "Preferencias guardadas",
      description: "Has aceptado el uso de cookies",
    });
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    toast({
      title: "Preferencias guardadas",
      description: "Has rechazado las cookies no esenciales",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios. 
          Puede aceptar todas las cookies o configurar sus preferencias.
          Para más información, consulte nuestra{" "}
          <a href="/cookies" className="text-primary hover:underline">
            Política de Cookies
          </a>
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReject}>
            Rechazar no esenciales
          </Button>
          <Button onClick={handleAccept}>
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  );
};