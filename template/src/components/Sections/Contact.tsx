import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold">Contact</h2>
        <p>You can contact me by email on adrian (at) bazaga (at) ai - Please replace (at) by @</p>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
