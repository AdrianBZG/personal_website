import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {profileImageSrc, name, description, actions} = heroData;

  return (
    <Section className="hero-bg-css" sectionId={SectionId.Intro}>
      <div className="relative flex h-full w-full items-center justify">
        <div className="z-10 max-w-screen-lg px-4">
          <div className="flex flex-col items-center gap-y-4 rounded-3xl bg-gray-800/40 p-4 text-center shadow-lg backdrop-blur-sm">
            <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
