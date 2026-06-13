# Performance Optimization Guide

## Core Web Vitals

### LCP (Largest Contentful Paint)
**Goal: < 2.5s**

- Preload critical fonts
- Optimize hero images
- Minimize CSS
- Remove render-blocking resources

### INP (Interaction to Next Paint)
**Goal: < 200ms**

- Debounce event listeners
- Use event delegation
- Break long tasks
- Avoid main thread blocking

### CLS (Cumulative Layout Shift)
**Goal: < 0.1**

- Set image dimensions
- Reserve space for ads
- Avoid inserting above content
- Use transform for animations

## Implementation Checklist

### Images
- [x] Responsive images (srcset)
- [x] Lazy loading
- [x] WebP format
- [x] Proper sizing

### CSS
- [x] Critical CSS inlining
- [x] Minification
- [x] Unused CSS removal
- [x] Mobile-first approach

### JavaScript
- [x] Debouncing
- [x] Event delegation
- [x] Defer non-critical scripts
- [x] Code splitting

### Fonts
- [x] System fonts (fallback)
- [x] Font preloading
- [x] Font subsetting
- [x] Font-display: swap

## Monitoring

### Tools
1. Google PageSpeed Insights
2. Lighthouse
3. WebPageTest
4. Chrome DevTools

### Metrics
```
FCP: First Contentful Paint
LCP: Largest Contentful Paint
TTL: Time to Largest Paint
INP: Interaction to Next Paint
CLS: Cumulative Layout Shift
FID: First Input Delay
```
