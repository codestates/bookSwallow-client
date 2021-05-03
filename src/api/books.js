import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get(
    'https://server.whydomainneedmoney.shop/books',
  );
  return response.data;
};

export const getBook = async (id) => {
  const response = await axios.get(
    `https://server.whydomainneedmoney.shop/books/${id}`,
  );
  return response.data;
};
