import React from 'react';
import styled from 'styled-components'
import AuthTemplate from '../containers/auth/AutoTemplate'
import LoginForm from '../containers/auth/LoginForm'

function LoginPage() {
  return (
      <AuthTemplate>
        <LoginForm></LoginForm>
      </AuthTemplate>
  );
}

export default LoginPage;
