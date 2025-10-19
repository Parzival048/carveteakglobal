import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Furniture_showroom_hero_background_3f7eccd4.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Handcrafted Wooden Furniture
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium"
          data-testid="text-hero-tagline"
        >
          Traditional Craftsmanship in Sheesham & Teak Wood
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Discover timeless elegance with our handcrafted furniture collection.
          Each piece tells a story of heritage, quality, and masterful artistry.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="px-8 py-6 text-lg"
          data-testid="button-request-quote-hero"
        >
          Request Quote
        </Button>
      </div>
    </section>
  );
}
