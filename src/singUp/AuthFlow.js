import React, {useEffect} from 'react';
import {
  Authenticator,
  ForgotPassword,
  ConfirmSignIn,
} from 'aws-amplify-react-native';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import Greetings from './components/Greetings';

const AuthFlow = () => {
  return (
    <>
      <Authenticator hideDefault={true}>
        <SignIn />
        <SignUp />
        <ConfirmSignUp />
        <ConfirmSignIn />
        <ForgotPassword />
        <Greetings />
      </Authenticator>
    </>
  );
};

export default AuthFlow;
