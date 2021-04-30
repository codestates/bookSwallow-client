import React from 'react';
import styled from 'styled-components';
import { MdThumbUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BookDetailPage from '../../pages/BookDetailPage';

const LikeUp = styled(MdThumbUp)`
  font-size: 1.2rem;
`;

const BookItemDiv = styled.div`
  display: flex;
  align-content: flex-start;
  margin-bottom: 2rem;
  background-color: #e5e5e5;

  border: 0.5px solid #adb5bd;
  border-radius: 0.7rem;
  padding: 1rem;

  position: relative;
`;

const ImgDiv = styled.div`
  width: 200px;
  height: 300px;
  border: 0.7px solid #dee2e6;
  border-radius: 0.7rem;
  overflow: hidden;
  flex: 1 0 200px;

  margin-right: 2rem;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const BookContentDiv = styled.div`
  & h1 {
    margin-bottom: 2rem;
  }
`;

const LikeDiv = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  display: flex;
  align-items: center;

  & > span {
    margin-left: 10px;
  }
`;

function BookItem({ book }) {
  return (
    <>
      <BookItemDiv>
        <ImgDiv>
          <img src={book.imgUrl}></img>
        </ImgDiv>
        <BookContentDiv>
          <Link to={`/books/${book.key}`}>
            <h1>CODE 코드 (반양장) - 하드웨어와 소프트웨어에 숨어 있는 언어</h1>
          </Link>
          <p>
            다른 사람들과 의사소통하기 위하여 언어를 조작하고 새로운 의미를
            만들어내는 독창적인 방법들을 우리에게 보여주고 있다. 또한 다른
            사람들과 의사소통을 하려는 인간의 강렬한 욕망이 어떻게, 지난 두 세기
            동안 기술적인 발전을 이루어냈는지 독득한 시각을 제공해 주고 있다.
          </p>
        </BookContentDiv>
        <LikeDiv>
          <LikeUp>
            <MdThumbUp />
          </LikeUp>
          <span>10</span>
        </LikeDiv>
      </BookItemDiv>
    </>
  );
}

export default BookItem;
