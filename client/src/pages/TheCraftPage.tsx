import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import sourceImage from "@assets/generated_images/Wood_grain_texture_detail_e3497aec.png";
import craftImage from "@assets/generated_images/Woodworking_craftsmanship_detail_shot_fe8a8c02.png";
import { useSEO } from "@/hooks/useSEO";

export default function TheCraftPage() {
  const [, setLocation] = useLocation();

  useSEO({
    title: 'The Craft - Traditional Woodworking Process | Carve Teak Global',
    description: 'Explore our traditional woodworking process from sourcing premium wood to final finishing. Discover the artistry and precision behind every handcrafted furniture piece.',
    keywords: 'woodworking process, furniture crafting, traditional woodworking, handcrafted furniture process, wood carving, furniture finishing',
    url: `${window.location.origin}/the-craft`,
    type: 'article',
  });

  const stages = [
    {
      number: 1,
      title: "The Source",
      description:
        "Our journey begins with the selection of the finest materials. We source premium Sagwan and Teak wood from sustainable forests, ensuring both quality and environmental responsibility. Each log is carefully inspected for grain, color, and structural integrity. We understand that the quality of the final piece begins with the quality of the raw material.",
      details: [
        "Sustainable sourcing from certified forests",
        "Hand-selected logs for optimal grain and color",
        "Proper seasoning and drying processes",
        "Quality inspection at every stage",
      ],
    },
    {
      number: 2,
      title: "The Vision",
      description:
        "Before a single tool touches the wood, our master craftsmen envision the final piece. They study the wood's natural characteristics, understanding its grain, color variations, and unique personality. Sketches are drawn, designs are refined, and the vision is crystallized. This stage is where tradition meets creativity, where the craftsman's experience guides the design process.",
      details: [
        "Detailed design and sketching",
        "Study of wood characteristics",
        "Incorporation of traditional motifs",
        "Customization based on client preferences",
      ],
    },
    {
      number: 3,
      title: "The Carve",
      description:
        "This is where the magic happens. Using hand tools refined over centuries, our master craftsmen bring the vision to life. Every cut is deliberate, every carving is precise. The sound of chisel on wood echoes through our workshop—a symphony of craftsmanship. This stage requires not just skill, but patience, dedication, and an intimate understanding of the wood.",
      details: [
        "Hand-carving using traditional tools",
        "Intricate joinery without nails or screws",
        "Attention to every detail and curve",
        "Quality checks at every stage",
      ],
    },
    {
      number: 4,
      title: "The Finish",
      description:
        "The final stage is where the piece is brought to its full glory. The wood is sanded to silky smoothness, revealing the natural beauty of the grain. Natural finishes and lacquers are applied by hand, layer by layer, creating a protective coating that enhances the wood's natural color and warmth. The result is a piece that is not just beautiful, but also durable and long-lasting.",
      details: [
        "Hand-sanding to perfection",
        "Application of natural finishes",
        "Multiple coats of protective lacquer",
        "Final quality inspection and polishing",
      ],
    },
  ];

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
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">The Craft</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the meticulous process behind every handcrafted piece at Carve Teak Global.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16 p-8 bg-primary/5 rounded-lg animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our process is not rushed. It cannot be mechanized. It is a dance between craftsman and material, a
              conversation between tradition and vision. Every piece that leaves our workshop is the result of weeks or
              months of dedicated work, guided by principles that have been refined over centuries.
            </p>
          </div>

          {/* Stages */}
          <div className="space-y-12 mb-16">
            {stages.map((stage) => (
              <Card key={stage.number} className={`overflow-hidden animate-fade-in-up`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-serif text-2xl font-bold">
                        {stage.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{stage.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">{stage.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="animate-fade-in-up">
              <img
                src={sourceImage}
                alt="Wood grain detail"
                className="w-full rounded-lg shadow-lg hover-zoom"
                data-testid="img-wood-detail"
              />
              <p className="text-center text-muted-foreground mt-4">Premium wood selection and grain inspection</p>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={craftImage}
                alt="Craftsmanship detail"
                className="w-full rounded-lg shadow-lg hover-zoom"
                data-testid="img-craft-detail"
              />
              <p className="text-center text-muted-foreground mt-4">Master craftsmen at work</p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16 p-8 bg-card border border-border rounded-lg animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Craftsmanship Philosophy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Patience Over Speed</h3>
                <p className="text-muted-foreground">
                  We believe that true craftsmanship cannot be rushed. Each piece takes the time it needs to be
                  perfect.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tradition Meets Innovation</h3>
                <p className="text-muted-foreground">
                  We honor centuries-old techniques while embracing contemporary design sensibilities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  We create fewer pieces, but each one is a masterpiece worthy of being passed down through
                  generations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Soul in Every Detail</h3>
                <p className="text-muted-foreground">
                  Every carving, every joint, every finish is executed with intention and love.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-12 text-center animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Own a Masterpiece?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our collection and discover the beauty of handcrafted furniture.
            </p>
            <Button onClick={() => setLocation("/")} size="lg" className="transition-smooth hover-scale-105" data-testid="button-explore-collection">
              View Our Collection
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

