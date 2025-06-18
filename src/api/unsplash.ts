import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
  },
});

export async function getRandomPhotos(count = 8) {
  try {
    const response = await unsplash.get(`/photos/random?count=${count}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении случайных фото:', error);
    return [];
  }
};

export async function searchPhotos(query: string) {
  try {
    const response = await unsplash.get(`/search/photos`, {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Ошибка при поиске фото:', error);
    return [];
  }
};

export async function getPhotoById(id: string) {
  try {
    const response = await unsplash.get(`/photos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении фото с id=${id}:`, error);
    return null;
  }
};
