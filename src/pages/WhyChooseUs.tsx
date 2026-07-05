import { useEffect } from 'react';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

const workflowPoints = [
  'International standard integrated medical software to direct communication between patient-doctor in a secure platform',
  'Electronic Health Record system with minimal data entry.',
  'Incorporating World Class MIMS Drug database to protect doctors from error in a very busy practice.',
  'Automatically alert doctors/health professionals about life saving Drug interactions, Drug-Disease interactions, Drug-Allergy Interactions, Drug-Lactation alert, Drug-Pregnancy alert, Drug- Duplicate alert during preparing prescriptions.',
  'Advanced and effective patient screening facilities from booking to billing',
  'Including immunisation records from birth to end of life. Various Clinical resources for the clinicians.',
  'Any doctor can advise any patient remotely from anywhere in the world without the need for any paper or pencil just using a mobile phone.',
  'Various Patient education material first time in Bengali language',
  'Doctor’s Education from the Australian Clinician to enrich personalised education about Current international practice.',
];

const securityPoints = [
  {
    title: 'Cloud Integration',
    text: 'Protects from online security threats All communication is protected with 256 bit secure encryption and 24 hours data backup',
  },
  {
    title: 'Permitted Browser Feature',
    text: 'With this feature you can limit software usage for your employees to your user computers',
  },
  {
    title: 'Manage User Permission',
    text: 'All users such as Doctor, Nurse and Allied Health professional are assigned permissions to limit their access to data',
  },
  {
    title: 'Continuous Data Protection',
    text: 'All documents are stored with safety and security of google server or customised according to owner’s requirements. Database server and webserver are fully compliant with Global certification.',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    setPageMeta('Why Choose Us', 'MacroHealthPlus workflow, data safety, and security information.');
  }, []);

  return (
    <>
      <Section className="pt-36" title="Improve Your Workflow with MacroHealthPlus Practice Management Software">
        <ul className="max-w-4xl space-y-4 text-sm leading-7 text-slate-300">
          {workflowPoints.map((point) => (
            <li className="border-t border-white/10 pt-4" key={point}>{point}</li>
          ))}
        </ul>
      </Section>
      <Section title="Data Safety and Security">
        <div className="max-w-4xl space-y-8">
          {securityPoints.map((point) => (
            <section key={point.title}>
              <h2 className="text-xl font-semibold text-white">{point.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{point.text}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
