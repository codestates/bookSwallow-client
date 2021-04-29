import React from 'react';
import BookList from '../components/book/BookList';
import BookSlide from '../components/book/BookSlide';

function ListPage() {
  return (
    <div>
      <div>북 리스트 페이지입니다.</div>
      <BookSlide></BookSlide>
      <BookList></BookList>
    </div>
  );
}

export default ListPage;
