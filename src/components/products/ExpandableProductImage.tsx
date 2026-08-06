'use client';

import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

type ExpandableProductImageProps = {
  src: string;
  alt: string;
  eager?: boolean;
  frameClassName?: string;
  imageClassName?: string;
  objectPosition?: string;
  deviceMockup?: boolean;
};

export default function ExpandableProductImage({
  src,
  alt,
  eager = false,
  frameClassName = '',
  imageClassName = '',
  objectPosition = 'center center',
  deviceMockup = false,
}: ExpandableProductImageProps) {
  const mediaId = useId().replace(/:/g, '');
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const scrollY = window.scrollY;
    const previousStyles = {
      overflow: body.style.overflow,
      overscrollBehavior: body.style.overscrollBehavior,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    body.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      body.style.overflow = previousStyles.overflow;
      body.style.overscrollBehavior = previousStyles.overscrollBehavior;
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.width = previousStyles.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const overlays = (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="product-media-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} enlarged view`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="product-media-lightbox-inner"
              layoutId={`product-media-${mediaId}`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={src} alt={alt} />
            </motion.div>
            <button type="button" className="product-media-close" onClick={() => setOpen(false)} aria-label="Close enlarged image" title="Close">
              <X aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  return (
    <>
      <motion.div
        className={`product-media-trigger ${frameClassName}`}
        layoutId={`product-media-${mediaId}`}
      >
        {deviceMockup ? (
          <span className="product-device-showcase">
            <span className="product-device-laptop">
              <span className="product-device-camera" aria-hidden="true" />
              <span className="product-device-laptop-screen">
                <img
                  className={imageClassName}
                  src={src}
                  alt={alt}
                  loading={eager ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  style={{ objectPosition }}
                />
              </span>
              <span className="product-device-laptop-base" aria-hidden="true" />
            </span>
            <span className="product-device-phone" aria-hidden="true">
              <span className="product-device-phone-speaker" />
              <img src={src} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" draggable={false} style={{ objectPosition }} />
            </span>
          </span>
        ) : (
          <img
            className={imageClassName}
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
            style={{ objectPosition }}
          />
        )}
        <button
          type="button"
          className="product-media-expand"
          onClick={() => setOpen(true)}
          aria-label={`View ${alt} fullscreen`}
          title="View fullscreen"
        >
          <Maximize2 aria-hidden="true" />
        </button>
      </motion.div>
      {mounted ? createPortal(overlays, document.body) : null}
    </>
  );
}
