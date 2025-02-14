import React from 'react';
import BibleVerseDisplay from './BibleVerseDisplay';

const ProjectionView: React.FC = () => {
  return (
    <div className="projection-view bg-black text-white h-full flex items-center justify-center">
      <BibleVerseDisplay />
    </div>
  );
};

export default ProjectionView;
