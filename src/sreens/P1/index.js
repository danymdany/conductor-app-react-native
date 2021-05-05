import React, {useState} from 'react';
import {Text, View, Alert, Pressable} from 'react-native';
import RNLocation from 'react-native-location';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const P1 = () => {
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
