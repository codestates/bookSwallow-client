import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/books`);
  return response.data;
};

export const getBook = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/books/${id}`,
  );
  return response.data;
};
