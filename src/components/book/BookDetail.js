import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const data = [
  {
    key: 1,
    title: 'CODE 코드 (반양장) - 하드웨어와 소프트웨어에 숨어 있는 언어',
    authors: '찰스 펫졸드 지음, 김현규 옮김',
    url:
      'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=53051178&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
    description:
      '다른 사람들과 의사소통하기 위하여 언어를 조작하고 새로운 의미를 만들어내는 독창적인 방법들을 우리에게 보여주고 있다. 또한 다른 사람들과 의사소통을 하려는 인간의 강렬한 욕망이 어떻게, 지난 두 세기 동안 기술적인 발전을 이루어냈는지 독득한 시각을 제공해 주고 있다.',
    publisher: '인사이트',
    cover_img:
      'https://image.aladin.co.kr/product/5305/11/cover/8966261256_1.jpg',
    price: 25000,
    like_count: 0,
  },
  {
    key: 2,
    title: '객체지향의 사실과 오해 - 역할, 책임, 협력 관점에서 본 객체지향',
    authors: '조영호 지음',
    url:
      'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=60550259&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
    description:
      '위키북스 IT Leaders 시리즈 23권. 객체지향이란 무엇인가? 이 책은 이 질문에 대한 답을 찾기 위해 노력하고 있는 모든 개발자를 위한 책이다.',
    publisher: '위키북스',
    cover_img:
      'https://image.aladin.co.kr/product/6055/2/cover/8998139766_1.jpg',
    price: 20000,
    like_count: 0,
  },
  {
    key: 3,
    title: '독하게 시작하는 C 프로그래밍 - 널널한 개발자의 C 언어 마스터클래스',
    authors: '최호성 지음',
    url:
      'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=62037102&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
    description:
      'C 언어 문법이나 함수 사용법보다는 프로그래밍 기법을 익히는 데 중점을 두었다. 코드 한 줄 한 줄을 독하게 파고들어 C 언어 입문자나 C를 완벽히 이해하지 못한 독자가 반드시 C 언어를 숙달할 수 있도록 돕는다.',
    publisher: '루비페이퍼',
    cover_img:
      'https://image.aladin.co.kr/product/6203/71/cover/k322433122_1.jpg',
    price: 25000,
    like_count: 0,
  },
  {
    key: 4,
    title: '윤성우의 열혈 자료구조 - C언어를 이용한 자료구조 학습서',
    authors: '윤성우 지음',
    url:
      'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=14783463&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
    description:
      '자료구조 학습의 올바른 방법과 목표를 알려주는 책으로, 자료구조를 어떠한 방법으로 어떠한 수준까지 공부해야 하는지를 선배의 입장에서 이야기한다. 부록으로 12개월간 인터넷 무료강의를 들을 수 있는 쿠폰을 제공한다.',
    publisher: '오렌지미디어',
    cover_img:
      'https://image.aladin.co.kr/product/1478/34/cover/8996094064_1.jpg',
    price: 27000,
    like_count: 0,
  },
];

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

function BookDetail({ id }) {
  const paramId = parseInt(id);
  const bookList = data.filter((book) => (book.key === paramId ? book : false));
  const [book] = bookList;
  return (
    <FlexContainer>
      <ImgDiv>
        <img src={book.cover_img} alt={book.title} />
      </ImgDiv>
      <ContentDiv>
        <h1>CODE 코드 (반양장) - 하드웨어와 소프트웨어에 숨어 있는 언어</h1>
        <p className="title">
          <span>저자</span> 찰스 펫졸드 지음, 김현규 옮김
        </p>
        <p className="publisher">
          <span>출판사</span> 인사이트
        </p>
        <p className="price">
          <span>가격</span> 25000
        </p>
        <Button>ZZIM</Button>
        <p className="description">
          다른 사람들과 의사소통하기 위하여 언어를 조작하고 새로운 의미를
          만들어내는 독창적인 방법들을 우리에게 보여주고 있다. 또한 다른
          사람들과 의사소통을 하려는 인간의 강렬한 욕망이 어떻게, 지난 두 세기
          동안 기술적인 발전을 이루어냈는지 독득한 시각을 제공해 주고 있다.
        </p>
      </ContentDiv>
    </FlexContainer>
  );
}

export default BookDetail;
