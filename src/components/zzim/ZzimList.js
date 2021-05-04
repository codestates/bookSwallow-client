import React from 'react';
import ZzimItem from './ZzimItem';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

function ZzimList({ zzims, deleteHandler }) {
  return (
    <FlexContainer>
      {zzims.map((zzim) => (
        <ZzimItem key={zzim.id} zzim={zzim} deleteHandler={deleteHandler} />
      ))}
    </FlexContainer>
  );
}

export default ZzimList;
