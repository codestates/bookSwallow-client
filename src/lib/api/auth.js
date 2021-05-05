import axios from 'axios';

export const login = async ({ email, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/users/login`,
    { email, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const logout = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/users/logout`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return response;
};

export const signup = async ({ email, username, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/users/signup`,
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

export const update = async ({ password, username }) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/users`,
    { password, username },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const info = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/users`,
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const check = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/users/${id}`,
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  console.log(response);
  return response.data;
};
