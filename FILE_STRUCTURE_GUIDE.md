# Carve Teak Global - File Structure Guide

## Project Directory Structure

```
WoodCraftShowcase/
│
├── client/                                 # Frontend React application
│   ├── src/
│   │   ├── pages/                         # Page components
│   │   │   ├── HomePage.tsx               # Main landing page
│   │   │   ├── ProductDetailPage.tsx      # ✨ NEW - Product detail pages
│   │   │   ├── OurStoryPage.tsx           # ✨ NEW - Brand story
│   │   │   ├── TheCraftPage.tsx           # ✨ NEW - Craftsmanship process
│   │   │   ├── CollectionsPage.tsx        # ✨ NEW - All collections
│   │   │   └── not-found.tsx              # 404 page
│   │   │
│   │   ├── components/                    # Reusable components
│   │   │   ├── Navigation.tsx             # 🔄 UPDATED - New navigation items
│   │   │   ├── Hero.tsx                   # 🔄 UPDATED - Added brand slogan
│   │   │   ├── About.tsx                  # 🔄 UPDATED - Enhanced content
│   │   │   ├── Products.tsx               # 🔄 UPDATED - New product display
│   │   │   ├── Contact.tsx                # 🔄 UPDATED - WhatsApp integration
│   │   │   ├── Footer.tsx                 # 🔄 UPDATED - Brand information
│   │   │   ├── WhatsAppButton.tsx         # 🔄 UPDATED - Enhanced functionality
│   │   │   ├── Gallery.tsx                # Image gallery component
│   │   │   └── ui/                        # Shadcn/ui components
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toaster.tsx
│   │   │       ├── tooltip.tsx
│   │   │       └── ...
│   │   │
│   │   ├── data/                          # Data files
│   │   │   └── products.ts                # ✨ NEW - Product data (9 products)
│   │   │
│   │   ├── lib/                           # Utility functions
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── App.tsx                        # 🔄 UPDATED - Main app with routes
│   │   ├── main.tsx                       # Entry point
│   │   └── index.css                      # Global styles
│   │
│   ├── index.html                         # 🔄 UPDATED - HTML template
│   ├── vite.config.ts                     # Vite configuration
│   └── tsconfig.json                      # TypeScript configuration
│
├── server/                                # Backend Express server
│   ├── index.ts                           # Server entry point
│   ├── routes.ts                          # API routes
│   ├── storage.ts                         # Data storage
│   └── vite.ts                            # Vite integration
│
├── shared/                                # Shared types
│   └── schema.ts                          # Zod schemas
│
├── attached_assets/                       # Asset files
│   └── generated_images/                  # Product images
│       ├── Traditional_Sheesham_wood_sofa_set_e3cad8e4.png
│       ├── Teak_wood_king_bed_frame_b9f60887.png
│       ├── Sheesham_wood_dining_table_set_1fadc581.png
│       ├── Teak_wood_coffee_table_47a5f2c2.png
│       ├── Sheesham_wood_wardrobe_cabinet_f5ada2d8.png
│       ├── Teak_wood_TV_console_unit_87da3380.png
│       ├── Sheesham_wood_bookshelf_unit_88fd0804.png
│       └── Teak_wood_rocking_chair_a84fe3f5.png
│
├── Documentation/                         # Project documentation
│   ├── IMPLEMENTATION_SUMMARY.md          # ✨ NEW - Detailed implementation
│   ├── TESTING_GUIDE.md                   # ✨ NEW - Testing procedures
│   ├── IMPLEMENTATION_CHECKLIST.md        # ✨ NEW - Requirements checklist
│   ├── DEVELOPER_QUICK_REFERENCE.md       # ✨ NEW - Developer reference
│   ├── PROJECT_COMPLETION_REPORT.md       # ✨ NEW - Completion report
│   ├── FILE_STRUCTURE_GUIDE.md            # ✨ NEW - This file
│   └── design_guidelines.md               # Design guidelines
│
├── package.json                           # Dependencies
├── package-lock.json                      # Dependency lock file
├── tsconfig.json                          # TypeScript config
├── vite.config.ts                         # Vite config
└── README.md                              # Project README
```

## Key Files Summary

### ✨ NEW FILES (6 total)

#### Pages (4)
1. **ProductDetailPage.tsx** (250+ lines)
   - Professional product detail pages
   - Image gallery, features, specifications
   - WhatsApp inquiry buttons
   - Back navigation

2. **OurStoryPage.tsx** (200+ lines)
   - Brand narrative and heritage
   - Company philosophy and commitment
   - Master craftsmen section
   - Call-to-action

3. **TheCraftPage.tsx** (250+ lines)
   - 4-stage craftsmanship process
   - The Source, Vision, Carve, Finish
   - Process descriptions and details
   - Craftsmanship philosophy

4. **CollectionsPage.tsx** (200+ lines)
   - All product collections organized
   - Collection descriptions
   - Product grid layout
   - Custom furniture CTA

