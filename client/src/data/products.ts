import sofaImage from "@assets/generated_images/Traditional_Sheesham_wood_sofa_set_e3cad8e4.png";
import bedImage from "@assets/generated_images/Teak_wood_king_bed_frame_b9f60887.png";
import diningImage from "@assets/generated_images/Sheesham_wood_dining_table_set_1fadc581.png";
import coffeeTableImage from "@assets/generated_images/Teak_wood_coffee_table_47a5f2c2.png";
import wardrobeImage from "@assets/generated_images/Sheesham_wood_wardrobe_cabinet_f5ada2d8.png";
import tvUnitImage from "@assets/generated_images/Teak_wood_TV_console_unit_87da3380.png";
import bookshelfImage from "@assets/generated_images/Sheesham_wood_bookshelf_unit_88fd0804.png";
import rockingChairImage from "@assets/generated_images/Teak_wood_rocking_chair_a84fe3f5.png";

export interface Product {
  id: number;
  name: string;
  displayName: string;
  description: string;
  romanticDescription: string;
  artisanNote: string;
  image: string;
  wood: string;
  collection: "living" | "dining" | "bedroom" | "outdoor";
  category: string;
  features: string[];
  specifications: {
    material: string;
    finish: string;
    dimensions: string;
    origin: string;
  };
  shippingInfo: string;
  leadTime: string;
}

