import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  showText?: boolean;
}

export const WhatsAppButton = ({
  phoneNumber = "+351900123456",
  message = "",
  className = "",
  showText = true
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const formattedPhone = phoneNumber.replace(/[^0-9+]/g, "");
    const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-6 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      {showText && (
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear whitespace-nowrap font-medium">
          <span className="pl-2">WhatsApp</span>
        </span>
      )}
    </button>
  );
};
