import React from 'react';
import styled from 'styled-components';

function BookSlideItem({ key, imgUrl }) {
  return <img src={imgUrl} alt={`${key}번쨰 책`} />;
}

export default BookSlideItem;
