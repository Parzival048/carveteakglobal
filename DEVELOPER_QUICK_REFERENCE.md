# Carve Teak Global - Developer Quick Reference

## Project Overview

**Project**: Carve Teak Global Website Redesign
**Type**: React + TypeScript SPA with Express backend
**Status**: ✅ Implementation Complete
**Last Updated**: October 20, 2025

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check
```

## Project Structure

```
WoodCraftShowcase/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProductDetailPage.tsx (NEW)
│   │   │   ├── OurStoryPage.tsx (NEW)
│   │   │   ├── TheCraftPage.tsx (NEW)
│   │   │   ├── CollectionsPage.tsx (NEW)
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   │   ├── Navigation.tsx (UPDATED)
│   │   │   ├── Hero.tsx (UPDATED)
│   │   │   ├── About.tsx (UPDATED)
│   │   │   ├── Products.tsx (UPDATED)
│   │   │   ├── Contact.tsx (UPDATED)
│   │   │   ├── Footer.tsx (UPDATED)
│   │   │   ├── WhatsAppButton.tsx (UPDATED)
│   │   │   ├── Gallery.tsx
│   │   │   └── ui/ (component library)
│   │   ├── data/
│   │   │   └── products.ts (NEW)
│   │   ├── App.tsx (UPDATED)
│   │   └── main.tsx
│   └── index.html (UPDATED)
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
└── package.json
```

## Key Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Main landing page |
| `/product/:id` | ProductDetailPage | Individual product details |
| `/our-story` | OurStoryPage | Brand story and heritage |
| `/the-craft` | TheCraftPage | Craftsmanship process |
| `/collections` | CollectionsPage | All product collections |
| `*` | NotFound | 404 page |

## Product Data Structure

```typescript
interface Product {
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
```

## Collections

- **Living**: Sofas, Coffee Tables, Armchairs (3 products)
- **Dining**: Tables, Chairs, Sideboards (3 products)
- **Bedroom**: Bed Frames, Nightstands (2 products)
- **Outdoor & Patio**: Outdoor furniture (1 product)

## WhatsApp Integration

### Phone Number
```
+91 77580 77875
```

### WhatsApp URL Format
```
https://wa.me/{phoneNumber}?text={encodeURIComponent(message)}
```

### Usage Examples

**Generic Message**:
```typescript
const message = "Hello! I'm interested in your handcrafted wooden furniture.";
```

**Product-Specific Message**:
```typescript
const message = `Hello! I'm interested in your "${productName}" product. Could you provide more details?`;
```

## Component Usage

### WhatsAppButton Component

```typescript
// Generic button (all pages)
<WhatsAppButton />

// Product-specific button
<WhatsAppButton productName={product.displayName} productId={product.id} />
```

### Navigation Component

```typescript
// Automatically handles:
// - Scroll to sections
// - Route navigation
// - Mobile menu
// - Responsive design
<Navigation />
```

### Products Component

```typescript
// Shows 6 featured products
// Includes "View All Collections" button
<Products />
```

## Styling

### Color Palette

```css
/* Primary Colors */
--primary: 25 35% 45%; /* Rich wood brown */
--primary-foreground: 42 25% 96%; /* Cream/off-white */

/* Secondary Colors */
--background: 42 25% 96%; /* Warm cream */
--card: 35 20% 92%; /* Light beige */
--foreground: 25 20% 25%; /* Dark warm gray */
--muted-foreground: 30 15% 45%; /* Medium warm gray */
```

### Typography

```css
/* Headings */
font-family: 'Playfair Display', serif;
font-weight: 600 | 700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400 | 500 | 600;
```

### Spacing

```css
/* Section spacing */
py-20 md:py-28

/* Component padding */
p-6 to p-8

/* Grid gaps */
gap-6 md:gap-8
```

## Common Tasks

### Adding a New Product

1. Add product to `client/src/data/products.ts`
2. Import product image at top of file
3. Add to appropriate collection
4. Product detail page auto-generates

### Adding a New Page

1. Create component in `client/src/pages/`
2. Add route to `client/src/App.tsx`
3. Update navigation in `client/src/components/Navigation.tsx`
4. Update footer links in `client/src/components/Footer.tsx`

### Updating WhatsApp Message

1. Edit phone number in `client/src/components/WhatsAppButton.tsx`
2. Update message template in component
3. Or pass custom message via props

### Modifying Product Details

1. Edit product in `client/src/data/products.ts`
2. Update romanticDescription, features, specifications
3. Changes auto-reflect on product detail page

## Brand Guidelines

### Brand Name
```
Carve Teak Global
```

### Brand Slogan
```
"The Soul of Teak, Carved by Hand"
```

### Tone
- Sophisticated and romantic
- Luxury-focused
- Heritage and tradition emphasis
- Master craftsmanship focus

### Visual Style
- Warm, natural aesthetic
- Elegant and timeless
- Professional quality
- Handcrafted emphasis

## Performance Tips

1. **Images**: Use existing generated images in `attached_assets/generated_images/`
2. **Lazy Loading**: Implement for product images
3. **Code Splitting**: Routes are automatically code-split by Wouter
4. **Caching**: Configure browser caching for static assets

## Testing

See `TESTING_GUIDE.md` for comprehensive testing procedures.

### Quick Test Checklist
- [ ] All routes work
- [ ] WhatsApp integration works
- [ ] Product detail pages load
- [ ] Contact form submits
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors

## Deployment

### Build
```bash
npm run build
```

### Environment Variables
```
PORT=5000
NODE_ENV=production
```

### Production Checklist
- [ ] Build succeeds
- [ ] No console errors
- [ ] All routes work
- [ ] WhatsApp integration tested
- [ ] Images optimized
- [ ] Performance acceptable

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Run type check
npm run check

# Fix issues in source files
```

## Useful Links

- **Design Guidelines**: `design_guidelines.md`
- **Implementation Summary**: `IMPLEMENTATION_SUMMARY.md`
- **Testing Guide**: `TESTING_GUIDE.md`
- **Implementation Checklist**: `IMPLEMENTATION_CHECKLIST.md`

## Contact Information

- **Company**: GAU VEDA GLOBAL LLP
- **Phone**: +91 77580 77875
- **Email**: Carvetealglobal@gmail.com
- **Location**: SNO.112/1 NR. KHANDOBA MANDIR, PUNAWALE, PUNE CITY, PUNE-411033, MAHARASHTRA
- **WhatsApp**: Available 24/7

## Key Files Modified/Created

### New Files
- `client/src/pages/ProductDetailPage.tsx`
- `client/src/pages/OurStoryPage.tsx`
- `client/src/pages/TheCraftPage.tsx`
- `client/src/pages/CollectionsPage.tsx`
- `client/src/data/products.ts`

### Modified Files
- `client/src/App.tsx`
- `client/src/components/Navigation.tsx`
- `client/src/components/Hero.tsx`
- `client/src/components/About.tsx`
- `client/src/components/Products.tsx`
- `client/src/components/Contact.tsx`
- `client/src/components/Footer.tsx`
- `client/src/components/WhatsAppButton.tsx`
- `client/index.html`

## Version Info

- React: 18.3.1
- TypeScript: 5.6.3
- Tailwind CSS: 3.4.17
- Wouter: 3.3.5
- Node: 20+

---

**Last Updated**: October 20, 2025
**Status**: ✅ Production Ready

