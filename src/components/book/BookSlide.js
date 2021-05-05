import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookSlideItem from './BookSlideItem';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { lighten } from 'polished';

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
  justify-content: center;
  align-items: center;
`;

const SliderTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #212529;
  font-weight: 600;
`;

function BookSlide() {
  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const bookList = useSelector((state) => state.books.books);
  const [array, setArray] = useState([]);
  useEffect(() => {
    if (bookList.data) {
      const list = bookList.data.data;
      const sortList = list.sort((a, b) => {
        return b.like_count - a.like_count;
      });
      const data = sortList.slice(0, 5);
      console.log(data);
      setArray(data);
    }
  }, [bookList]);

  const [images, setImages] = useState(array);
  useEffect(() => {
    setImages(array);
  }, [array]);
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
    <>
      <SliderTitle>BEST BOOKS</SliderTitle>
      <Container>
        <Button>
          <MdKeyboardArrowLeft onClick={prevSlide}>이전</MdKeyboardArrowLeft>
        </Button>
        {imageSourcesToDisplay.map((book) => (
          <BookSlideItem key={book.id} book={book}></BookSlideItem>
        ))}
        <Button>
          <MdKeyboardArrowRight onClick={nextSlide}>다음</MdKeyboardArrowRight>
        </Button>
      </Container>
    </>
  );
}

export default BookSlide;
