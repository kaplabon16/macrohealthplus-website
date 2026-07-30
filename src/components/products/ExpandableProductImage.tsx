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
};

export default function ExpandableProductImage({
  src,
  alt,
  eager = false,
  frameClassName = '',
  imageClassName = '',
  objectPosition = 'center center',
}: ExpandableProductImageProps) {
  const mediaId = useId().replace(/:/g, '');
  const [mounted, setMounted] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const overlays = (
    <>
      <AnimatePresence>
        {hovered && canHover && !open ? (
          <motion.div
            className="product-media-hover-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <motion.img
              src={src}
              alt=""
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

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
              <button type="button" className="product-media-close" onClick={() => setOpen(false)} aria-label="Close enlarged image" title="Close">
                <X aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  return (
    <>
      <motion.button
        type="button"
        className={`product-media-trigger ${frameClassName}`}
        layoutId={`product-media-${mediaId}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          setHovered(false);
          setOpen(true);
        }}
        aria-label={`Enlarge ${alt}`}
        title="Enlarge image"
      >
        <img
          className={imageClassName}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ objectPosition }}
        />
        <span className="product-media-expand" aria-hidden="true"><Maximize2 /></span>
      </motion.button>
      {mounted ? createPortal(overlays, document.body) : null}
    </>
  );
}
