import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get('https://server.bookswallow.tk/books');
  return response.data;
};

export const getBook = async (id) => {
  const response = await axios.get(`https://server.bookswallow.tk/books/${id}`);
  return response.data;
};
