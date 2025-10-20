import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import { collections } from "@/data/products";
import { useSEO } from "@/hooks/useSEO";

export default function CollectionsPage() {
  const [, setLocation] = useLocation();

  useSEO({
    title: 'Our Collections - Handcrafted Furniture | Carve Teak Global',
    description: 'Browse our curated collections of handcrafted wooden furniture. Living room, dining room, bedroom, and outdoor furniture in premium Sagwan and Teak wood.',
    keywords: 'furniture collections, living room furniture, dining room furniture, bedroom furniture, outdoor furniture, handcrafted collections',
    url: `${window.location.origin}/collections`,
    type: 'website',
  });

  const handleViewProduct = (productId: number) => {
    setLocation(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">Our Collections</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our curated collections of handcrafted furniture, each designed to bring warmth and elegance to
              your home.
            </p>
          </div>

          {/* Collections */}
          <div className="space-y-20">
            {collections.map((collection) => (
              <div key={collection.id}>
                <div className="mb-12">
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-4">{collection.name}</h2>
                  <p className="text-lg text-muted-foreground">{collection.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collection.products.map((product) => (
                    <Card
                      key={product.id}
                      className={`overflow-hidden hover-elevate hover-scale-105 hover-shadow-lg cursor-pointer animate-fade-in`}
                      data-testid={`card-product-${product.id}`}
                      onClick={() => handleViewProduct(product.id)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden hover-zoom">
                          <img
                            src={product.image}
                            alt={product.displayName}
                            className="w-full h-full object-cover"
                            data-testid={`img-product-${product.id}`}
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-sm font-medium text-primary mb-2">{product.wood}</div>
                          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground line-clamp-2">{product.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProduct(product.id);
                          }}
                          data-testid={`button-view-details-${product.id}`}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-primary/5 rounded-lg p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer custom furniture solutions tailored to your specific needs and preferences. Contact us to discuss
              your bespoke furniture requirements.
            </p>
            <Button size="lg" data-testid="button-contact-for-custom">
              Request Custom Furniture
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

