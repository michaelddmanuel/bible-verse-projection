import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_SCRIPTURE_API_KEY;
const BASE_URL = 'https://api.scripture.api.bible/v1/bibles';
const BIBLE_ID = 'de4e12af7f28f599-02'; // Example Bible ID for KJV

export const fetchBibleVerse = async (): Promise<string> => {
  try {
    const response = await axios.get(`${BASE_URL}/${BIBLE_ID}/verses`, {
      headers: {
        'api-key': API_KEY,
      },
    });
    // Extract the verse text from the response
    const verseText = response.data.data[0].content;
    return verseText;
  } catch (error) {
    console.error('Error fetching Bible verse:', error);
    return 'Error fetching verse.';
  }
};
