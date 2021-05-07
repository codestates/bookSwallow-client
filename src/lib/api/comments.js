import axios from 'axios';

export const getComments = async (bookId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
  );
  return response.data;
};

export const createComment = async (bookId, token, comment) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/comments/${bookId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      content: comment,
    },
    { withCredentials: true },
  );

  return response;
};

export const updateComment = async (commentId, comment, token) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/comments/${commentId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      content: comment,
    },
    { withCredentials: true },
  );
  return response.data;
};

export const deleteComment = async (commentId, token) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/comments/${commentId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  return response;
};
