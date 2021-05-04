import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { useSelector } from 'react-redux';

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
const LoginBox = styled.div`
  margin-left: 1rem;
  position: relative;
  cursor: pointer;
  & > span {
    font-weight: 700;
  }
  .dropdown {
    display: none;
    position: absolute;
    flex-direction: column;
    background: #fff;
    width: 130px;
    height: 80px;
    border: 1px solid ${palette.border};
    border-radius: 5px;
    & > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #343a40;
        color: #fff;
      }
    }
  }
  .dropdown a {
    padding: 0;
  }
  &:hover {
    .dropdown {
      display: flex;
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

function Header({ onLogout }) {
  const { isLogin, token, username } = useSelector(({ user }) => ({
    isLogin: user.isLogin,
    token: user.token,
    username: user.username,
  }));

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
                <span className="text">BOOK</span>
              </StyledLink>
              <StyledLink to="/zzims">
                <span className="text">ZZIM</span>
              </StyledLink>
            </div>
            <div className="left">
              {isLogin ? (
                <>
                  <LoginBox>
                    <span>{username} </span>님
                    <div className="dropdown">
                      <div>
                        <span>
                          <Link to="/mypage">MY PAGE</Link>
                        </span>
                      </div>
                      <div onClick={() => onLogout()}>
                        <span>LOG OUT</span>
                      </div>
                    </div>
                  </LoginBox>
                </>
              ) : (
                <>
                  <StyledLink to="/login">
                    <span className="text">LOG IN</span>
                  </StyledLink>
                  <StyledLink to="/signup">
                    <Button>SIGN UP</Button>
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
