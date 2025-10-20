# Carve Teak Global - Testing Guide

## Quick Start Testing

### 1. Navigation Testing

#### Homepage Navigation
- [ ] Click "Carve Teak Global" logo - should scroll to home
- [ ] Click "Our Story" - should navigate to /our-story
- [ ] Click "The Craft" - should navigate to /the-craft
- [ ] Click "Collections" - should navigate to /collections
- [ ] Click "Contact" - should scroll to contact section
- [ ] Test mobile menu hamburger icon
- [ ] Verify all mobile menu items work

#### Page Navigation
- [ ] From Our Story page, click "Back to Home" button
- [ ] From The Craft page, click "Back to Home" button
- [ ] From Collections page, click "Back to Home" button
- [ ] From Product Detail page, click "Back to Products" button

### 2. WhatsApp Integration Testing

#### Floating Button
- [ ] Verify WhatsApp button appears on all pages
- [ ] Button should be fixed at bottom-right corner
- [ ] Click button - should open WhatsApp with pre-filled message
- [ ] Verify message content is appropriate for each page

#### Product-Specific WhatsApp
- [ ] Navigate to any product detail page
- [ ] Click "Inquire on WhatsApp" button
- [ ] Verify message includes product name
- [ ] Verify WhatsApp opens with correct phone number

#### Contact Form WhatsApp
- [ ] Scroll to Contact section on homepage
- [ ] Verify "Quick Chat on WhatsApp" section is visible
- [ ] Click "Chat on WhatsApp" button
- [ ] Verify WhatsApp opens with pre-filled message

### 3. Products Section Testing

#### Homepage Products
- [ ] Verify 6 featured products display on homepage
- [ ] Click on any product card - should navigate to product detail page
- [ ] Click "View Details" button - should navigate to product detail page
- [ ] Verify "View All Collections" button is visible
- [ ] Click "View All Collections" - should navigate to /collections

#### Collections Page
- [ ] Verify all 4 collections are displayed
- [ ] Verify collection titles and descriptions
- [ ] Count products in each collection:
  - Living: 3 products
  - Dining: 3 products
  - Bedroom: 2 products
  - Outdoor & Patio: 1 product
- [ ] Click on any product - should navigate to product detail page

#### Product Detail Page
- [ ] Verify product image displays correctly
- [ ] Verify product title in format: "The '[Name]' Hand-Carved [Type]"
- [ ] Verify romantic description displays
- [ ] Verify Artisan's Note is italicized
- [ ] Verify Key Features section with all features
- [ ] Verify Specifications section with:
  - Material
  - Finish
  - Dimensions
  - Origin
- [ ] Verify Shipping Information section
- [ ] Verify Lead Time section
- [ ] Click "Inquire on WhatsApp" button
- [ ] Click "Request Quote" button
- [ ] Click "Back to Products" button

### 4. Content Pages Testing

#### Our Story Page
- [ ] Verify page title "Our Story"
- [ ] Verify all sections display:
  - The Beginning
  - Our Philosophy
  - Our Commitment
  - Our Master Craftsmen
  - Our Promise
- [ ] Verify craftsman image displays
- [ ] Verify "Explore Our Collection" button works
- [ ] Verify back button works

#### The Craft Page
- [ ] Verify page title "The Craft"
- [ ] Verify all 4 stages display:
  1. The Source
  2. The Vision
  3. The Carve
  4. The Finish
- [ ] Verify each stage has number badge
- [ ] Verify stage descriptions and details
- [ ] Verify process images display
- [ ] Verify Craftsmanship Philosophy section
- [ ] Verify "View Our Collection" button works

### 5. Contact Form Testing

#### Form Submission
- [ ] Fill in all fields with valid data
- [ ] Click "Send Message" button
- [ ] Verify success toast notification
- [ ] Verify form resets after submission
- [ ] Try submitting with invalid email - should show error
- [ ] Try submitting with empty fields - should show errors

#### Contact Information
- [ ] Verify location address displays
- [ ] Verify phone number displays
- [ ] Verify email address displays
- [ ] Verify business hours display
- [ ] Verify WhatsApp section displays

### 6. Responsive Design Testing

#### Mobile (< 768px)
- [ ] Verify hamburger menu appears
- [ ] Verify navigation items stack vertically
- [ ] Verify product grid shows 1 column
- [ ] Verify images scale properly
- [ ] Verify text is readable
- [ ] Verify buttons are touch-friendly (44x44px minimum)

#### Tablet (768px - 1024px)
- [ ] Verify navigation shows inline
- [ ] Verify product grid shows 2 columns
- [ ] Verify layout is balanced
- [ ] Verify spacing is appropriate

#### Desktop (> 1024px)
- [ ] Verify full navigation displays
- [ ] Verify product grid shows 3 columns
- [ ] Verify full layout displays
- [ ] Verify spacing and alignment

### 7. Brand Consistency Testing

#### Visual Elements
- [ ] Verify brand name "Carve Teak Global" appears in:
  - Navigation logo
  - Footer
  - Page titles
- [ ] Verify brand slogan appears in:
  - Hero section
  - Footer
- [ ] Verify color scheme is consistent
- [ ] Verify typography is consistent (Playfair Display for headings, Inter for body)

#### Content Tone
- [ ] Verify romantic, luxury tone throughout
- [ ] Verify heritage and tradition emphasis
- [ ] Verify master craftsmanship focus
- [ ] Verify professional language

### 8. Performance Testing

#### Page Load Times
- [ ] Measure homepage load time
- [ ] Measure product detail page load time
- [ ] Measure collections page load time
- [ ] Verify images load efficiently

#### Image Optimization
- [ ] Verify images are appropriately sized
- [ ] Check for lazy loading implementation
- [ ] Verify no oversized images

### 9. SEO Testing

#### Meta Tags
- [ ] Verify page title in browser tab
- [ ] Verify meta description in HTML
- [ ] Verify Open Graph tags for social sharing

#### Heading Hierarchy
- [ ] Verify H1 tags are used correctly
- [ ] Verify H2, H3 hierarchy is logical
- [ ] Verify no skipped heading levels

#### Alt Text
- [ ] Verify all images have alt text
- [ ] Verify alt text is descriptive

### 10. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Verify focus states are visible
- [ ] Verify all buttons are keyboard accessible
- [ ] Verify form fields are keyboard accessible

#### Screen Reader
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Verify page structure is logical
- [ ] Verify all content is readable
- [ ] Verify form labels are associated

#### Color Contrast
- [ ] Verify text has sufficient contrast
- [ ] Verify buttons have sufficient contrast
- [ ] Verify links are distinguishable

## Test Checklist Summary

- [ ] All navigation links work
- [ ] WhatsApp integration works on all pages
- [ ] Product detail pages load correctly
- [ ] Contact form submits successfully
- [ ] Responsive design works on all screen sizes
- [ ] Brand consistency maintained
- [ ] Performance is acceptable
- [ ] SEO elements are in place
- [ ] Accessibility standards met
- [ ] No console errors

## Known Issues & Notes

- TypeScript configuration may show some module resolution warnings (non-critical)
- Images are using generated placeholder images
- WhatsApp integration requires valid phone number
- Contact form requires backend API endpoint

## Browser Compatibility

Test on:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Deployment Checklist

Before deploying to production:
- [ ] All tests pass
- [ ] No console errors
- [ ] Performance optimized
- [ ] SEO verified
- [ ] Accessibility verified
- [ ] Mobile responsive verified
- [ ] WhatsApp integration tested
- [ ] Contact form tested
- [ ] All links verified
- [ ] Images optimized

