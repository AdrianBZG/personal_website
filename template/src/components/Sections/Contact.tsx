import {FC, memo} from 'react';

import {contactData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
  const {description} = contactData;

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Contact}>
      {description}
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
