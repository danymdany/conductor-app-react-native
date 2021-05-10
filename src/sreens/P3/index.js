import React, {useState} from 'react';
import {Text, View, Alert, Pressable, Linking} from 'react-native';
import RNLocation from 'react-native-location';
import LottieView from 'lottie-react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const P3 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  console.log(route.params);
  const move = () => {
    navigation.navigate('P2');
  };

  const lat = route.params.latitude;
  const lon = route.params.longitude;

  console.log(lat);

  const location = `${lat},${lon}`;
  const url = Platform.select({
    ios: `maps:${location}`,
    android: `geo:${location}?center=${location}&q=${location}&z=16`,
  });

  return (
    <View style={styles.cont}>
      <LottieView
        source={require('../../animations/52448-zero-anim-1.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => Linking.openURL(url)}
        speed={5}
        style={{
          height: 300,
          width: 100,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default P3;
