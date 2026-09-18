import { type CSSProperties, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type ZoomableImageProps = {
  src: string;
  alt?: string;
  style?: CSSProperties;
  className?: string;
  wrapperStyle?: CSSProperties;
};

export function ZoomableImage({
  src,
  alt = '',
  style,
  className,
  wrapperStyle,
}: ZoomableImageProps) {
  const [zoomed, setZoomed] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!zoomed) return;

    const resolveTarget = () => {
      setPortalTarget((document.fullscreenElement as HTMLElement | null) ?? document.body);
    };
    resolveTarget();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setZoomed(false);
      }
    };

    document.addEventListener('fullscreenchange', resolveTarget);
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('fullscreenchange', resolveTarget);
      document.removeEventListener('keydown', onKey, true);
    };
  }, [zoomed]);

  const target =
    portalTarget ??
    (typeof document !== 'undefined'
      ? ((document.fullscreenElement as HTMLElement | null) ?? document.body)
      : null);

  return (
    <>
      <button
        type="button"
        data-osd-interactive=""
        onClick={(e) => {
          e.stopPropagation();
          setZoomed(true);
        }}
        className={className}
        style={{
          padding: 0,
          margin: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'zoom-in',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          minWidth: 0,
          minHeight: 0,
          overflow: 'hidden',
          lineHeight: 0,
          ...wrapperStyle,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            flexShrink: 0,
            ...style,
          }}
        />
      </button>
      {zoomed &&
        target &&
        createPortal(
          <button
            type="button"
            data-osd-interactive=""
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              border: 'none',
              padding: '24px',
              width: '100vw',
              height: '100vh',
              animation: 'osd-fade-in 180ms ease-out',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                maxWidth: '96vw',
                maxHeight: '94vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 10,
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.7)',
                userSelect: 'none',
              }}
            />
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: 24,
                right: 28,
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              ✕
            </span>
          </button>,
          target,
        )}
    </>
  );
}
