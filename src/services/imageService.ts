import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const UNSPLASH_BASE_URL = 'https://api.unsplash.com/photos/random';

export const fetchRandomImage = async (): Promise<string> => {
  try {
    const response = await axios.get(UNSPLASH_BASE_URL, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: 'bible',
        orientation: 'landscape',
      },
    });
    return response.data.urls.full;
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return '';
  }
};
