// screen to go at  map app
import React from 'react';
import {View, Linking} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
// require imports

const P3 = () => {
  const route = useRoute();
  const lat = route.params.latitude;
  const lon = route.params.longitude;
  // info about latitude and longitude from the P2  to use  linking to open maps app

  const location = `${lat},${lon}`;
  const url = Platform.select({
    ios: `maps:${location}`,
    android: `geo:${location}?center=${location}&q=${location}&z=16`,
  });
  // funcion to open the maps with the destination of the client

  // return to do the linking funcion later the animation end
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
