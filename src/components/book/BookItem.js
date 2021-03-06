import React from 'react';
import styled, { css } from 'styled-components';
import { MdThumbUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../modules/books';
import LikeButton from './LikeButton';

const LikeUp = styled(MdThumbUp)`
  font-size: 1.2rem;
  cursor: pointer;
`;

const BookItemDiv = styled.div`
  display: flex;

  align-content: flex-start;
  margin-bottom: 2rem;
  background-color: #e5e5e5;

  border: 0.5px solid #adb5bd;
  border-radius: 0.7rem;
  padding: 1rem;

  position: relative;
`;

const ImgDiv = styled.div`
  flex: 0 0 200px;
  height: 300px;
  border: 0.7px solid #dee2e6;
  border-radius: 0.7rem;
  overflow: hidden;

  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BookContentDiv = styled.div`
  h1 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    line-height: 1.3rem;
  }
`;

const LikeDiv = styled.button`
  padding: 10px 20px 10px 20px;

  cursor: pointer;

  position: absolute;
  right: 1rem;
  bottom: 1rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
  }
  &:hover {
    background: ${darken(0.1, '#e5e5e5')};
  }

  ${(props) =>
    props.like &&
    css`
      color: #226be1;
    `}
`;

function BookItem({ book, like }) {
  const dispatch = useDispatch();

  async function likeHandler() {
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/books/like`,
        {
          book_id: book.id,
        },
        { withCredentials: true },
      )
      .then(async (response) => {
        const recentBookId = response.config.data.split(':')[1].split('}')[0];
        const nowLikeCount = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/books/${recentBookId}`,
        );
        console.log(nowLikeCount.data.data);
        console.log(like);
        if (like !== nowLikeCount.data.data.like_count) {
          await dispatch(getBooks());
        }
      })
      .catch(async (err) => {
        console.log(err);
        alert('??????????????? ????????? ???????????? ??????????????????');
      });
  }

  return (
    <>
      <BookItemDiv>
        <ImgDiv>
          <img src={book.cover_img} />
        </ImgDiv>
        <BookContentDiv>
          <Link to={`/books/${book.id}`}>
            <h1>{book.title}</h1>
          </Link>
          <p>{book.description}</p>
        </BookContentDiv>
        <LikeButton likeHandler={likeHandler} like={like} />
      </BookItemDiv>
    </>
  );
}

export default React.memo(BookItem);
