import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { reportWebVitals } from './performance';

describe('reportWebVitals', () => {
  let originalWindow: typeof globalThis.window;

  beforeEach(() => {
    vi.restoreAllMocks();
    originalWindow = globalThis.window;
  });

  afterEach(() => {
    globalThis.window = originalWindow;
  });

  it('does nothing when window is undefined', () => {
    // @ts-expect-error - Testing SSR environment
    delete globalThis.window;

    const callback = vi.fn();
    reportWebVitals(callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it('does nothing when PerformanceObserver is not supported', () => {
    const originalObserver = window.PerformanceObserver;
    // @ts-expect-error - Testing unsupported environment
    delete window.PerformanceObserver;

    const callback = vi.fn();
    reportWebVitals(callback);

    expect(callback).not.toHaveBeenCalled();
    window.PerformanceObserver = originalObserver;
  });

  it('does not throw when PerformanceObserver throws', () => {
    vi.spyOn(window, 'PerformanceObserver').mockImplementation(() => {
      throw new Error('Not supported');
    });

    expect(() => {
      reportWebVitals();
    }).not.toThrow();
  });

  describe('observer setup', () => {
    it('creates observers for LCP, CLS, and FCP', () => {
      const observeMock = vi.fn();
      vi.spyOn(window, 'PerformanceObserver').mockImplementation(() => ({
        observe: observeMock,
        disconnect: vi.fn(),
        unobserve: vi.fn(),
        takeRecords: vi.fn(() => []),
      }));

      reportWebVitals();

      expect(observeMock).toHaveBeenCalledWith({
        type: 'largest-contentful-paint',
        buffered: true,
      });
      expect(observeMock).toHaveBeenCalledWith({
        type: 'layout-shift',
        buffered: true,
      });
      expect(observeMock).toHaveBeenCalledWith({
        type: 'paint',
        buffered: true,
      });
    });
  });

  describe('sendToAnalytics', () => {
    it('does not throw when gtag is not defined', () => {
      const originalGtag = window.gtag;
      // @ts-expect-error - Removing gtag for test
      delete window.gtag;

      expect(() => reportWebVitals()).not.toThrow();
      window.gtag = originalGtag;
    });
  });

  describe('getRating logic', () => {
    it('rates LCP metrics via observer callback', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      expect(callbacks.length).toBe(3);

      const lcpCallback = callbacks[0];
      const lcpList = {
        getEntries: () => [{ loadTime: 1800, renderTime: 1600, startTime: 1800 }],
      } as PerformanceObserverEntryList;
      lcpCallback(lcpList, {} as PerformanceObserver);

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'LCP',
          value: 1800,
          rating: 'good',
        })
      );
    });

    it('rates LCP as needs-improvement for mid-range values', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[0](
        {
          getEntries: () => [{ loadTime: 3000, renderTime: 2800, startTime: 3000 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'LCP', rating: 'needs-improvement' })
      );
    });

    it('rates LCP as poor for high values', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[0](
        {
          getEntries: () => [{ loadTime: 5000, renderTime: 4800, startTime: 5000 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'LCP', rating: 'poor' })
      );
    });

    it('rates CLS correctly', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[1](
        {
          getEntries: () => [{ hadRecentInput: false, value: 0.05 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'CLS', rating: 'good', value: 0.05 })
      );
    });

    it('skips entries with hadRecentInput for CLS', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[1](
        {
          getEntries: () => [{ hadRecentInput: true, value: 0.5 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(expect.objectContaining({ name: 'CLS', value: 0 }));
    });

    it('rates CLS as needs-improvement', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[1](
        {
          getEntries: () => [{ hadRecentInput: false, value: 0.2 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'CLS', rating: 'needs-improvement' })
      );
    });

    it('rates CLS as poor', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[1](
        {
          getEntries: () => [{ hadRecentInput: false, value: 0.3 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'CLS', rating: 'poor' })
      );
    });

    it('rates FCP correctly', () => {
      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      const onMetric = vi.fn();
      reportWebVitals(onMetric);

      callbacks[2](
        {
          getEntries: () => [{ startTime: 1200 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(onMetric).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'FCP', value: 1200, rating: 'good' })
      );
    });

    it('calls sendToAnalytics when gtag is defined', () => {
      const mockGtag = vi.fn();
      window.gtag = mockGtag;

      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      reportWebVitals();

      callbacks[0](
        {
          getEntries: () => [{ loadTime: 1000, renderTime: 800, startTime: 1000 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        'LCP',
        expect.objectContaining({
          event_category: 'Web Vitals',
          non_interaction: true,
        })
      );

      window.gtag = undefined;
    });

    it('sends CLS value multiplied by 1000', () => {
      const mockGtag = vi.fn();
      window.gtag = mockGtag;

      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      reportWebVitals();

      callbacks[1](
        {
          getEntries: () => [{ hadRecentInput: false, value: 0.05 }],
        } as PerformanceObserverEntryList,
        {} as PerformanceObserver
      );

      expect(mockGtag).toHaveBeenCalledWith('event', 'CLS', expect.objectContaining({ value: 50 }));

      window.gtag = undefined;
    });

    it('does not send to analytics when gtag is not defined', () => {
      const originalGtag = window.gtag;
      // @ts-expect-error - Removing gtag for test
      delete window.gtag;

      const callbacks: PerformanceObserverCallback[] = [];
      vi.spyOn(window, 'PerformanceObserver').mockImplementation((cb) => {
        callbacks.push(cb as PerformanceObserverCallback);
        return {
          observe: vi.fn(),
          disconnect: vi.fn(),
          unobserve: vi.fn(),
          takeRecords: vi.fn(() => []),
        };
      });

      expect(() => {
        reportWebVitals();
        callbacks[0](
          {
            getEntries: () => [{ loadTime: 1000, renderTime: 800, startTime: 1000 }],
          } as PerformanceObserverEntryList,
          {} as PerformanceObserver
        );
      }).not.toThrow();

      window.gtag = originalGtag;
    });
  });
});
