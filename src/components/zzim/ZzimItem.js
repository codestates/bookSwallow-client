import React from 'react';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RemoveButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 2rem;
  color: #adb5bd;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: #212529;
  }
  display: none;
`;

const ImgContainer = styled.div`
  border: 0.7px solid #dee2e6;
  border-radius: 0.7rem;
  width: 200px;
  height: 300px;
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  &:hover {
    img {
      opacity: 0.7;
    }
    ${RemoveButton} {
      display: initial;
    }
  }
`;

function ZzimItem({ zzim, deleteHandler }) {
  return (
    <ImgContainer>
      <RemoveButton onClick={() => deleteHandler(zzim.id)}>
        <MdDeleteForever />
      </RemoveButton>
      <Link to={`/books/${zzim.book_id}`}>
        <img src={zzim.book.cover_img} alt={zzim.id} />
      </Link>
    </ImgContainer>
  );
}

export default ZzimItem;
