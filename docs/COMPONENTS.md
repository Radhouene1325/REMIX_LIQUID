# Component Library

## Available Snippets

### 1. Image - Responsive (`image-responsive.liquid`)
Displays responsive images with lazy loading.

**Usage:**
```liquid
{% render 'image-responsive' with image: product.featured_image %}
```

**Parameters:**
- `image` - Image object
- `alt` - Alt text (optional)

---

### 2. Product Card (`product-card.liquid`)
Mobile-optimized product card component.

**Usage:**
```liquid
{% render 'product-card' with product: product %}
```

**Features:**
- Responsive grid layout
- Sale badge
- Color swatches
- Add to cart button
- Product rating

---

### 3. Header (`header.liquid`)
Sticky header with mobile navigation.

**Features:**
- Logo
- Desktop navigation (hidden on mobile)
- Search, account, cart buttons
- Hamburger menu (mobile)

---

### 4. Footer (`footer.liquid`)
Comprehensive footer component.

**Sections:**
- Shop info
- Quick links
- Contact info
- Social media links
- Copyright

---

## Creating New Components

### Template
```liquid
{% comment %}
  Component Name
  Usage: {% render 'component-name' with param: value %}
{% endcomment %}

<div class="component">
  <!-- Content -->
</div>

<style>
  .component {
    /* Styles */
  }
</style>

{% schema %}
{
  "name": "Component Name",
  "settings": []
}
{% endschema %}
```

## Best Practices

1. **Naming**: Use kebab-case (e.g., `product-card`)
2. **Documentation**: Include usage examples
3. **Responsiveness**: Mobile-first approach
4. **Accessibility**: ARIA labels, semantic HTML
5. **Performance**: Lazy loading, optimized images
