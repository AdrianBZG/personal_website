import {FC, memo} from 'react';

import {ResearchItem} from '../../../data/dataDef';

const ResearchItem: FC<{item: ResearchItem}> = memo(({item}) => {
  const {title, date, location} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none text-white">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none text-white">{date}</span>
        </div>
      </div>
    </div>
  );
});

ResearchItem.displayName = 'ResearchItem';
export default ResearchItem;