export const products: Product[] = [
  // LIVING COLLECTION
  {
    id: 1,
    name: "Traditional Sofa Set",
    displayName: "The 'Maharaja' Hand-Carved Sofa Set",
    description: "Elegant three-seater sofa in premium Sagwan wood with plush cushioning",
    romanticDescription:
      "Inspired by the grandeur of royal courts, this magnificent sofa set embodies timeless elegance. Each curve has been meticulously hand-carved by master artisans, creating a piece that transcends mere furniture to become a statement of refined taste. The rich Sagwan wood, aged to perfection, tells stories of generations of craftsmanship.",
    artisanNote:
      '"Every sofa we create is a masterpiece of comfort and artistry. The hand-carved details are not just decorative—they are a testament to our commitment to excellence." - Master Craftsman Rajesh',
    image: sofaImage,
    wood: "Sagwan Wood",
    collection: "living",
    category: "Sofas",
    features: [
      "Hand-carved wooden frame",
      "Premium cushioning with natural fiber filling",
      "Intricate joinery without nails",
      "Timeless design suitable for any interior",
      "Durable and long-lasting construction",
    ],
    specifications: {
      material: "Premium Sagwan Wood",
      finish: "Natural wood finish with hand-applied lacquer",
      dimensions: "84\" W x 36\" D x 36\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "8-12 weeks from order confirmation",
  },
  {
    id: 2,
    name: "Coffee Table",
    displayName: "The 'Elegance' Hand-Carved Coffee Table",
    description: "Elegant coffee table with lower shelf, ideal for modern living rooms",
    romanticDescription:
      "A perfect companion to your living space, this coffee table combines functionality with artistic beauty. The hand-carved details on the legs and edges showcase the artisan's dedication to perfection. The lower shelf provides practical storage while maintaining the piece's graceful silhouette.",
    artisanNote:
      '"The coffee table is where memories are made—around conversations and shared moments. We craft each one to be worthy of those precious times." - Master Craftsman Vikram',
    image: coffeeTableImage,
    wood: "Teak Wood",
    collection: "living",
    category: "Coffee Tables",
    features: [
      "Hand-carved wooden frame",
      "Spacious top surface for display",
      "Lower shelf for storage",
      "Smooth, polished finish",
      "Stable and sturdy construction",
    ],
    specifications: {
      material: "Premium Teak Wood",
      finish: "Hand-polished natural finish",
      dimensions: "48\" W x 24\" D x 18\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "6-8 weeks from order confirmation",
  },
  {
    id: 3,
    name: "Rocking Chair",
    displayName: "The 'Comfort' Hand-Carved Rocking Chair",
    description: "Comfortable traditional rocking chair with carved armrests",
    romanticDescription:
      "Experience the gentle rhythm of relaxation with this beautifully crafted rocking chair. Each rock is a meditation, each moment a treasure. The hand-carved armrests and backrest showcase traditional design elements that have been perfected over centuries.",
    artisanNote:
      '"A rocking chair is not just furniture—it is a sanctuary of peace and contemplation. We honor this tradition in every piece we create." - Master Craftsman Mohan',
    image: rockingChairImage,
    wood: "Teak Wood",
    collection: "living",
    category: "Armchairs",
    features: [
      "Hand-carved wooden frame",
      "Smooth rocking mechanism",
      "Ergonomic design for comfort",
      "Carved armrests and backrest",
      "Durable construction for years of use",
    ],
    specifications: {
      material: "Premium Teak Wood",
      finish: "Natural wood finish with protective lacquer",
      dimensions: "28\" W x 32\" D x 42\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "6-8 weeks from order confirmation",
  },

  // DINING COLLECTION
  {
    id: 4,
    name: "Dining Table Set",
    displayName: "The 'Maharaja' Hand-Carved Dining Table",
    description: "Six-seater dining set with matching chairs, perfect for family gatherings",
    romanticDescription:
      "The heart of every home is the dining table, where families gather to share meals and create memories. This magnificent six-seater set, crafted from premium Sagwan wood, is designed to be the centerpiece of your dining room. The hand-carved details on the table base and chair backs tell stories of traditional craftsmanship.",
    artisanNote:
      '"A dining table is where love is served. Every carving, every joint, every detail is crafted with the intention of bringing families together." - Master Craftsman Rajesh',
    image: diningImage,
    wood: "Sagwan Wood",
    collection: "dining",
    category: "Tables",
    features: [
      "Hand-carved wooden frame",
      "Spacious table top for comfortable dining",
      "Six matching chairs with carved backs",
      "Intricate joinery without nails",
      "Timeless design suitable for any interior",
    ],
    specifications: {
      material: "Premium Sagwan Wood",
      finish: "Natural wood finish with hand-applied lacquer",
      dimensions: "72\" W x 42\" D x 30\" H (Table), 18\" W x 18\" D x 36\" H (Chairs)",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "10-14 weeks from order confirmation",
  },
  {
    id: 5,
    name: "Dining Chairs Set",
    displayName: "The 'Royal' Hand-Carved Dining Chairs",
    description: "Set of four hand-carved dining chairs with ornate backrest",
    romanticDescription:
      "Complement your dining table with these exquisite hand-carved chairs. Each chair is a work of art, featuring intricate carvings on the backrest and legs. The comfortable seating and elegant design make them perfect for both everyday dining and special occasions.",
    artisanNote:
      '"Dining chairs are not just places to sit—they are thrones of comfort and elegance. We craft each one to honor the art of dining." - Master Craftsman Vikram',
    image: diningImage,
    wood: "Sagwan Wood",
    collection: "dining",
    category: "Chairs",
    features: [
      "Hand-carved wooden frame",
      "Ornate backrest with traditional designs",
      "Comfortable seating with natural padding",
      "Sturdy construction for daily use",
      "Set of four chairs",
    ],
    specifications: {
      material: "Premium Sagwan Wood",
      finish: "Natural wood finish with hand-applied lacquer",
      dimensions: "18\" W x 18\" D x 36\" H (per chair)",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "8-10 weeks from order confirmation",
  },
  {
    id: 6,
    name: "Sideboard Cabinet",
    displayName: "The 'Heritage' Hand-Carved Sideboard",
    description: "Spacious sideboard with ornate carved details and storage compartments",
    romanticDescription:
      "A statement piece for your dining room, this sideboard combines beauty with functionality. The hand-carved details on the doors and sides showcase traditional design elements, while the spacious interior provides ample storage for your dining essentials.",
    artisanNote:
      '"A sideboard is the guardian of your dining room\'s elegance. We craft each one to be both beautiful and practical." - Master Craftsman Mohan',
    image: wardrobeImage,
    wood: "Sagwan Wood",
    collection: "dining",
    category: "Sideboards",
    features: [
      "Hand-carved wooden frame",
      "Multiple storage compartments",
      "Ornate carved door panels",
      "Spacious top surface for display",
      "Durable construction for years of use",
    ],
    specifications: {
      material: "Premium Sagwan Wood",
      finish: "Natural wood finish with hand-applied lacquer",
      dimensions: "60\" W x 18\" D x 36\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "10-12 weeks from order confirmation",
  },

  // BEDROOM COLLECTION
  {
    id: 7,
    name: "King Size Bed Frame",
    displayName: "The 'Royal' Hand-Carved King Bed Frame",
    description: "Luxurious bed frame with intricately carved headboard in solid Teak",
    romanticDescription:
      "Transform your bedroom into a sanctuary of luxury with this magnificent king-size bed frame. The intricately carved headboard features traditional design elements that create a focal point of elegance. Crafted from premium Teak wood, this bed is built to last generations.",
    artisanNote:
      '"A bed is where dreams are born. We craft each headboard with the intention of creating a space of peace and beauty." - Master Craftsman Rajesh',
    image: bedImage,
    wood: "Teak Wood",
    collection: "bedroom",
    category: "Bed Frames",
    features: [
      "Hand-carved wooden frame",
      "Intricately carved headboard",
      "Sturdy construction for king-size mattress",
      "Traditional design with modern comfort",
      "Durable and long-lasting",
    ],
    specifications: {
      material: "Premium Teak Wood",
      finish: "Natural wood finish with protective lacquer",
      dimensions: "78\" W x 80\" D x 48\" H (headboard)",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "10-12 weeks from order confirmation",
  },
  {
    id: 8,
    name: "Nightstand",
    displayName: "The 'Serenity' Hand-Carved Nightstand",
    description: "Elegant nightstand with drawer and shelf storage",
    romanticDescription:
      "A perfect companion to your bed, this nightstand combines functionality with artistic beauty. The hand-carved details and smooth finish make it a beautiful addition to any bedroom. The drawer and shelf provide convenient storage for your bedside essentials.",
    artisanNote:
      '"A nightstand is the last thing you see before sleep and the first thing you see upon waking. We craft each one to bring peace to your bedroom." - Master Craftsman Vikram',
    image: coffeeTableImage,
    wood: "Teak Wood",
    collection: "bedroom",
    category: "Nightstands",
    features: [
      "Hand-carved wooden frame",
      "Spacious drawer for storage",
      "Lower shelf for additional storage",
      "Smooth, polished finish",
      "Stable and sturdy construction",
    ],
    specifications: {
      material: "Premium Teak Wood",
      finish: "Hand-polished natural finish",
      dimensions: "24\" W x 18\" D x 28\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "6-8 weeks from order confirmation",
  },

  // OUTDOOR & PATIO COLLECTION
  {
    id: 9,
    name: "Outdoor Bench",
    displayName: "The 'Garden' Hand-Carved Outdoor Bench",
    description: "Sturdy outdoor bench with weather-resistant finish",
    romanticDescription:
      "Bring the beauty of handcrafted furniture to your outdoor space with this stunning bench. Crafted from premium Teak wood, known for its natural resistance to weather and insects, this bench is designed to withstand the elements while maintaining its beauty for years to come.",
    artisanNote:
      '"An outdoor bench is an invitation to pause and appreciate nature. We craft each one to be a sanctuary in your garden." - Master Craftsman Mohan',
    image: rockingChairImage,
    wood: "Teak Wood",
    collection: "outdoor",
    category: "Outdoor & Patio",
    features: [
      "Hand-carved wooden frame",
      "Weather-resistant Teak wood",
      "Comfortable seating for multiple people",
      "Natural resistance to insects and rot",
      "Durable construction for outdoor use",
    ],
    specifications: {
      material: "Premium Teak Wood",
      finish: "Natural wood finish with weather-resistant sealant",
      dimensions: "60\" W x 24\" D x 36\" H",
      origin: "Handcrafted in Jaipur, India",
    },
    shippingInfo: "Carefully packaged and shipped with full insurance coverage",
    leadTime: "8-10 weeks from order confirmation",
  },
];

export const collections = [
  {
    id: "living",
    name: "Living",
    description: "Create a warm and inviting living space with our collection of sofas, coffee tables, and armchairs.",
    products: products.filter((p) => p.collection === "living"),
  },
  {
    id: "dining",
    name: "Dining",
    description: "Gather around our exquisite dining tables and chairs, perfect for family meals and special occasions.",
    products: products.filter((p) => p.collection === "dining"),
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Transform your bedroom into a sanctuary of luxury with our bed frames and nightstands.",
    products: products.filter((p) => p.collection === "bedroom"),
  },
  {
    id: "outdoor",
    name: "Outdoor & Patio",
    description: "Extend your living space outdoors with our weather-resistant furniture collection.",
    products: products.filter((p) => p.collection === "outdoor"),
  },
];

