import React from 'react';
import AuthTemplate from '../containers/auth/AutoTemplate'
import MypageForm from '../containers/auth/MypageForm'

function MyPage() {
  return (
    <AuthTemplate>
      <MypageForm></MypageForm>
    </AuthTemplate>
  );
}

export default MyPage;
