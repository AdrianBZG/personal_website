import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hero_bg.png';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  Contact,
  Hero,
  HomepageMeta,
  ResearchItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Home | Adrián Bazaga',
  description: "Adrián Bazaga Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Intro: 'Intro',
  About: 'about',
  Research: 'research',
  Resume: 'resume',
  Contact: 'contact'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  profileImageSrc: profilepic,
  name: `Hi, I'm Adrián Bazaga.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      Welcome to my website! 
      </p>   
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      I'm a <strong className="text-stone-100">Machine Learning Engineer</strong> based in London, presently at <strong className="text-stone-100">Panakeia</strong>, developing ML systems for cancer diagnostics via medical imagery.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      I'm finishing a PhD in Deep Learning (Natural Language Processing) from <strong className="text-stone-200"><a href="https://www.cam.ac.uk/" target="_blank">University of Cambridge</a></strong>, advised by <strong className="text-stone-100"><a href="https://www.damtp.cam.ac.uk/person/gm263" target="_blank">Prof. Gos Micklem</a></strong> and <strong className="text-stone-100"><a href="https://www.cst.cam.ac.uk/people/pl219" target="_blank">Prof. Pietro Liò</a></strong>.
      </p> 
    </>
  ),
  actions: [
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      My research focuses on devising architectures for NLP systems, with emphasis on multi-modality and Large Language Models. For my engineering work, I'm dedicated to designing software systems for streamlining research, optimizing and scaling ML pipelines. I'm proficient in translating user requirements to software, and my diverse experience enables me to thrive in cross-disciplinary environments.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      Beyond ML, I'm passionate about cybersecurity, specifically in innovating anti DDoS through deep learning. In 2021, I founded a cybersecurity company, <a href="https://www.packetwall.org/" target="_blank"><strong className="text-stone-200">PacketWall</strong></a>, as a hobby. As CTO, I integrated deep learning and networking into innovative solutions, growing a client base to about 100 within a year.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      Recently, I've been exploring how advancements in natural language processing, specifically generative models, can enhance and support modern education systems and government. If you are interested in discussing about this, please contact me.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg justify">
      In my free time, you can catch me training in the gym, enjoying nature, or tasting new dishes.
      </p>      
    </>
  ),
  aboutItems: [],
};

/**
 * Research section
 */
export const researchItems: ResearchItem[] = [
  {
    date: '2022',
    location: 'Database (Oxford)',
    title: 'HumanMine: advanced data searching, analysis and cross-species comparison',
  },
  {
    date: '2021',
    location: 'Nature Scientific Reports',
    title: 'Translating synthetic natural language to database queries with a polyglot deep learning framework',
  },
  {
    date: '2020',
    location: 'Nature Scientific Reports',
    title: 'Genome-wide investigation of gene-cancer associations for the prediction of novel therapeutic targets in oncology',
  },
  {
    date: '2019',
    location: 'Neuromuscular Disorders',
    title: 'Automated diagnosis of collagen VI related muscular dystrophies using advanced image analysis and machine learning',
  },
  {
    date: '2019',
    location: 'Applied Soft Computing',
    title: 'A Convolutional Neural Network for the Automatic Diagnosis of Collagen VI related Muscular Dystrophies',
  },
  {
    date: '2019',
    location: 'International Workshop on Self-Organizing Maps',
    title: 'Network Community Cluster-Based Analysis for the Identification of Potential Leukemia Drug Targets',
  },
  {
    date: '2019',
    location: 'Partnership for Advanced Computing in Europe',
    title: 'Optimization of Computationally and I/O Intense Patterns in Electronic Structure and Machine Learning Algorithms',
  },
  {
    date: '2018',
    location: 'Bioinformatics (Oxford)',
    title: 'BIOLITMAP: a web-based geolocated, temporal and thematic visualization of the evolution of bioinformatics publications',
  },
  {
    date: '2018',
    location: 'arXiv',
    title: 'Performance Evaluation of an Algorithm-based Asynchronous Checkpoint-Restart Fault Tolerant Application Using Mixed MPI/GPI-2',
  }
];

/**
 * Education, experience section
 */
export const education: TimelineItem[] = [
  {
    date: '2019 - 2023',
    location: 'University of Cambridge, Cambridge, United Kingdom',
    title: 'Doctor of Philosophy (PhD), Deep Learning in Natural Language Processing',
    content: <p>"Multi-Modal Deep Learning-based Information Retrieval Systems for Language to Query Translation". Advised by Gos Micklem and Pietro Liò. Senior Scholarship Award by Fitzwilliam College</p>,
  },
  {
    date: '2017 - 2019',
    location: 'Universitat Politècnica de Catalunya (UPC), Barcelona, Spain',
    title: 'Master of Science, Machine Learning',
    content: <p>Finished with Honours. Thesis carried out at University of Cambridge.</p>,
  },
  {
    date: '2013 - 2017',
    location: 'University of La Laguna (ULL), Tenerife, Spain',
    title: 'Bachelor of Engineering, Computer Science',
    content: <p>Finished with Honours</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Panakeia Technologies, London, United Kingdom',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        
      </p>
    )
  },
  {
    date: 'November 2021 - March 2023',
    location: 'Packetwall Solutions Ltd, Cambridge, United Kingdom',
    title: 'Chief Technology Officer & Founder',
    content: (
      <p>
        
      </p>
    )
  },
  {
    date: 'February 2019 - March 2022',
    location: 'Storm Therapeutics Ltd, Cambridge, United Kingdom',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        
      </p>
    )
  },
  {
    date: 'October 2018 - January 2019',
    location: 'Spanish National Research Council (CSIC), Barcelona, Spain',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        
      </p>
    )
  },
  {
    date: 'October 2017 - September 2019',
    location: 'Spanish National Supercomputing Center (BSC-CNS), Barcelona, Spain',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        
      </p>
    )
  }
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/adrianbzg'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/adrianbazaga/'},
];

/**
 * Contact section
 */
export const contactData: Contact = {
  description: (
    <>
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
    </>
  )
};