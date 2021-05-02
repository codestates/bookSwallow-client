import axios from 'axios';

export const login = async ({ email, password }) => {
  const response = await axios.post(
    'https://server.bookswallow.tk/users/login',
    // 'http://localhost:4000/users/login',
    { email, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const signup = async ({ email, username, password }) => {
  const response = await axios.post(
    'http://server.bookswallow.tk/users/signup',
    {
      email,
      username,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};
