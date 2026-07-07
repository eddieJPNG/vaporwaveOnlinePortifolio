import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current[0]).toBe('initial');
  });

  it('returns value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('saved'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    expect(result.current[0]).toBe('saved');
  });

  it('updates localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(JSON.parse(localStorage.getItem('test-key')!)).toBe('updated');
  });

  it('supports function updater', () => {
    const { result } = renderHook(() => useLocalStorage('count', 0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });

  it('handles complex objects', () => {
    const { result } = renderHook(() => useLocalStorage('obj', { foo: 'bar' }));

    act(() => {
      result.current[1]({ foo: 'baz' });
    });

    expect(result.current[0]).toEqual({ foo: 'baz' });
  });

  it('handles invalid JSON in localStorage', () => {
    localStorage.setItem('test-key', 'invalid-json');

    const { result } = renderHook(() => useLocalStorage('test-key', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });

  it('handles localStorage quota exceeded', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = vi.fn(() => {
      throw new Error('QuotaExceededError');
    });

    act(() => {
      result.current[1]('updated');
    });

    // Value should still update in state even if localStorage fails
    expect(result.current[0]).toBe('updated');

    Storage.prototype.setItem = originalSetItem;
  });
});
