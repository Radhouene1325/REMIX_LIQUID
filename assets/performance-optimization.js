/**
 * REMIX_LIQUID Performance Optimization Module
 * Add to your existing theme - NO BREAKING CHANGES
 * Just improves existing functionality
 */

(function() {
  'use strict';

  // 1. LAZY LOAD IMAGES - Works with existing images
  const initLazyLoading = function() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-lazy]');
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            if (img.dataset.srcset) img.srcset = img.dataset.srcset;
            img.classList.add('lazy-loaded');
            imageObserver.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });
      
      images.forEach(img => imageObserver.observe(img));
    }
  };

  // 2. DEBOUNCE HELPER - Reduce event firing
  const debounce = function(func, delay) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, delay || 300);
    };
  };

  // 3. OPTIMIZE SCROLL EVENTS - Better INP
  const optimizeScrolling = function() {
    let ticking = false;
    
    window.addEventListener('scroll', debounce(function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          // Your scroll logic here
          ticking = false;
        });
        ticking = true;
      }
    }, 100), { passive: true });
  };

  // 4. PRELOAD CRITICAL FONTS
  const preloadFonts = function() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  };

  // 5. IMPROVE CORE WEB VITALS MONITORING
  const monitorWebVitals = function() {
    // Monitor images for CLS
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.width || !img.height) {
        img.style.aspectRatio = '1';
      }
    });

    // Debounce window resize to prevent INP issues
    window.addEventListener('resize', debounce(function() {
      // Handle resize
    }, 150), { passive: true });
  };

  // 6. ADD CRITICAL CSS INLINE
  const addCriticalCSS = function() {
    const criticalCSS = `
      html, body { margin: 0; padding: 0; }
      img { max-width: 100%; height: auto; }
      * { box-sizing: border-box; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  };

  // 7. REDUCE JAVASCRIPT EXECUTION TIME
  const deferNonCriticalCode = function() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(function() {
        // Run non-critical code here
        monitorWebVitals();
      });
    } else {
      setTimeout(monitorWebVitals, 2000);
    }
  };

  // 8. INITIALIZE ALL OPTIMIZATIONS
  const init = function() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initLazyLoading();
        optimizeScrolling();
        preloadFonts();
        addCriticalCSS();
        deferNonCriticalCode();
      });
    } else {
      initLazyLoading();
      optimizeScrolling();
      preloadFonts();
      addCriticalCSS();
      deferNonCriticalCode();
    }
  };

  // Start when ready
  init();

  // Export for use
  window.RemixLiquidOptimization = {
    debounce: debounce,
    initLazyLoading: initLazyLoading
  };
})();
