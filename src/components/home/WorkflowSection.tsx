import Section from '../layout/Section';

const items = [
  {
    title: 'Business Consistency',
    text: 'To provide excellent services in the private sector or government facility, it is vital that you have a business management platform that helps you understand and meet your clients or patients’ needs. MacroHealthPlus focuses on your clinic/practice as a business, looking at patient acquisition, service provision and patient retention.',
  },
  { title: 'Central Management' },
  { title: 'Efficient Operations' },
];

const ecosystem = ['Patient', 'Doctors', 'Allied Healthcare Staff', 'Clinic', 'Hospitals', 'Pharmacy', 'Pharmaceutical Company', 'Insurance', 'Tele Medicine', 'Medical College', 'Technology Providers', 'Investor', 'Regulators', 'Government'];

export default function WorkflowSection() {
  return (
    <Section title="Improving the Efficiency, Accuracy, and Cost-effectiveness">
      <div className="space-y-10">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <section key={item.title}>
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              {item.text ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p> : null}
            </section>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Health Eco-System</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {ecosystem.map((item) => (
              <span className="rounded-full border border-white/12 px-4 py-2 text-sm text-slate-300" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
