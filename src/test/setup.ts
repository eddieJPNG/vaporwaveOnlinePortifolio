import '@testing-library/jest-dom/vitest';

// Mock IntersectionObserver
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock PerformanceObserver
class MockPerformanceObserver {
  callback: PerformanceObserverCallback;
  options?: PerformanceObserverInit;

  constructor(callback: PerformanceObserverCallback, options?: PerformanceObserverInit) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  takeRecords() {
    return [];
  }
}

globalThis.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver;

// Mock HTMLDialogElement.showModal and close
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();
