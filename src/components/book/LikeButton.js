import React from 'react';
import styled, { css } from 'styled-components';
import { MdThumbUp } from 'react-icons/md';
import { darken } from 'polished';

const LikeUp = styled(MdThumbUp)`
  font-size: 1.2rem;
  cursor: pointer;
`;

const LikeDiv = React.memo(styled.button`
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
`);

function LikeButton({ likeHandler, like }) {
  return (
    <LikeDiv like={false} onClick={likeHandler}>
      <LikeUp>
        <MdThumbUp />
      </LikeUp>
      <span>{like}</span>
    </LikeDiv>
  );
}

// const LikeButton = React.memo(
//   (likeHandler, like) => {
//     <LikeDiv like={false} onClick={likeHandler}>
//       <LikeUp>
//         <MdThumbUp />
//       </LikeUp>
//       <span>{like}</span>
//     </LikeDiv>;
//   },
//   (prevProps, nextProps) => prevProps === nextProps,
// );

export default React.memo(LikeButton);

// export default React.memo(
//   LikeButton,
//   (prevProps, nextProps) => prevProps.like === nextProps.like
// );
// export default LikeButton;
