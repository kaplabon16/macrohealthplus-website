import { clientLogos } from '../../data/clientLogos';

export default function ClientLogoMarquee() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="client-logo-shell">
      <div className="client-logo-fade client-logo-fade-left" />
      <div className="client-logo-fade client-logo-fade-right" />
      <div className="client-logo-track" aria-label="MacroHealthPlus client logos">
        {marqueeLogos.map((logo, index) => (
          <article className="client-logo-card" key={`${logo.clientName}-${index}`}>
            <img src={logo.logoPath} alt={logo.altText} loading="lazy" decoding="async" />
            <span>{logo.clientName}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
