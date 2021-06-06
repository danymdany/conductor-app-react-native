import React, {useState} from 'react';
import {View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';

const P1 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const navigation = useNavigation();

  const gps = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };

  const move = () => {
    navigation.navigate('P2', {
      lat,
      lon,
    });
  };

  console.log(lat, lon);
  return (
    <View style={styles.view}>
      <MapView
        style={{height: 1, width: 1, top: 1, left: 1}}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={gps}
        showsMyLocationButton={false}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <Image style={styles.img} source={require('../../animations/logo.png')} />

      <LottieView
        source={require('../../animations/1.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={move}
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
