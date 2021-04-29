import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemProvider } from 'styled-components';
import GlobalStyles from './components/common/GlobalStyles';
import Responsive from './components/common/Responsive';
import Header from './components/common/Header';

import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import ZzimPage from './pages/ZzimPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Mypage from './pages/MyPage';

const Wrapper = styled(Responsive)`

`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <Wrapper>
        <Route component={MainPage} path="/" exact></Route>
        <Route component={ListPage} path="/lists" />
        <Route component={ZzimPage} path="/zzims" />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/signup" />
        <Route component={Mypage} path="/mypage" />
      </Wrapper>
    </>
  );
}

export default App;
