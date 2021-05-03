import React from 'react';
import styled from 'styled-components';

const IMG = styled.img``;

function BookSlideItem({ book }) {
  return <IMG src={book.imgUrl} alt={`${book.key}번쨰 책`} />;
}

export default BookSlideItem;
