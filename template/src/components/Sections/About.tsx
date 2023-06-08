import classNames from 'classnames';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {description} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About} >
      <div className={classNames('grid grid-cols-1 gap-y-4 justify-center')}>
          <div className="flex flex-col gap-y-2 justify-center">
            <h2 className="text-3xl font-bold text-white">About me</h2>
            {description}
          </div>
       
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
