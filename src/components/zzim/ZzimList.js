import React from 'react';
import ZzimItem from './ZzimItem';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const zzims = [
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
    key: 6,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 7,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 8,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 9,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 10,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 11,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
  {
    key: 12,
    imgUrl: 'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
  },
];

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1.5rem;
  padding-left: 4rem;
`;

function ZzimList() {
  return (
    <FlexContainer>
      {zzims.map((zzim) => (
        <ZzimItem key={zzim.key} zzim={zzim} />
      ))}
    </FlexContainer>
  );
}

export default ZzimList;
