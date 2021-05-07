import React from 'react';
import LoginForm from '../containers/auth/LoginForm';
import AuthTemplate from '../containers/auth/AutoTemplate'

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm></LoginForm>
    </AuthTemplate>
  )
}

export default LoginPage;
