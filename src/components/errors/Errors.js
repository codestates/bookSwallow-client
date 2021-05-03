import React from 'react';

function Errors({ error }) {
  return (
    <>
      <div>무슨 에러인지 : {error}</div>
      <div>
        500
        <img src="./images/500.png" alt="" />
      </div>
    </>
  );
}

export default Errors;
