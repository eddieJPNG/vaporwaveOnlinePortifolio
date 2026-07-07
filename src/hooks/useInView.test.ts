import { render, renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useInView } from './useInView';
import { createElement } from 'react';

function TestComponent(props: { options?: Parameters<typeof useInView>[0] }) {
  const { ref, isInView } = useInView(props.options);
  return createElement(
    'div',
    { ref, 'data-testid': 'target', 'data-inview': isInView },
    isInView ? 'visible' : 'hidden'
  );
}

describe('useInView', () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let intersectionCallback: IntersectionObserverCallback | null = null;
  let originalIO: typeof IntersectionObserver;

  beforeEach(() => {
    originalIO = globalThis.IntersectionObserver;
    mockObserve = vi.fn();
    mockDisconnect = vi.fn();
    mockUnobserve = vi.fn();
    intersectionCallback = null;

    globalThis.IntersectionObserver = vi.fn((callback) => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: mockUnobserve,
        root: null,
        rootMargin: '',
        thresholds: [],
        takeRecords: vi.fn(() => []),
      };
    }) as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIO;
  });

  it('returns ref and isInView as false initially', () => {
    const { result } = renderHook(() => useInView());
    expect(result.current.ref).toBeDefined();
    expect(result.current.isInView).toBe(false);
  });

  it('returns a ref object', () => {
    const { result } = renderHook(() => useInView());
    expect(result.current.ref).toHaveProperty('current');
  });

  it('accepts custom options', () => {
    const { result } = renderHook(() => useInView({ threshold: 0.5, rootMargin: '10px' }));
    expect(result.current.ref).toBeDefined();
    expect(result.current.isInView).toBe(false);
  });

  it('returns false for isInView initially with triggerOnce=false', () => {
    const { result } = renderHook(() => useInView({ triggerOnce: false }));
    expect(result.current.isInView).toBe(false);
  });

  it('creates observer and observes element on mount', () => {
    render(createElement(TestComponent));
    expect(mockObserve).toHaveBeenCalled();
  });

  it('sets isInView to true when element intersects (triggerOnce=true)', () => {
    const result = render(createElement(TestComponent, { options: { triggerOnce: true } }));

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.getByTestId('target').textContent).toBe('visible');
  });

  it('unobserves element after intersection when triggerOnce=true', () => {
    const result = render(createElement(TestComponent, { options: { triggerOnce: true } }));
    const element = result.getByTestId('target');

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(mockUnobserve).toHaveBeenCalledWith(element);
  });

  it('sets isInView to true then false when element leaves viewport (triggerOnce=false)', () => {
    const result = render(createElement(TestComponent, { options: { triggerOnce: false } }));

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.getByTestId('target').textContent).toBe('visible');

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.getByTestId('target').textContent).toBe('hidden');
  });

  it('does not unobserve when triggerOnce=false and element intersects', () => {
    render(createElement(TestComponent, { options: { triggerOnce: false } }));

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(mockUnobserve).not.toHaveBeenCalled();
  });

  it('does not update isInView when not intersecting and triggerOnce=true', () => {
    const result = render(createElement(TestComponent, { options: { triggerOnce: true } }));

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.getByTestId('target').textContent).toBe('hidden');
  });

  it('disconnects observer on unmount', () => {
    const { unmount } = render(createElement(TestComponent));
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('passes threshold and rootMargin to IntersectionObserver', () => {
    render(createElement(TestComponent, { options: { threshold: 0.5, rootMargin: '20px' } }));

    expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
      threshold: 0.5,
      rootMargin: '20px',
    });
  });
});
