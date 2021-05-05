import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import App from './src/sreens/P1/index';
import Geolocation from '@react-native-community/geolocation';

const all = () => {
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
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
