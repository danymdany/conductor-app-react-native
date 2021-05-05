import React, {useState} from 'react';
import {Text, View, Alert, Pressable, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapStyle from '../../map-style/index';
import styles from './styles';
const P2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const move = () => {
    navigation.navigate('P1');
  };

  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsMyLocationButton={false}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: route.params.lat,
          longitude: route.params.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>

      <Pressable style={[styles.roundButton, {top: 10, left: 10}]}>
        <Text>menu</Text>
      </Pressable>

      <Pressable style={[styles.roundButton, {top: 10, right: 10}]}>
        <Text>saldo</Text>
      </Pressable>
      <Pressable style={[styles.roundButton, {bottom: 40, left: 10}]}>
        <Text>online/ofline</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P2;
