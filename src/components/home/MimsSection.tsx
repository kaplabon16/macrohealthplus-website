import Section from '../layout/Section';
import Button from '../ui/Button';

export default function MimsSection() {
  return (
    <>
      <Section
        title="MIMS integrated prescribing"
        intro="MIMS integration notifies drug-to-drug, drug-to-allergy, and drug-to-pregnancy interactions, to help make better decisions."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1fr]">
          <img className="dark-image w-full rounded-[1.5rem] object-contain" src="/assets/macrohealthplus/homepage/homepage-mims_integrate_img.eee627e4f5eb6b202b82.png" alt="MIMS integrated prescribing" loading="lazy" />
          <div>
            <h2 className="text-3xl font-semibold text-white">Get Updated Drug information in details.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Get an international standard and updated version of drug Information from MIMS every month.
            </p>
            <div className="mt-7">
              <Button href="/request-demo" icon>Request a Demo Today</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
