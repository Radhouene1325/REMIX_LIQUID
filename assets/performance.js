/**
 * Performance Optimization Module
 * Handles Core Web Vitals improvements
 */

const PerformanceOptimizer = (() => {
  'use strict';

  // Lazy Loading Images
  const initLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.srcset = img.dataset.srcset || '';
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  };

  // Debounce Helper
  const debounce = (func, delay = 300) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Optimize Scroll Events
  const optimizeScrollListeners = () => {
    let isScrolling = false;

    window.addEventListener('scroll', debounce(() => {
      isScrolling = true;
      // Your scroll logic here
      isScrolling = false;
    }, 100), { passive: true });
  };

  // Preload Critical Resources
  const preloadCriticalResources = () => {
    const criticalFonts = [
      { href: '/cdn/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossorigin: true }
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      Object.entries(font).forEach(([key, value]) => {
        if (key !== 'href') link.setAttribute(key, value);
        else link.href = value;
      });
      document.head.appendChild(link);
    });
  };

  // Monitor Core Web Vitals
  const monitorWebVitals = () => {
    if ('web-vital' in window) {
      const vitals = {};
      
      // LCP - Largest Contentful Paint
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          vitals.lcp = entry.renderTime || entry.loadTime;
          console.log('LCP:', vitals.lcp);
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  };

  // Optimize Font Loading
  const optimizeFonts = () => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }
  };

  // Initialize All Optimizations
  const init = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initLazyLoading();
        optimizeScrollListeners();
        optimizeFonts();
      });
    } else {
      initLazyLoading();
      optimizeScrollListeners();
      optimizeFonts();
    }
    
    preloadCriticalResources();
    monitorWebVitals();
  };

  return {
    init,
    debounce
  };
})();

// Start optimizations
PerformanceOptimizer.init();
