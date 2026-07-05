import { routes } from '../../utils/routes';
import Section from '../layout/Section';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white">Get your Free DEMO Today!</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Simplify the clinical operations in the most effective way with the Health Management Software.</p>
        </div>
        <Button href={routes.requestDemo} icon>Request a Demo</Button>
      </div>
    </Section>
  );
}
