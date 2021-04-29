import React from 'react';
import BookSlideItem from './BookSlideItem';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const imgList = {
  data: [
    {
      key: 1,
      imgUrl:
        'https://image.aladin.co.kr/product/5305/11/cover/8966261256_1.jpg',
    },
    {
      key: 2,
      imgUrl:
        'https://image.aladin.co.kr/product/6055/2/cover/8998139766_1.jpg',
    },
    {
      key: 3,
      imgUrl:
        'https://image.aladin.co.kr/product/6203/71/cover/k322433122_1.jpg',
    },
    {
      key: 4,
      imgUrl:
        'https://image.aladin.co.kr/product/1478/34/cover/8996094064_1.jpg',
    },
    {
      key: 5,
      imgUrl:
        'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
    },
  ],
};

const ImagesContainer = styled.div`
  display: inline-flex;
`;

function BookSlide() {
  return (
    <>
      <div>북 슬라이드</div>
      <button className="prev-button">
        <MdKeyboardArrowLeft />
      </button>
      <ImagesContainer>
        {imgList.data.map((item) => (
          <BookSlideItem key={item.key} imgUrl={item.imgUrl} />
        ))}
      </ImagesContainer>
      <button className="next-button">
        <MdKeyboardArrowRight />
      </button>
    </>
  );
}

export default BookSlide;
