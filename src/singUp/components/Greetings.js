import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles';
const Greetings = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsVisible(true);

      return () => {
        setIsVisible(false);
      };
    }, []),
  );

  console.log(isVisible);

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);

    if (lat === 0) {
      console.log(lat);
    } else {
      navigation.navigate('P3', {
        lat,
        lon,
      });
    }
  };

  if (props.authState === 'signedIn')
    return (
      <View style={styles.container}>
        {isVisible && (
          <MapView
            style={{height: 0, width: 0}}
            provider={PROVIDER_GOOGLE}
            onUserLocationChange={loc}
            showsUserLocation={true}
            showsCompass={false}
            initialRegion={{
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        )}
      </View>
    );
  else return <></>;
};

export default Greetings;
