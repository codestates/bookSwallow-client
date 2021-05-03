import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgContainer = styled.div`
  width: 200px;
  height: 300px;
  flex: 0 0 200px;
  margin: 0 10px;
  border: 0.7px solid #dee2e6;
  border-radius: 0.7rem;
  overflow: hidden;
`;
const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

function BookSlideItem({ book }) {
  return (
    <ImgContainer>
      <Link to={`/books/${book.id}`}>
        <IMG src={book.imgUrl} alt={`${book.id}번쨰 책`} />
      </Link>
    </ImgContainer>
  );
}

export default BookSlideItem;
