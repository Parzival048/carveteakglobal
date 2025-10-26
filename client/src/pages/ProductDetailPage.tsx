import { useParams, useLocation } from "wouter";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const product = products.find((p) => p.id === parseInt(id || "0"));

  // SEO for product page
  if (product) {
    useSEO({
      title: `${product.displayName} - ${product.wood} | Carve Teak Global`,
      description: product.romanticDescription.substring(0, 160),
      keywords: `${product.wood}, ${product.category}, ${product.collection} furniture, handcrafted ${product.name}, luxury wooden furniture`,
      image: product.image,
      url: `${window.location.origin}/product/${product.id}`,
      type: 'product',
    });
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/")} variant="default">
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "917758067875";
    const message = `Hello! I'm interested in your "${product.displayName}" product. Could you provide more details and pricing information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setLocation("/collections")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            data-testid="button-back-to-products"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="flex items-center justify-center animate-fade-in">
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg hover-zoom">
                <img
                  src={product.image}
                  alt={product.displayName}
                  className="w-full h-full object-cover"
                  data-testid={`img-product-detail-${product.id}`}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center animate-fade-in-up">
              <div className="text-sm font-medium text-primary mb-4">{product.wood}</div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {product.displayName}
              </h1>

              {/* Romantic Description */}
              <div className="mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {product.romanticDescription}
                </p>
              </div>

              {/* Artisan's Note */}
              <div className="mb-8 p-6 bg-card border border-border rounded-lg">
                <p className="italic text-muted-foreground">{product.artisanNote}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 glow-effect transition-smooth hover-scale-105"
                  data-testid={`button-whatsapp-inquiry-${product.id}`}
                >
                  Inquire on WhatsApp
                </Button>
                <Button variant="outline" className="flex-1 transition-smooth hover-scale-105" data-testid={`button-request-quote-${product.id}`}>
                  Request Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16 animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <Card
                  key={index}
                  className={`border-l-4 border-l-primary animate-fade-in`}
                  style={{ animationDelay: `${Math.min(index * 0.05, 0.15)}s` }}
                >
                  <CardContent className="p-6">
                    <p className="text-foreground font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specifications Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Specifications</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Material</h3>
                    <p className="text-muted-foreground">{product.specifications.material}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Finish</h3>
                    <p className="text-muted-foreground">{product.specifications.finish}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Dimensions</h3>
                    <p className="text-muted-foreground">{product.specifications.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Origin</h3>
                    <p className="text-muted-foreground">{product.specifications.origin}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shipping & Lead Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Shipping Information</h3>
                <p className="text-muted-foreground">{product.shippingInfo}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Lead Time</h3>
                <p className="text-muted-foreground">{product.leadTime}</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Own This Masterpiece?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about this exquisite piece and place your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppInquiry} size="lg" data-testid={`button-whatsapp-cta-${product.id}`}>
                Chat on WhatsApp
              </Button>
              <Button variant="outline" size="lg" data-testid={`button-request-quote-cta-${product.id}`}>
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton productName={product.displayName} productId={product.id} />
    </div>
  );
}

