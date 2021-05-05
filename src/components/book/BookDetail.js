import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const FlexContainer = styled.div`
  display: flex;
`;

const ImgDiv = styled.div`
  width: 200px;
  height: 300px;

  flex: 1 0 200px;

  overflow: hidden;
  border-radius: 5px;
  border: 0.5px solid #adb5bd;

  margin-right: 3rem;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ContentDiv = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    padding-bottom: 0.7rem;
    border-bottom: 0.5px solid #adb5bd;
  }
  p {
    margin-bottom: 1rem;
    & > span {
      color: #777777;
    }
  }

  .description {
    margin-top: 2rem;
    border-top: 0.5px solid #adb5bd;
    padding-top: 1rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #f06595;

  &:hover {
    background: ${lighten(0.1, '#f06595')};
  }

  &:active {
    background: ${darken(0.1, '#f06595')};
  }
`;

function BookDetail({ book, onSelect }) {
  return (
    <FlexContainer>
      <ImgDiv>
        <img src={book.cover_img} alt={book.title} />
      </ImgDiv>
      <ContentDiv>
        <h1>{book.title}</h1>
        <p className="title">
          <span>저자</span> {book.authors}
        </p>
        <p className="publisher">
          <span>출판사</span> {book.publisher}
        </p>
        <p className="price">
          <span>가격</span> {book.price}
        </p>
        <Button onClick={() => onSelect(book.id)}>ZZIM</Button>
        <p className="description">{book.description}</p>
      </ContentDiv>
    </FlexContainer>
  );
}

export default BookDetail;
