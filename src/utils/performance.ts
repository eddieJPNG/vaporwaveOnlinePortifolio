interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500],
  };

  const [good, poor] = thresholds[name] || [0, 0];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
};

const sendToAnalytics = (metric: Metric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
};

export const reportWebVitals = (onMetric?: (metric: Metric) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        renderTime: number;
        loadTime: number;
      };
      const value = lastEntry.loadTime || lastEntry.renderTime;
      const metric: Metric = {
        name: 'LCP',
        value,
        rating: getRating('LCP', value),
        delta: value,
        id: `lcp-${Date.now()}`,
      };
      onMetric?.(metric);
      sendToAnalytics(metric);
    });

    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry) => {
        if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as PerformanceEntry & { value?: number }).value || 0;
        }
      });
      const metric: Metric = {
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        delta: clsValue,
        id: `cls-${Date.now()}`,
      };
      onMetric?.(metric);
      sendToAnalytics(metric);
    });

    clsObserver.observe({ type: 'layout-shift', buffered: true });

    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const value = lastEntry.startTime;
      const metric: Metric = {
        name: 'FCP',
        value,
        rating: getRating('FCP', value),
        delta: value,
        id: `fcp-${Date.now()}`,
      };
      onMetric?.(metric);
      sendToAnalytics(metric);
    });

    fcpObserver.observe({ type: 'paint', buffered: true });
  } catch {
    // Performance API not supported
  }
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
