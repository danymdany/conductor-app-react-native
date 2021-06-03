import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapStyle from '../../map-style/index';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import Br from '../bottomBr/bottomBar'
import styles from './styles';
 
const P2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
    
  const location = {
  lat :route.params.lat,
  lon : route.params.lon
}

  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
         showsMyLocationButton={false} 
         mapStyle={mapStyle}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
         
      </MapView>

 
      <Pressable style={[styles.saldo, {top: 20, left: 10}]}>
        <Text style={styles.text12}>0 C$</Text>
      </Pressable>
      
<Br/>
      
     
    </SafeAreaView>
  );
};

export default withAuthenticator(P2);
