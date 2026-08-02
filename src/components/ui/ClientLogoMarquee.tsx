import { clientLogos } from '../../data/clientLogos';

export default function ClientLogoMarquee() {
  return (
    <div className="client-logo-shell">
      <div className="client-logo-fade client-logo-fade-left" />
      <div className="client-logo-fade client-logo-fade-right" />
      <div className="client-logo-track" aria-label="MacroHealthPlus client logos">
        {[0, 1].map((groupIndex) => (
          <div className="client-logo-group" aria-hidden={groupIndex === 1} key={groupIndex}>
            {clientLogos.map((logo) => (
              <article className="client-logo-card" key={`${groupIndex}-${logo.clientName}`}>
                <span className="client-logo-image">
                  <img src={logo.logoPath} alt={groupIndex === 0 ? logo.altText : ''} loading="eager" decoding="async" />
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
