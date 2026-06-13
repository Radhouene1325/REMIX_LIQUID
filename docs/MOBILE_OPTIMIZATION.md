# Mobile Optimization Guide

## Overview
This document covers the mobile-first optimization strategies implemented in REMIX_LIQUID.

## Mobile-First Design Principles

### 1. Responsive Layouts
- **Mobile (< 640px)**: Single column, full-width
- **Tablet (641px - 1024px)**: 2-3 columns
- **Desktop (> 1024px)**: 4-5 columns

### 2. Touch-Friendly Interface
- Minimum 44x44px touch targets
- 16px minimum spacing between interactive elements
- Swipe gestures for navigation
- Bottom navigation for mobile (Ali Baba style)

### 3. Performance Optimization

#### Lazy Loading Images
```liquid
{% render 'image-responsive' with image: product.featured_image %}
```

#### Critical CSS
- Inline critical above-the-fold CSS
- Defer non-critical stylesheets
- Minify all CSS

#### JavaScript Optimization
- Debounce scroll events
- Async/defer script loading
- Remove unused JavaScript

## Core Web Vitals Targets

### LCP (Largest Contentful Paint) < 2.5s
- Preload critical fonts
- Optimize hero images (max 80KB)
- Minimize server response time

### INP (Interaction to Next Paint) < 200ms
- Debounce event listeners (100ms)
- Break long tasks into chunks
- Use requestIdleCallback for non-urgent work

### CLS (Cumulative Layout Shift) < 0.1
- Add width/height attributes to all images
- Reserve space for dynamic content
- Avoid inserting content above existing content

## Mobile Navigation Patterns

### Pattern 1: Hamburger Menu (Default)
```html
<button class="hamburger" data-hamburger>
  <span></span><span></span><span></span>
</button>
<nav class="mobile-menu" data-mobile-menu>
  <!-- Menu items -->
</nav>
```

### Pattern 2: Bottom Navigation (Optional)
```liquid
{% render 'bottom-nav' %}
```

## Image Optimization

### Responsive Images
```liquid
<img
  src="image-480.jpg"
  srcset="image-480.jpg 480w, image-768.jpg 768w, image-1024.jpg 1024w"
  sizes="(max-width: 480px) 100vw, 50vw"
  alt="Description"
  loading="lazy"
  width="1200"
  height="800"
/>
```

### Image Formats
- WebP for modern browsers
- JPEG fallback
- Max dimensions: 2560px
- Target file sizes: < 100KB

## Testing Mobile Performance

### Tools
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools

### Metrics to Monitor
```javascript
// Core Web Vitals
LCP - 2.5s target
INP - 200ms target
CLS - 0.1 target
FCP - 1.8s target
TTL - 3s target
```

## Common Issues & Solutions

### Issue: High LCP
**Solution**: Preload critical images, optimize server response

### Issue: High INP
**Solution**: Debounce handlers, use event delegation

### Issue: High CLS
**Solution**: Add image dimensions, avoid dynamic content shifts

## Mobile Testing Checklist

- [ ] Test on actual mobile devices
- [ ] Test on 4G/3G connections
- [ ] Test touch interactions
- [ ] Verify landscape orientation
- [ ] Test with slow rendering (Chrome DevTools)
- [ ] Check accessibility (WCAG 2.1)
- [ ] Verify all interactive elements are tappable
