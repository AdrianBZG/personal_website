import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8 justify">
        <h2 className="self-center text-3xl font-bold">Contact / Advising</h2>
        <p>Besides research, I am an enthusiastic advisor and educator (primarily for machine learning, but also in other areas of computer science / software engineering). I have found that advising / teaching others is a effective way to help me fully understand concepts and extend my professional network.</p>
        <p>I have been extremely lucky to supervise the project work for a handful of students, outlined below. Most of these students have landed prominent job positions and found the experience of working with me enlighting.</p>
        <p>If you are interested in working together on a project (Bachelor's/Master's thesis) or collaboration, please make clear in your email the following points so that we can have an effective communication:</p>
        <ul className="mx-10 list-disc">
          <li>What would the proposed project/collaboration concern?</li>
          <li>Why are you interested in conducting such project/collaboration?</li>
          <li>Why do you think this project is aligned with my skills?</li>
        </ul>
        <p>It is perhaps useful to check <u><a href="https://scholar.google.com/citations?user=lrOLKgQAAAAJ" target="_blank" className="text-stone-800">my publications page</a></u> and <u><a href="https://github.com/AdrianBZG" target="_blank" className="text-stone-800">GitHub profile</a></u> while drafting your email.</p>
        <p>You can contact me by email on <strong className="text-stone-800">abazaga903 (at) gmail (dot) com</strong>. Please replace (at) by @ and (dot) by .</p>
        <p>In case we agree on a collaboration, it is likely that I won't be able to contribute by writing or checking code given my daily responsabilities. I'd be able to participate in meetings, steer the project, and co-write papers.</p>
      </div>

      <div className="flex flex-col gap-y-8 mt-10 justify">
        <h2 className="self-center text-3xl font-bold">Supervised Projects</h2>
        <ul className="mx-10 list-disc">
        <li>Megha Jain (Outreachy 2021) - Migration of natural language query translation tool to OpenNMT 2.0</li>
        <li>John Mendez (Outreachy 2020) - InterMine Data Browser v2: a tool for exploring semi-homogeneous biological datasets</li>
        <li>Akshat Bhargava (Google Summer of Code 2019) - Biological data visualization tools for BlueGenes</li>
        </ul>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
