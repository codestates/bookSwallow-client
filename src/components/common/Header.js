import React from 'react';
import styled from 'styled-components';
// 버튼 임폴트해와야함. import Button from ~~
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: #f4f4f4;
  border-bottom: 2px solid #adb5bd;
  z-index: 1;
  a {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  display: inline-flex;
  .right {
    border-right: 1px solid black;
    a {
      padding: 1rem;
    }
    margin-right: 1rem;
  }

  .left {
    a {
      padding: 1rem;
    }
  }
`;

const Spacer = styled.div`
  height: 6rem;
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Logo
          </Link>
          <Right>
            <div className="right">
              <Link to="/books">list</Link>
              <Link to="/zzims">zzim</Link>
            </div>
            <div className="left">
              <Link to="/login">Log in</Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>
          </Right>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
