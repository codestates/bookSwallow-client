import React, { useState } from 'react';
import BookSlideItem from './BookSlideItem';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { lighten } from 'polished';

const data = [
  {
    key: 1,
    imgUrl: 'https://image.aladin.co.kr/product/5305/11/cover/8966261256_1.jpg',
  },
  {
    key: 2,
    imgUrl: 'https://image.aladin.co.kr/product/6055/2/cover/8998139766_1.jpg',
  },
  {
    key: 3,
    imgUrl: 'https://image.aladin.co.kr/product/6203/71/cover/k322433122_1.jpg',
  },
  {
    key: 4,
    imgUrl: 'https://image.aladin.co.kr/product/1478/34/cover/8996094064_1.jpg',
  },
  {
    key: 5,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
];

const Button = styled.div`
  color: #212529;
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    color: ${lighten(0.3, '#212529')};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function BookSlide() {
  const [images, setImages] = useState(data);
  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  };

  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 5,
  );

  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 5
      ? [
          ...activeImageSourcesFromState,
          ...images.slice(0, 5 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <Container>
      <Button>
        <MdKeyboardArrowLeft onClick={prevSlide}>이전</MdKeyboardArrowLeft>
      </Button>
      {imageSourcesToDisplay.map((book) => (
        <BookSlideItem key={book.key} book={book}></BookSlideItem>
      ))}
      <Button>
        <MdKeyboardArrowRight onClick={nextSlide}>다음</MdKeyboardArrowRight>
      </Button>
    </Container>
  );
}

export default BookSlide;
