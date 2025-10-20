import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { products } from "@/data/products";

export function Products() {
  const [, setLocation] = useLocation();

  const handleViewProduct = (productId: number) => {
    setLocation(`/product/${productId}`);
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-products-title"
          >
            Our Furniture Collection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated selection of handcrafted wooden furniture pieces,
            each designed to bring warmth and elegance to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 6).map((product) => (
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
                  <div className="text-sm font-medium text-primary mb-2">
                    {product.wood}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
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
                  data-testid={`button-learn-more-${product.id}`}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center">
          <Button
            onClick={() => setLocation("/collections")}
            size="lg"
            variant="default"
            data-testid="button-view-all-collections"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
