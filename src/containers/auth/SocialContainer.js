import axios from 'axios';
import React, { useEffect } from 'react';
import SocialAuth from '../../components/auth/SocialAuth';
import { kakaoLogin, loginUser } from '../../modules/user';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userInfoReq } from '../../modules/auth';

const SocialContainer = ({ history }) => {
  const dispatch = useDispatch();

  const kakaoLoginHandler = () => {
    try {
      dispatch(userInfoReq());
      return new Promise((resolve, reject) => {
        if (!window.Kakao) {
          reject('Kakao 인스턴스가 존재하지 않습니다.');
        }
        window.Kakao.Auth.login({
          success: (auth) => {
            window.Kakao.API.request({
              url: '/v2/user/me',
              data: {
                property_keys: ['kakao_account.email', 'kakao_account.profile'],
              },
              success: function (response) {
                dispatch(
                  kakaoLogin(
                    response.kakao_account.email,
                    response.kakao_account.profile.nickname,
                    auth.access_token,
                  ),
                );
              },
              fail: function (error) {
                console.log(error);
              },
            });
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  const googleLoginHandler = () => {
    console.log(process.env.REACT_APP_CLIENT_URI);
    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT_URI}/login/google&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`,
    );
  };

  function googleLoginReqtoServer() {
    const url = new URL(window.location.href);
    let hash = url.hash;
    if (url.hash.length !== 0) {
      hash = hash.split('=')[1].split('&')[0];
      const authorizationCode = hash;
      if (authorizationCode) {
        axios
          .post(
            `${process.env.REACT_APP_SERVER_URI}/users/oauth/google`,
            {
              accessToken: authorizationCode,
            },
            {
              withCredentials: true,
            },
          )
          .then(async (response) => {
            let newPayload = {
              token: response.data.data.accessToken,
              id: response.data.data.payload.id,
              email: response.data.data.payload.email,
              username: response.data.data.payload.username,
            };
            try {
              sessionStorage.setItem('id', response.data.data.payload.id);
            } catch (e) {
              console.log('sessionStorage is not working');
            }
            await dispatch(loginUser(newPayload));
            await dispatch(userInfoReq());
            history.push('/');
          });
      }
    }
  }

  useEffect(() => {
    if (window.location.href.indexOf('google' !== -1)) {
      googleLoginReqtoServer();
    }
  });

  return (
    <SocialAuth
      googleLoginHandler={googleLoginHandler}
      kakaoLoginHandler={kakaoLoginHandler}
    />
  );
};

export default withRouter(SocialContainer);
