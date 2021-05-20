import React, {useState, useEffect} from 'react';
import {View, PermissionsAndroid, Platform} from 'react-native';
import RNLocation from 'react-native-location';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const P1 = () => {
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

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P2', {
      lat,
      lon,
    });
  };
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const gps = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      if (granted) {
        const all = RNLocation.subscribeToLocationUpdates((locations) => {
          let lat = locations[0].latitude;
          let lon = locations[0].longitude;
          setLat(lat);
          setLon(lon);
        });
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={require('../../animations/52448-zero-anim-1.json')}
        autoPlay={true}
        loop
        speed={4}
        style={{
          height: 300,
          width: 100,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
      <LottieView
        source={require('../../animations/6607-loading-drop (1).json')}
        autoPlay={true}
        loop={false}
        speed={0.5}
        onAnimationFinish={move}
        style={{
          height: 1,
          width: 1,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />

      <LottieView
        source={require('../../animations/6607-loading-drop (1).json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={gps}
        style={{
          height: 1,
          width: 1,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default P1;
