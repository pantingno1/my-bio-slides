import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ZoomableImage } from './zoomable-image.tsx';

describe('ZoomableImage', () => {
  it('renders trigger button and image correctly without portal on initial render', () => {
    const html = renderToString(
      React.createElement(ZoomableImage, {
        src: '/test-img.jpg',
        alt: 'Test Image',
      }),
    );

    expect(html).toContain('src="/test-img.jpg"');
    expect(html).toContain('alt="Test Image"');
    expect(html).toContain('data-osd-interactive=""');
    expect(html).toContain('cursor:zoom-in');
    // Portal overlay with zoom-out should not be rendered initially
    expect(html).not.toContain('cursor:zoom-out');
  });

  it('passes wrapperStyle and style props to elements', () => {
    const html = renderToString(
      React.createElement(ZoomableImage, {
        src: '/test-img.jpg',
        style: { objectFit: 'contain' },
        wrapperStyle: { maxWidth: '100%' },
      }),
    );

    expect(html).toContain('object-fit:contain');
    expect(html).toContain('max-width:100%');
  });
});
