import { useRef, useState } from 'react';
import { clientLogos } from '../../data/clientLogos';

export default function ClientLogoMarquee() {
  const shellRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, moved: false, startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const finishDrag = (pointerId?: number) => {
    const shell = shellRef.current;
    if (shell && pointerId !== undefined && shell.hasPointerCapture(pointerId)) {
      shell.releasePointerCapture(pointerId);
    }
    dragState.current.active = false;
    setIsDragging(false);
  };

  return (
    <div
      className={`client-logo-shell${isDragging ? ' is-dragging' : ''}`}
      ref={shellRef}
      onDragStart={(event) => event.preventDefault()}
      onPointerDown={(event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        const shell = shellRef.current;
        if (!shell) return;

        dragState.current = {
          active: true,
          moved: false,
          startX: event.clientX,
          startScrollLeft: shell.scrollLeft,
        };
        shell.setPointerCapture(event.pointerId);
        setIsDragging(true);
      }}
      onPointerMove={(event) => {
        if (!dragState.current.active || event.pointerType !== 'mouse') return;
        const shell = shellRef.current;
        if (!shell) return;

        const distance = event.clientX - dragState.current.startX;
        if (Math.abs(distance) > 4) dragState.current.moved = true;
        shell.scrollLeft = dragState.current.startScrollLeft - distance;
      }}
      onPointerUp={(event) => finishDrag(event.pointerId)}
      onPointerCancel={(event) => finishDrag(event.pointerId)}
      onClickCapture={(event) => {
        if (!dragState.current.moved) return;
        event.preventDefault();
        event.stopPropagation();
        dragState.current.moved = false;
      }}
    >
      <div className="client-logo-fade client-logo-fade-left" />
      <div className="client-logo-fade client-logo-fade-right" />
      <div className="client-logo-track" aria-label="MacroHealthPlus client logos">
        {[0, 1].map((groupIndex) => (
          <div className="client-logo-group" aria-hidden={groupIndex === 1} key={groupIndex}>
            {clientLogos.map((logo) => (
              <article className="client-logo-card" key={`${groupIndex}-${logo.clientName}`}>
                <span className="client-logo-image">
                  <img src={logo.logoPath} alt={groupIndex === 0 ? logo.altText : ''} draggable={false} loading="eager" decoding="async" />
                </span>
                <span className="client-logo-name" title={logo.clientName}>{logo.clientName}</span>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
