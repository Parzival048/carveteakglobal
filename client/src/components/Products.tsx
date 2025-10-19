import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sofaImage from "@assets/generated_images/Traditional_Sheesham_wood_sofa_set_e3cad8e4.png";
import bedImage from "@assets/generated_images/Teak_wood_king_bed_frame_b9f60887.png";
import diningImage from "@assets/generated_images/Sheesham_wood_dining_table_set_1fadc581.png";
import coffeeTableImage from "@assets/generated_images/Teak_wood_coffee_table_47a5f2c2.png";
import wardrobeImage from "@assets/generated_images/Sheesham_wood_wardrobe_cabinet_f5ada2d8.png";
import tvUnitImage from "@assets/generated_images/Teak_wood_TV_console_unit_87da3380.png";
import bookshelfImage from "@assets/generated_images/Sheesham_wood_bookshelf_unit_88fd0804.png";
import rockingChairImage from "@assets/generated_images/Teak_wood_rocking_chair_a84fe3f5.png";

const products = [
  {
    id: 1,
    name: "Traditional Sofa Set",
    description: "Elegant three-seater sofa in premium Sheesham wood with plush cushioning",
    image: sofaImage,
    wood: "Sheesham Wood",
  },
  {
    id: 2,
    name: "King Size Bed Frame",
    description: "Luxurious bed frame with intricately carved headboard in solid Teak",
    image: bedImage,
    wood: "Teak Wood",
  },
  {
    id: 3,
    name: "Dining Table Set",
    description: "Six-seater dining set with matching chairs, perfect for family gatherings",
    image: diningImage,
    wood: "Sheesham Wood",
  },
  {
    id: 4,
    name: "Coffee Table",
    description: "Elegant coffee table with lower shelf, ideal for modern living rooms",
    image: coffeeTableImage,
    wood: "Teak Wood",
  },
  {
    id: 5,
    name: "Wardrobe Cabinet",
    description: "Spacious double-door wardrobe with ornate carved details and mirror",
    image: wardrobeImage,
    wood: "Sheesham Wood",
  },
  {
    id: 6,
    name: "TV Console Unit",
    description: "Contemporary TV unit with storage shelves and cable management",
    image: tvUnitImage,
    wood: "Teak Wood",
  },
  {
    id: 7,
    name: "Bookshelf Unit",
    description: "Tall bookshelf with multiple shelves and decorative molding",
    image: bookshelfImage,
    wood: "Sheesham Wood",
  },
  {
    id: 8,
    name: "Rocking Chair",
    description: "Comfortable traditional rocking chair with carved armrests",
    image: rockingChairImage,
    wood: "Teak Wood",
  },
];

export function Products() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-elevate transition-all"
              data-testid={`card-product-${product.id}`}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                  onClick={scrollToContact}
                  data-testid={`button-learn-more-${product.id}`}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
