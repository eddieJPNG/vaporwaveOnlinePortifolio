import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useScrollSpy } from './useScrollSpy';

describe('useScrollSpy', () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let intersectionCallback: IntersectionObserverCallback | null = null;

  beforeEach(() => {
    mockObserve = vi.fn();
    mockDisconnect = vi.fn();
    intersectionCallback = null;

    vi.spyOn(globalThis, 'IntersectionObserver').mockImplementation((callback) => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
        root: null,
        rootMargin: '',
        scrollMargin: '',
        thresholds: [],
        takeRecords: vi.fn(() => []),
      };
    });

    vi.spyOn(document, 'getElementById').mockImplementation((id) => {
      return { id, getBoundingClientRect: vi.fn() } as unknown as HTMLElement;
    });
  });

  it('returns empty string initially', () => {
    const { result } = renderHook(() => useScrollSpy(['section1', 'section2']));
    expect(result.current).toBe('');
  });

  it('disconnects observer on unmount', () => {
    const { unmount } = renderHook(() => useScrollSpy(['section1']));
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('observes all provided IDs', () => {
    renderHook(() => useScrollSpy(['section1', 'section2', 'section3']));

    expect(mockObserve).toHaveBeenCalledTimes(3);
  });

  it('does not observe non-existent elements', () => {
    vi.spyOn(document, 'getElementById').mockImplementation(() => null);

    renderHook(() => useScrollSpy(['missing-section']));

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('sets activeId when section intersects', () => {
    const { result } = renderHook(() => useScrollSpy(['section1', 'section2']));

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: { id: 'section2' },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('section2');
  });

  it('updates activeId when different section intersects', () => {
    const { result } = renderHook(() => useScrollSpy(['section1', 'section2']));

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: { id: 'section1' },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('section1');

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: { id: 'section2' },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('section2');
  });

  it('does not update activeId when section is not intersecting', () => {
    const { result } = renderHook(() => useScrollSpy(['section1']));

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: false,
            target: { id: 'section1' },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('');
  });

  it('passes correct rootMargin with offset', () => {
    renderHook(() => useScrollSpy(['section1'], 150));

    expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
      rootMargin: '-150px 0px -50% 0px',
    });
  });

  it('uses default offset of 100', () => {
    renderHook(() => useScrollSpy(['section1']));

    expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
      rootMargin: '-100px 0px -50% 0px',
    });
  });
});
