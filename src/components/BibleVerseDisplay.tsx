import React, { useEffect, useState } from 'react';
import { fetchBibleVerse } from '../services/bibleService';

const BibleVerseDisplay: React.FC = () => {
  const [verse, setVerse] = useState<string>('');

  useEffect(() => {
    const getVerse = async () => {
      const fetchedVerse = await fetchBibleVerse();
      setVerse(fetchedVerse);
    };
    getVerse();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold">Bible Verse</h2>
      <p>{verse}</p>
    </div>
  );
};

export default BibleVerseDisplay;
