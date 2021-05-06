import axios from 'axios';

export const kakaoLogin = async (email, nickname) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/users/oauth/kakao`,
    {
      email,
      nickname,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );

  return response.data.data;
};
