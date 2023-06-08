import {FC, memo, PropsWithChildren} from 'react';

const ResearchSection: FC<PropsWithChildren<{}>> = memo(({children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-3 py-8 first:pt-0 last:pb-0  md:grid-cols-3">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResearchSection.displayName = 'ResearchSection';
export default ResearchSection;
