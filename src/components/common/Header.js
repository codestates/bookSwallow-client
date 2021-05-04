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
  const { isLogin, token } = useSelector(({ user }) => ({
    isLogin: user.isLogin,
    token: user.token,
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
                  <StyledLink to="/mypage">
                    <span className="text">MYPAGE</span>
                  </StyledLink>
                  <StyledLink to="/" onClick={() => onLogout()}>
                    LOG OUT
                  </StyledLink>
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
