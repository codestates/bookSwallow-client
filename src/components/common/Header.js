import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../modules/user';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${palette.background};
  border-bottom: 1px solid ${palette.border};
  z-index: 100;
  font-size: 1.25rem;
  /* background-color: rgba(242, 242, 242, 0.2);
  backdrop-filter: blur(30px); */
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.6rem;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  .right {
    border-right: 2px solid ${palette.border};
    padding-right: 1rem;
    a {
      padding: 1rem;
    }
  }
  .left {
    padding-left: 1rem;
    a {
      padding: 1rem;
    }
  }
`;
const StyledLink = styled(Link)`
  .text {
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Spacer = styled.div`
  height: 5rem;
`;

function Header() {
  const dispatch = useDispatch();
  const { login, loginError, isLogin, token } = useSelector(({ user }) => ({
    isLogin: user.isLogin,
    token: user.token,
  }));

  const loginHandler = (token) => {
    dispatch(logoutUser(token));
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            LOGO
          </Link>
          <Right>
            <div className="right">
              <StyledLink to="/books">
                <span className="text">LIST</span>
              </StyledLink>
              <StyledLink to="/zzims">
                <span className="text">ZZIM</span>
              </StyledLink>
            </div>
            <div className="left">
              {isLogin ? (
                <>
                  <StyledLink to="/mypage">
                    <span className="text">마이페이지</span>
                  </StyledLink>
                  <StyledLink to="/" onClick={() => loginHandler(token)}>
                    로그아웃
                  </StyledLink>
                </>
              ) : (
                <>
                  <StyledLink to="/login">
                    <span className="text">로그인</span>
                  </StyledLink>
                  <StyledLink to="/signup">
                    <Button>회원가입</Button>
                  </StyledLink>
                </>
              )}
            </div>
          </Right>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
