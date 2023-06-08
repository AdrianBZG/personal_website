import {FC, memo} from 'react';

import {researchItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import ResearchSection from './ResearchSection'
import ResearchTimelineItem from './Resume/ResearchTimelineItem'

const Research: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Research}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-3xl font-bold text-white">Research / Publications</h2>
        <ResearchSection>
          {researchItems.map((item, index) => (
            <ResearchTimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResearchSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
