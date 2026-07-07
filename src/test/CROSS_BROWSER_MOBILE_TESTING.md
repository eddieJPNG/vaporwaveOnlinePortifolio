# Cross-Browser and Mobile Testing Guide

## Overview

This document outlines the testing strategy for cross-browser and mobile compatibility for the Vaporwave Portfolio project.

## Browser Support Matrix

| Browser          | Desktop | Mobile | Status    |
| ---------------- | ------- | ------ | --------- |
| Chrome           | ✅      | ✅     | Primary   |
| Firefox          | ✅      | ✅     | Primary   |
| Safari           | ✅      | ✅     | Primary   |
| Edge             | ✅      | ✅     | Primary   |
| Samsung Internet | -       | ✅     | Secondary |
| Opera            | ✅      | ✅     | Secondary |

## Mobile Viewport Testing

### Required Viewports

| Device            | Width  | Height | Category      |
| ----------------- | ------ | ------ | ------------- |
| iPhone SE         | 375px  | 667px  | Small Mobile  |
| iPhone 12/13/14   | 390px  | 844px  | Mobile        |
| iPhone 14 Pro Max | 430px  | 932px  | Large Mobile  |
| iPad Mini         | 768px  | 1024px | Tablet        |
| iPad Air          | 820px  | 1180px | Tablet        |
| iPad Pro 12.9"    | 1024px | 1366px | Large Tablet  |
| Desktop           | 1280px | 720px  | Desktop       |
| Large Desktop     | 1920px | 1080px | Large Desktop |

### Breakpoint Testing

The application uses the following breakpoints (from SPEC.md):

- **320px**: Minimum supported width
- **768px**: Tablet breakpoint (menu hamburger appears)
- **1024px**: Desktop breakpoint
- **1440px**: Large desktop breakpoint

## Manual Testing Checklist

### Chrome (Desktop & Mobile)

- [ ] Page loads correctly
- [ ] All sections render properly
- [ ] Theme toggle works
- [ ] Navigation smooth scrolls
- [ ] Form validation works
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] External links open in new tabs

### Firefox (Desktop & Mobile)

- [ ] Page loads correctly
- [ ] All sections render properly
- [ ] Theme toggle works
- [ ] Navigation smooth scrolls
- [ ] Form validation works
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] External links open in new tabs

### Safari (Desktop & Mobile)

- [ ] Page loads correctly
- [ ] All sections render properly
- [ ] Theme toggle works
- [ ] Navigation smooth scrolls
- [ ] Form validation works
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] External links open in new tabs
- [ ] `-webkit-` prefixes work correctly

### Edge (Desktop)

- [ ] Page loads correctly
- [ ] All sections render properly
- [ ] Theme toggle works
- [ ] Navigation smooth scrolls
- [ ] Form validation works
- [ ] Animations are smooth

## Mobile-Specific Testing

### Touch Interactions

- [ ] Touch targets are at least 44x44px
- [ ] Swipe gestures work (if implemented)
- [ ] Pinch-to-zoom works
- [ ] Double-tap to zoom works
- [ ] Long press shows context menu

### Performance on Mobile

- [ ] First Contentful Paint < 1.5s on 3G
- [ ] Largest Contentful Paint < 2.5s on 3G
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms
- [ ] Time to Interactive < 3.5s on 3G

### Responsive Layout

- [ ] No horizontal scroll on any viewport
- [ ] Text is readable without zooming
- [ ] Images scale properly
- [ ] Buttons are easily tappable
- [ ] Form inputs are easily tappable
- [ ] Menu is accessible on mobile

## Automated Testing Tools

### Current Setup

- **Unit Tests**: Vitest + React Testing Library
- **Accessibility Tests**: jest-axe
- **Coverage**: @vitest/coverage-v8

### Recommended additions (Future)

- **E2E Testing**: Playwright (for cross-browser testing)
- **Visual Regression**: Percy or Chromatic
- **Performance Testing**: Lighthouse CI
- **Mobile Testing**: BrowserStack or Sauce Labs

## Testing Commands

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test -- --watch

# Run specific test file
npm run test -- src/test/accessibility.test.tsx

# Run tests matching pattern
npm run test -- --grep "Theme"
```

## Performance Budget

| Metric                    | Target  | Current        |
| ------------------------- | ------- | -------------- |
| Bundle Size (gzipped)     | < 200KB | To be measured |
| Lighthouse Performance    | > 90    | To be measured |
| Lighthouse Accessibility  | > 90    | To be measured |
| Lighthouse Best Practices | > 90    | To be measured |
| Lighthouse SEO            | > 90    | To be measured |

## Notes

1. **E2E Testing**: While marked as optional in SPEC.md, cross-browser testing is recommended before production deployment.

2. **Mobile Testing**: The application uses mobile-first design, so mobile testing is critical.

3. **Touch Targets**: All interactive elements should have minimum 44x44px touch targets for mobile accessibility.

4. **Performance**: Mobile performance is critical - optimize images, use lazy loading, and minimize JavaScript.

5. **Browser Support**: Focus on modern browsers (last 2 versions) as specified in the project requirements.

## References

- [SPEC.md - Phase 7](../../SPEC.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Mobile Web Testing Best Practices](https://developers.google.com/web/fundamentals/testing)
