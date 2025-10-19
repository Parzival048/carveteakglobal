import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "917875580558";
  const message = "Hello! I'm interested in your handcrafted wooden furniture.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      style={{ backgroundColor: "#25D366" }}
      data-testid="button-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
}
