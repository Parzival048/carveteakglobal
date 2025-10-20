import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import craftmanImage from "@assets/generated_images/Craftsman_at_work_in_workshop_36e8fdb4.png";
import { useSEO } from "@/hooks/useSEO";

export default function OurStoryPage() {
  const [, setLocation] = useLocation();

  useSEO({
    title: 'Our Story - Heritage of Craftsmanship | Carve Teak Global',
    description: 'Discover the story behind Carve Teak Global. Three generations of master craftsmen creating timeless handcrafted furniture with passion, tradition, and excellence.',
    keywords: 'furniture craftsmanship, artisan furniture, traditional woodworking, heritage furniture, master craftsmen, handmade furniture story',
    url: `${window.location.origin}/our-story`,
    type: 'article',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            data-testid="button-back-to-home"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </button>

          {/* Hero Section */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Carve Teak Global is more than just a furniture company—we are custodians of a centuries-old tradition of
              handcrafted excellence.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="mb-12 animate-fade-in-up">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">The Beginning</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our journey began in the heart of Jaipur, India, where generations of master craftsmen have perfected
                the art of woodworking. What started as a small family workshop has evolved into Carve Teak Global, a
                beacon of traditional craftsmanship in the modern world. Every piece we create carries the legacy of
                centuries of expertise, passed down from master to apprentice, generation after generation.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that furniture is not merely functional—it is a reflection of one's soul and taste. Each
                piece we craft is an expression of artistry, a testament to the beauty that emerges when skilled hands
                meet premium materials. We are committed to preserving traditional techniques while embracing the
                demands of contemporary design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our philosophy is simple: create furniture that transcends time, that becomes a cherished heirloom,
                that tells stories of love, craftsmanship, and dedication. We refuse to compromise on quality, and we
                believe that true luxury is not about ostentation—it is about authenticity and excellence.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Commitment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Carve Teak Global, we are committed to:
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    <strong>Exceptional Craftsmanship:</strong> Every piece is handcrafted by master artisans with
                    decades of experience.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    <strong>Premium Materials:</strong> We source only the finest Sagwan and Teak wood, ensuring
                    durability and beauty.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    <strong>Sustainable Practices:</strong> We are committed to ethical sourcing and environmentally
                    responsible production.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    <strong>Customer Satisfaction:</strong> Your satisfaction is our ultimate goal, and we stand behind
                    every piece we create.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    <strong>Timeless Design:</strong> We create pieces that transcend trends, designed to be cherished
                    for generations.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Master Craftsmen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The heart of Carve Teak Global is our team of master craftsmen. These are not just workers—they are
                artists, philosophers, and guardians of tradition. Each craftsman brings decades of experience, an
                intimate knowledge of wood, and an unwavering commitment to perfection. They work with hand tools that
                have been refined over centuries, using techniques that cannot be rushed or mechanized.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our craftsmen are not content with merely creating furniture—they are creating legacies. They take
                pride in every joint, every carving, every finish. They understand that their work will outlive them,
                that it will be passed down through families, that it will witness countless moments of joy and
                togetherness.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Promise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you choose Carve Teak Global, you are not just buying furniture—you are investing in a piece of
                art, a piece of history, a piece of soul. You are choosing to surround yourself with beauty that has
                been crafted with love and dedication. You are choosing to be part of a legacy that spans centuries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We promise to deliver nothing less than excellence. We promise to honor the traditions of our
                craftsmen. We promise to create pieces that will bring joy to your home for generations to come.
              </p>
            </div>
          </div>

          {/* Craftsman Image */}
          <div className="mb-16 animate-fade-in-up hover-zoom">
            <img
              src={craftmanImage}
              alt="Master craftsman at work"
              className="w-full rounded-lg shadow-lg"
              data-testid="img-craftsman"
            />
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-12 text-center animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Experience the Carve Teak Global Difference</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our collection of handcrafted furniture and become part of our legacy.
            </p>
            <Button onClick={() => setLocation("/")} size="lg" className="transition-smooth hover-scale-105" data-testid="button-explore-collection">
              Explore Our Collection
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

