# Technical Implementation Guide - Carve Teak Global

## Quick Reference: Top 15 High-Impact Enhancements

### 1. Add Favicon & App Icons (30 min)
```bash
# Generate favicon from logo
# Place in public/favicon.ico, public/apple-touch-icon.png
# Add to index.html:
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#6B4423">
```

### 2. Implement Image Lazy Loading (1 hour)
```tsx
// Use native lazy loading
<img src={image} alt="Product" loading="lazy" />

// Or use Intersection Observer for blur-up effect
import { useEffect, useRef, useState } from 'react';

export function LazyImage({ src, alt, placeholder }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageSrc(src);
        observer.unobserve(entry.target);
      }
    });
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src]);

  return <img ref={imgRef} src={imageSrc} alt={alt} />;
}
```

### 3. Add SEO Meta Tags (1.5 hours)
```tsx
// Create useHead hook or use Helmet-like solution
export function useSEO(title, description, image) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
  }, [title, description, image]);
}

// Use in pages:
useSEO(
  'Carve Teak Global - Handcrafted Wooden Furniture',
  'Premium handcrafted furniture in Sheesham & Teak wood',
  'https://example.com/og-image.jpg'
);
```

### 4. Create Skeleton Loader (1 hour)
```tsx
// Use existing Skeleton component from shadcn/ui
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

// Use in Products.tsx:
{isLoading ? (
  <ProductCardSkeleton />
) : (
  <ProductCard product={product} />
)}
```

### 5. Add Form Validation (1.5 hours)
```tsx
// Already using react-hook-form + Zod
// Enhance with real-time validation:
<FormField
  control={form.control}
  name="email"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input
          {...field}
          type="email"
          placeholder="your@email.com"
          className={fieldState.error ? 'border-red-500' : ''}
        />
      </FormControl>
      {fieldState.error && (
        <FormMessage className="text-red-500">
          {fieldState.error.message}
        </FormMessage>
      )}
    </FormItem>
  )}
/>
```

### 6. Implement Breadcrumb Navigation (45 min)
```tsx
// Create Breadcrumb component
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="w-4 h-4" />}
          {item.href ? (
            <a href={item.href} className="text-primary hover:underline">
              {item.label}
            </a>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Use in ProductDetailPage:
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: product.collection },
  { label: product.displayName }
]} />
```

### 7. Add Back-to-Top Button (30 min)
```tsx
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  ) : null;
}
```

### 8. Create Custom 404 Page (45 min)
```tsx
// client/src/pages/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Page Not Found</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setLocation('/')}>Go Home</Button>
          <Button variant="outline" onClick={() => setLocation('/collections')}>
            Browse Collections
          </Button>
        </div>
      </div>
    </div>
  );
}
```

### 9. Add Product Filtering (2 hours)
```tsx
// Create filter state
const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
const [sortBy, setSortBy] = useState('name');

const filteredProducts = useMemo(() => {
  let filtered = products;
  if (selectedCollection) {
    filtered = filtered.filter(p => p.collection === selectedCollection);
  }
  return filtered.sort((a, b) => {
    if (sortBy === 'name') return a.displayName.localeCompare(b.displayName);
    if (sortBy === 'price') return a.id - b.id; // Placeholder
    return 0;
  });
}, [selectedCollection, sortBy]);

// Add filter UI
<div className="flex gap-4 mb-8">
  <Select value={selectedCollection || ''} onValueChange={setSelectedCollection}>
    <SelectTrigger className="w-48">
      <SelectValue placeholder="Filter by collection" />
    </SelectTrigger>
    <SelectContent>
      {collections.map(c => (
        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>
```

### 10. Implement Newsletter Signup (1.5 hours)
```tsx
export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to subscribe
    await apiRequest('POST', '/api/newsletter', { email });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Subscribe</Button>
      {isSubmitted && <p className="text-green-600">Thanks for subscribing!</p>}
    </form>
  );
}
```

### 11. Add Accessibility Features (2 hours)
```tsx
// Add ARIA labels
<button
  aria-label="Close menu"
  onClick={closeMenu}
  className="p-2"
>
  <X className="w-6 h-6" />
</button>

// Add focus states
<style>{`
  button:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`}</style>

// Add skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Add alt text to images
<img src={image} alt="Hand-carved Sheesham wood sofa set" />
```

### 12. Create FAQ Section (1.5 hours)
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the lead time?", a: "6-14 weeks depending on product" },
  { q: "Do you ship internationally?", a: "Yes, we ship worldwide" },
  // ... more FAQs
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### 13. Add Product Image Gallery (1.5 hours)
```tsx
export function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-full h-full object-cover hover-zoom"
        />
      </div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`w-16 h-16 rounded border-2 ${
              i === selectedImage ? 'border-primary' : 'border-gray-200'
            }`}
          >
            <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
```

### 14. Implement Toast Notifications (Already done - enhance styling)
```tsx
// Enhance toast styling in index.css
.toast {
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### 15. Add Privacy Policy & Terms (1 hour)
```tsx
// Create pages/PrivacyPage.tsx and pages/TermsPage.tsx
// Add links in Footer
<a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
<a href="/terms" className="text-sm hover:underline">Terms of Service</a>

// Add routes in App.tsx
<Route path="/privacy" component={PrivacyPage} />
<Route path="/terms" component={TermsPage} />
```

---

## Performance Optimization Checklist

- [ ] Enable image lazy loading
- [ ] Implement code splitting for routes
- [ ] Add service worker for offline support
- [ ] Optimize bundle size (< 200KB gzipped)
- [ ] Add HTTP caching headers
- [ ] Implement prefers-reduced-motion
- [ ] Add will-change to animated elements
- [ ] Optimize font loading (font-display: swap)
- [ ] Minify CSS and JavaScript
- [ ] Enable Gzip compression

---

## Testing Checklist

- [ ] Test on mobile devices (iOS, Android)
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Test form validation
- [ ] Test error states
- [ ] Test loading states
- [ ] Test animations on low-end devices
- [ ] Test with slow network (3G)
- [ ] Test cross-browser compatibility
- [ ] Test accessibility (WCAG 2.1 AA)


