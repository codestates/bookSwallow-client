import axios from 'axios';

export const getZzims = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/zzims`);
  return response.data;
};

export const createZzim = async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
  );
};

export const deleteZzim = async () => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/zzims`,
  );
};
