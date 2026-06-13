/**
 * Core Web Vitals Monitoring Script
 * Tracks LCP, INP, CLS for your Shopify theme
 * Optional: Send data to analytics
 */

if ('web-vital' in window || 'PerformanceObserver' in window) {
  (function() {
    // Store metrics
    const metrics = {};

    // LCP - Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            metrics.lcp = entry.renderTime || entry.loadTime;
            console.log('📊 LCP:', metrics.lcp + 'ms', metrics.lcp < 2500 ? '✅' : '⚠️');
          });
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.log('LCP monitoring not available');
      }
    }

    // CLS - Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              metrics.cls = clsValue;
              console.log('📊 CLS:', metrics.cls.toFixed(3), clsValue < 0.1 ? '✅' : '⚠️');
            }
          });
        });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.log('CLS monitoring not available');
      }
    }

    // First Input Delay / INP - Interaction to Next Paint
    if ('PerformanceObserver' in window) {
      try {
        let maxINP = 0;
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.processingDuration > maxINP) {
              maxINP = entry.processingDuration;
              metrics.inp = entry.duration;
              console.log('📊 INP:', entry.duration.toFixed(0) + 'ms', entry.duration < 200 ? '✅' : '⚠️');
            }
          });
        });
        observer.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.log('INP monitoring not available');
      }
    }

    // Expose metrics for debugging
    window.RemixLiquidMetrics = metrics;
    console.log('%c REMIX_LIQUID Performance Metrics', 'color: #4CAF50; font-weight: bold;');
    console.log('Access with: window.RemixLiquidMetrics');
  })();
}
