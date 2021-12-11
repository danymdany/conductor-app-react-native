import React, {useEffect} from 'react';
import {
  Authenticator,
  ForgotPassword,
  ConfirmSignIn,
} from 'aws-amplify-react-native';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Greetings from './components/Greetings';

const AuthFlow = () => {
  return (
    <>
      <Authenticator hideDefault={true}>
        <SignIn />
        <SignUp />
        <ConfirmSignIn />
        <ForgotPassword />
        <Greetings />
      </Authenticator>
    </>
  );
};

export default AuthFlow;
