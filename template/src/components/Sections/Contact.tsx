import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-3xl font-bold">Contact</h2>
        <p className="prose-sm sm:prose-base lg:prose-lg justify">You can contact me by email on abazaga903 (at) gmail (dot) com - Please replace (at) by @ and (dot) by .</p>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
