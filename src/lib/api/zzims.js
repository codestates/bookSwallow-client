import axios from 'axios';

export const getZzims = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return response.data;
};

export const createZzim = async (book_id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
    {
      book_id,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return response.data;
};

export const deleteItem = async (zzim_id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/zzims/${zzim_id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return response.data;
};
