import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-800 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Intro}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <span className="text-sm font-medium text-white">© 2023 Adrián Bazaga. Any and all views expressed here are my own and do not necessarily correspond to my employers or educators, neither past or present.</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
