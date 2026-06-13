# REMIX_LIQUID Performance Optimization - Installation Guide

## 🚀 Quick Start

These optimizations are **designed to work with your existing theme** without breaking changes.

### Step 1: Add Performance JavaScript

1. Copy `assets/performance-optimization.js` to your theme assets folder
2. In your `layout/theme.liquid` (or main layout), add before closing `</body>`:

```liquid
{{ 'performance-optimization.js' | asset_url | script_tag }}
```

### Step 2: Add Performance CSS

1. Copy `assets/mobile-performance.css` to your theme assets folder
2. In your `layout/theme.liquid` `<head>`, add:

```liquid
{{ 'mobile-performance.css' | asset_url | stylesheet_tag }}
```

### Step 3: Add Lazy Loading to Images (Optional)

Where you render product images, update to use the lazy loading snippet:

```liquid
{% render 'image-lazy-loading' with image: product.featured_image %}
```

### Step 4: Add Mobile Navigation Optimization (Optional)

Include the mobile nav snippet in your header:

```liquid
{% render 'mobile-nav-optimization' %}
```

### Step 5: Add Web Vitals Monitoring (Optional)

To monitor your Core Web Vitals, add to layout:

```liquid
{{ 'web-vitals-monitoring.js' | asset_url | script_tag }}
```

Then open browser console to see metrics logged.

## 📊 What Gets Optimized

### Performance Improvements
- ✅ **LCP** (Largest Contentful Paint): < 2.5s
- ✅ **INP** (Interaction to Next Paint): < 200ms  
- ✅ **CLS** (Cumulative Layout Shift): < 0.1
- ✅ Lazy loading images
- ✅ Debounced scroll events
- ✅ Optimized animations
- ✅ Mobile-first responsive design

### Mobile Experience
- ✅ Touch-friendly buttons (44x44px)
- ✅ Fast scrolling (-webkit-overflow-scrolling)
- ✅ Proper font sizing (prevents zoom)
- ✅ Responsive grid layouts
- ✅ Hamburger menu support

## 🔧 Configuration

### Adjust Lazy Load Threshold

Edit `assets/performance-optimization.js`:

```javascript
const imageObserver = new IntersectionObserver(function(entries) {
  // ...
}, { rootMargin: '50px' });  // Change 50px threshold
```

### Customize Mobile Breakpoints

Edit `assets/mobile-performance.css`:

```css
/* Change tablet breakpoint */
@media (min-width: 641px) {
  /* Tablet styles */
}

/* Change desktop breakpoint */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

## 📈 Monitoring

Open your browser console and check:

```javascript
window.RemixLiquidMetrics
```

You'll see:
- `lcp`: Largest Contentful Paint (ms)
- `cls`: Cumulative Layout Shift (0-1)
- `inp`: Interaction to Next Paint (ms)

## 🧪 Testing

### Desktop
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Check Core Web Vitals scores

### Mobile
1. Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your Shopify store URL
3. View mobile metrics

### Slow Network Testing
1. DevTools → Network tab
2. Throttle to "Slow 4G"
3. Reload page
4. Monitor performance

## ✅ Checklist

- [ ] Added performance-optimization.js
- [ ] Added mobile-performance.css
- [ ] Updated product images with lazy loading (optional)
- [ ] Added mobile navigation (optional)
- [ ] Added web vitals monitoring (optional)
- [ ] Tested on mobile device
- [ ] Checked PageSpeed Insights
- [ ] Verified no conflicts with existing styles

## ❓ Troubleshooting

### CSS Conflicts

If mobile-performance.css conflicts with existing styles:
1. Comment out specific sections
2. Use CSS specificity to override
3. Adjust class names in your HTML

### Lazy Loading Not Working

Ensure images have `data-lazy` attribute:
```liquid
<img src="placeholder.jpg" data-src="actual.jpg" data-lazy>
```

### JavaScript Errors

Check browser console:
```javascript
window.RemixLiquidOptimization  // Should exist
window.RemixLiquidMetrics       // Should exist
```

## 🆘 Support

These optimizations don't modify your theme structure - they enhance it.
All files are self-contained and can be safely removed if needed.

## 📚 Resources

- [Shopify Theme Dev](https://shopify.dev/themes)
- [Core Web Vitals](https://web.dev/vitals/)
- [MDN: Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [PageSpeed Insights](https://pagespeed.web.dev/)
