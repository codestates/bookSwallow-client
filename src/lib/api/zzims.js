import axios from 'axios';

export const getZzims = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/zzims`);
  return response.data;
};

export const createZzim = async (token) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const deleteZzim = async (token) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};
