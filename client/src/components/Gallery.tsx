import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sofaImage from "@assets/generated_images/Traditional_Sheesham_wood_sofa_set_e3cad8e4.png";
import bedImage from "@assets/generated_images/Teak_wood_king_bed_frame_b9f60887.png";
import diningImage from "@assets/generated_images/Sheesham_wood_dining_table_set_1fadc581.png";
import coffeeTableImage from "@assets/generated_images/Teak_wood_coffee_table_47a5f2c2.png";
import wardrobeImage from "@assets/generated_images/Sheesham_wood_wardrobe_cabinet_f5ada2d8.png";
import tvUnitImage from "@assets/generated_images/Teak_wood_TV_console_unit_87da3380.png";
import bookshelfImage from "@assets/generated_images/Sheesham_wood_bookshelf_unit_88fd0804.png";
import rockingChairImage from "@assets/generated_images/Teak_wood_rocking_chair_a84fe3f5.png";
import woodGrainImage from "@assets/generated_images/Wood_grain_texture_detail_e3497aec.png";
import craftsmanshipImage from "@assets/generated_images/Woodworking_craftsmanship_detail_shot_fe8a8c02.png";
import livingRoomImage from "@assets/generated_images/Furnished_living_room_setup_23517d0c.png";
import bedroomImage from "@assets/generated_images/Bedroom_furniture_setup_showcase_8f21763a.png";
import craftsmanImage from "@assets/generated_images/Craftsman_at_work_in_workshop_36e8fdb4.png";
import showroomImage from "@assets/generated_images/Furniture_showroom_hero_background_3f7eccd4.png";

const galleryImages = [
  { id: 1, src: sofaImage, alt: "Traditional Sheesham sofa set" },
  { id: 2, src: bedImage, alt: "Teak wood king bed frame" },
  { id: 3, src: diningImage, alt: "Sheesham dining table set" },
  { id: 4, src: livingRoomImage, alt: "Furnished living room" },
  { id: 5, src: coffeeTableImage, alt: "Teak coffee table" },
  { id: 6, src: wardrobeImage, alt: "Sheesham wardrobe cabinet" },
  { id: 7, src: bedroomImage, alt: "Bedroom furniture setup" },
  { id: 8, src: tvUnitImage, alt: "Teak TV console" },
  { id: 9, src: woodGrainImage, alt: "Wood grain detail" },
  { id: 10, src: craftsmanshipImage, alt: "Woodworking craftsmanship" },
  { id: 11, src: bookshelfImage, alt: "Sheesham bookshelf" },
  { id: 12, src: rockingChairImage, alt: "Teak rocking chair" },
  { id: 13, src: craftsmanImage, alt: "Craftsman at work" },
  { id: 14, src: showroomImage, alt: "Furniture showroom" },
];

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-gallery-title"
          >
            Our Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of handcrafted furniture, detail shots,
            and beautifully furnished spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setLightboxImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer hover-elevate"
              data-testid={`button-gallery-image-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox"
          />
        </div>
      )}
    </section>
  );
}
