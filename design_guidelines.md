# Furniture Showcase & Lead Generation Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern furniture e-commerce leaders (West Elm, Article, Burrow) and lead-generation focused sites, combined with the natural aesthetic of the reference site (anashandicraft.com). This approach emphasizes visual product showcasing with clean layouts and clear conversion paths.

## Core Design Principles
1. **Natural Elegance**: Warm, inviting aesthetic that mirrors the craftsmanship of wooden furniture
2. **Visual Hierarchy**: Guide users from inspiration (hero) → exploration (products/gallery) → conversion (contact forms)
3. **Trust Building**: Professional presentation with clear contact options and social proof
4. **Lead Generation Focus**: Multiple conversion touchpoints throughout the journey

## Color Palette

**Light Mode (Primary)**
- **Primary Background**: 42 25% 96% (Warm cream/off-white)
- **Secondary Background**: 35 20% 92% (Light beige)
- **Primary Brown**: 25 35% 45% (Rich wood brown for headings, CTAs)
- **Accent Brown**: 30 40% 35% (Darker brown for hover states)
- **Text Primary**: 25 20% 25% (Dark warm gray)
- **Text Secondary**: 30 15% 45% (Medium warm gray)
- **Border/Divider**: 35 15% 85% (Subtle warm gray)

**Dark Mode**: Not required for this project (furniture showcase works best in light, warm tones)

## Typography

**Font Families** (via Google Fonts CDN):
- **Headings**: 'Playfair Display' (serif, elegant) - weights: 600, 700
- **Body & UI**: 'Inter' (sans-serif, clean) - weights: 400, 500, 600

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Product Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Grid gaps: gap-6 md:gap-8
- Container max-width: max-w-7xl

**Grid Layouts**:
- Products: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

**Navigation Bar**
- Sticky floating header (sticky top-0 with backdrop-blur-md and bg-opacity-95)
- Height: h-20
- Logo left-aligned, navigation links centered/right
- "Request Quote" CTA button (primary brown, rounded-lg)

**Hero Section**
- Full-width banner with large background image (furniture workshop or beautiful wooden furniture)
- Height: min-h-screen or h-[600px] md:h-[700px]
- Centered content with overlay gradient (to ensure text readability)
- Main headline: "Handcrafted Wooden Furniture"
- Tagline beneath: "Traditional Craftsmanship in Sheesham & Teak Wood"
- Primary CTA: "Request Quote" button (large, px-8 py-4, with blurred background if on image)

**Product Cards**
- Clean white background with subtle shadow (shadow-md hover:shadow-xl transition)
- Aspect ratio 4:3 for product images
- Padding: p-6
- Elements: Image → Title → Short description (2-3 lines) → "Learn More" button
- Hover effect: slight lift (translate-y-1) and increased shadow

**Contact Form**
- Clean card design with rounded corners (rounded-xl)
- Spacing between fields: space-y-4
- Input styling: border-2 with warm gray, focus:border-primary transition
- Large submit button at bottom
- Fields: Name, Phone, Email, Message (textarea)

**WhatsApp Float Button**
- Position: fixed bottom-6 right-6
- Size: w-16 h-16
- WhatsApp green background (#25D366)
- Icon: WhatsApp icon (from Font Awesome)
- Shadow: shadow-lg with subtle bounce animation on hover
- z-index: z-50

**Footer**
- Multi-column layout on desktop (grid-cols-1 md:grid-cols-3)
- Sections: Company Info & Location | Quick Links | Social Media & Contact
- Background: Darker brown (30 30% 40%)
- Text: Cream/light (42 25% 96%)
- Padding: py-12

**Gallery Lightbox**
- Grid of images with hover overlay effect
- Click to open lightbox modal
- Modal: Full-screen dark backdrop with centered image
- Navigation arrows and close button
- Smooth fade-in transition

**Testimonial Cards**
- White background with subtle border
- Quote icon at top
- Customer quote in italics
- Customer name and designation below
- Avatar placeholder (circular, 60x60px)

## Images

**Required Images**:
1. **Hero Background**: Wide-angle shot of beautiful wooden furniture in a warm, inviting setting (workshop or elegant room) - full-width, high-quality
2. **Product Images** (8-10): High-quality photos of:
   - Wooden sofa sets (2-3 variations)
   - Bed frames (king/queen sizes)
   - Dining tables with chairs
   - Coffee tables
   - Wardrobes
   - TV units/consoles
3. **Gallery Images** (12-16): Mix of product shots, detail shots (wood grain, joints), and furnished room settings
4. **About Section**: Workshop or craftsmen at work (optional but recommended)
5. **Testimonial Avatars**: Placeholder circular images (can be initials on colored backgrounds)

**Image Treatment**:
- Rounded corners: rounded-lg for product images
- Consistent aspect ratios within sections
- Subtle hover effects (scale-105 or brightness increase)

## Interactions & Animations

**Navigation**:
- Smooth scrolling (scroll-behavior: smooth)
- Active link highlighting in navigation
- Mobile: Hamburger menu with slide-in drawer

**Micro-interactions** (minimal, purposeful):
- Button hover: slight scale (scale-105) and color darkening
- Card hover: shadow increase and subtle lift
- Image hover in gallery: overlay with "View" text

**Page Transitions**:
- Fade-in on scroll for sections (use Intersection Observer)
- Stagger animation for product grid items

## Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Focus states for all interactive elements
- Sufficient color contrast (WCAG AA compliant)
- Mobile-friendly touch targets (min 44x44px)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns for products)
- Desktop: > 1024px (full 3-column grids, expanded navigation)

This design creates a warm, professional, and conversion-focused experience that showcases handcrafted furniture while making it effortless for visitors to request quotes and contact the business.