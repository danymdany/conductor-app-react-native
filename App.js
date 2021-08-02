import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {PermissionsAndroid, Platform} from 'react-native';
import App from './src/Nav/index';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import config from './aws-exports/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';

Amplify.configure(config);

const all = () => {
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'aceptar acceso al gps ',

          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (Platform.OS == 'android') {
      Permission();
    }

    // IOS
    else {
      Geolocation.requestAuthorization;
    }
  }, []);
  return <App />;
};

export default all;
