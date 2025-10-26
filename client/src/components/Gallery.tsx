import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images
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

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: sofaImage, alt: "Traditional Sagwan sofa set", title: "Maharaja Sofa Set", category: "Living Room" },
  { id: 2, src: livingRoomImage, alt: "Furnished living room", title: "Elegant Living Space", category: "Lifestyle" },
  { id: 3, src: diningImage, alt: "Sagwan dining table set", title: "Royal Dining Collection", category: "Dining Room" },
  { id: 4, src: bedImage, alt: "Teak wood king bed frame", title: "Luxury Bed Frame", category: "Bedroom" },
  { id: 5, src: bedroomImage, alt: "Bedroom furniture setup", title: "Serene Bedroom Setup", category: "Lifestyle" },
  { id: 6, src: coffeeTableImage, alt: "Teak coffee table", title: "Elegance Coffee Table", category: "Living Room" },
  { id: 7, src: wardrobeImage, alt: "Sagwan wardrobe cabinet", title: "Heritage Wardrobe", category: "Bedroom" },
  { id: 8, src: tvUnitImage, alt: "Teak TV console", title: "Modern TV Console", category: "Living Room" },
  { id: 9, src: rockingChairImage, alt: "Teak rocking chair", title: "Comfort Rocking Chair", category: "Living Room" },
  { id: 10, src: bookshelfImage, alt: "Sagwan bookshelf", title: "Classic Bookshelf", category: "Study" },
  { id: 11, src: woodGrainImage, alt: "Wood grain detail", title: "Premium Wood Grain", category: "Craftsmanship" },
  { id: 12, src: craftsmanshipImage, alt: "Woodworking craftsmanship", title: "Master Craftsmanship", category: "Craftsmanship" },
  { id: 13, src: craftsmanImage, alt: "Craftsman at work", title: "Artisan at Work", category: "Craftsmanship" },
  { id: 14, src: showroomImage, alt: "Furniture showroom", title: "Our Showroom", category: "Lifestyle" },
];

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Slider Container */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".gallery-prev",
              nextEl: ".gallery-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            loop={true}
            speed={800}
            effect="slide"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={setSwiperInstance}
            className="gallery-swiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group/slide cursor-pointer hover-elevate"
                  onClick={() => setLightboxImage(image)}
                  data-testid={`button-gallery-image-${image.id}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/slide:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover/slide:translate-y-0 transition-transform duration-300">
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/80 mb-1">
                        {image.category}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Slider Info */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Click on any image to view in full size • Use arrow keys to navigate</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Image Container */}
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              data-testid="img-lightbox"
            />
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
                {lightboxImage.category}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Custom Swiper Styles */}
      <style>{`
        .gallery-swiper {
          padding-bottom: 50px;
        }

        .gallery-swiper .swiper-pagination {
          bottom: 0;
        }

        .gallery-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: hsl(var(--primary));
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        .gallery-swiper .swiper-slide {
          height: auto;
        }

        /* Smooth transitions */
        .gallery-swiper .swiper-slide-active {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
