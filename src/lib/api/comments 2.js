import axios from 'axios';

export const getComments = async (bookId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
  );
  return response.data;
};

export const createComment = async (bookId, token) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const updateComment = async (bookId, token) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const deleteComment = async (bookId, token) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};
