import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useSEO } from "@/hooks/useSEO";

export default function HomePage() {
  useSEO({
    title: 'Carve Teak Global - Handcrafted Luxury Wooden Furniture | Sagwan & Teak',
    description: 'Discover premium handcrafted furniture in Sagwan & Teak wood. Timeless elegance meets master craftsmanship. Custom luxury furniture for living, dining, and bedroom spaces.',
    keywords: 'handcrafted furniture, teak wood furniture, sagwan wood furniture, luxury furniture, custom wooden furniture, carved furniture, traditional furniture, premium furniture India',
    url: window.location.origin,
    type: 'website',
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