#### Data (1)
5. **products.ts** (330+ lines)
   - Product interface definition
   - 9 comprehensive products
   - 4 collections (Living, Dining, Bedroom, Outdoor)
   - Rich product information

#### Documentation (1)
6. **IMPLEMENTATION_SUMMARY.md** (300+ lines)
   - Complete implementation overview
   - Features summary
   - Technical details
   - Testing recommendations

### 🔄 UPDATED FILES (9 total)

#### Components (7)
1. **Navigation.tsx**
   - Updated brand name to "Carve Teak Global"
   - New navigation items: Our Story, The Craft, Collections
   - Responsive mobile menu

2. **Hero.tsx**
   - Added brand slogan display
   - "The Soul of Teak, Carved by Hand"
   - Maintained luxury aesthetic

3. **About.tsx**
   - Renamed to "Our Promise"
   - Enhanced feature descriptions
   - Luxury positioning emphasis

4. **Products.tsx**
   - Updated to use new product data
   - Shows 6 featured products
   - "View All Collections" button
   - Click-through to product details

5. **Contact.tsx**
   - Added WhatsApp quick chat section
   - Green-themed WhatsApp UI
   - Maintained contact form

6. **Footer.tsx**
   - Updated brand name
   - Added brand slogan
   - Updated quick links
   - Updated copyright

7. **WhatsAppButton.tsx**
   - Product-specific messaging
   - Dynamic message generation
   - Bounce animation
   - Improved accessibility

#### Core Files (2)
8. **App.tsx**
   - Added 5 new routes
   - /product/:id, /our-story, /the-craft, /collections
   - Maintained existing routes

9. **index.html**
   - Updated page title
   - Updated meta description
   - Brand name and slogan

## Product Data Structure

### File: `client/src/data/products.ts`

```typescript
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
  // 9 products across 4 collections
]
```

## Component Hierarchy

```
App
├── Router
│   ├── HomePage
│   │   ├── Navigation
│   │   ├── Hero
│   │   ├── About
│   │   ├── Products
│   │   ├── Gallery
│   │   ├── Contact
│   │   └── Footer
│   ├── ProductDetailPage
│   │   ├── Navigation
│   │   ├── Product Details
│   │   ├── WhatsAppButton
│   │   └── Footer
│   ├── OurStoryPage
│   │   ├── Navigation
│   │   ├── Story Content
│   │   └── Footer
│   ├── TheCraftPage
│   │   ├── Navigation
│   │   ├── Process Stages
│   │   └── Footer
│   ├── CollectionsPage
│   │   ├── Navigation
│   │   ├── Collections Grid
│   │   └── Footer
│   └── NotFound
│       └── 404 Page
└── WhatsAppButton (floating)
```

## Routing Structure

```
/                    → HomePage
/product/:id         → ProductDetailPage
/our-story          → OurStoryPage
/the-craft          → TheCraftPage
/collections        → CollectionsPage
*                   → NotFound (404)
```

## Asset Organization

### Images
- Location: `attached_assets/generated_images/`
- Format: PNG
- Used for: Product display
- Total: 8 product images

### Styles
- Framework: Tailwind CSS
- Colors: Warm browns, creams, natural tones
- Typography: Playfair Display (headings), Inter (body)
- Responsive: Mobile-first approach

## Dependencies

### Frontend
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.17
- Wouter 3.3.5 (routing)
- React Hook Form (forms)
- Zod (validation)
- TanStack Query (data management)
- Shadcn/ui (components)
- Lucide React (icons)

### Backend
- Express.js
- TypeScript
- Vite (build tool)

## Configuration Files

### TypeScript
- `tsconfig.json` - TypeScript configuration
- Path aliases: @, @shared, @assets

### Vite
- `vite.config.ts` - Build configuration
- Development server on port 5000

### Package Management
- `package.json` - Dependencies and scripts
- `package-lock.json` - Dependency lock file

## Documentation Files

1. **IMPLEMENTATION_SUMMARY.md** - Complete implementation overview
2. **TESTING_GUIDE.md** - Step-by-step testing procedures
3. **IMPLEMENTATION_CHECKLIST.md** - Requirements verification
4. **DEVELOPER_QUICK_REFERENCE.md** - Quick developer reference
5. **PROJECT_COMPLETION_REPORT.md** - Project completion summary
6. **FILE_STRUCTURE_GUIDE.md** - This file
7. **design_guidelines.md** - Design guidelines

## Quick Navigation

### To Add a New Product
→ Edit `client/src/data/products.ts`

### To Update Navigation
→ Edit `client/src/components/Navigation.tsx`

### To Add a New Page
→ Create in `client/src/pages/` and add route to `client/src/App.tsx`

### To Update WhatsApp
→ Edit `client/src/components/WhatsAppButton.tsx`

### To Modify Styling
→ Update Tailwind classes in components or `client/src/index.css`

---

**Last Updated**: October 20, 2025
**Status**: ✅ Complete
**Total Files**: 15+ new/updated files
**Documentation**: 6 comprehensive guides

