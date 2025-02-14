import React from 'react';
import { render, screen } from '@testing-library/react';
import BibleVerseDisplay from './BibleVerseDisplay';

jest.mock('../services/bibleService', () => ({
  fetchBibleVerse: jest.fn(() => Promise.resolve('For God so loved the world...')),
}));

describe('BibleVerseDisplay', () => {
  it('renders the Bible verse', async () => {
    render(<BibleVerseDisplay />);
    const verseElement = await screen.findByText(/For God so loved the world.../i);
    expect(verseElement).toBeInTheDocument();
  });
});
