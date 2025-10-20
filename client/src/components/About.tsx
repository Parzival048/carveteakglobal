import { Card } from "@/components/ui/card";
import { Award, Heart, Sparkles } from "lucide-react";
import craftsmanImage from "@assets/generated_images/Craftsman_at_work_in_workshop_36e8fdb4.png";

const features = [
  {
    icon: Award,
    title: "Exceptional Craftsmanship",
    description: "Master artisans with decades of experience handcraft every piece with meticulous attention to detail",
  },
  {
    icon: Heart,
    title: "Heritage & Tradition",
    description: "Centuries-old techniques refined and perfected, passed down through generations of master craftsmen",
  },
  {
    icon: Sparkles,
    title: "Bespoke Solutions",
    description: "Custom furniture tailored to your unique vision and lifestyle, created exclusively for you",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-about-title"
          >
            Our Promise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Carve Teak Global, we are dedicated to creating exquisite handcrafted furniture that transcends time.
            Each piece is a masterpiece of artistry, quality, and soul—designed to become a cherished heirloom in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={craftsmanImage}
              alt="Master craftsman at work"
              className="rounded-lg shadow-lg w-full h-auto"
              data-testid="img-craftsman"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Heritage of Excellence
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              For generations, we have been crafting premium wooden furniture
              using the finest Sagwan and Teak wood. Each piece is
              meticulously handcrafted by skilled artisans who pour their heart
              and soul into every detail.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality and authenticity ensures that every
              furniture piece not only enhances your living space but also
              becomes a treasured heirloom for years to come.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate transition-shadow"
              data-testid={`card-feature-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
