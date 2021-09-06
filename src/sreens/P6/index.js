import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  Linking,
  BackHandler,
  TouchableOpacity,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {updateOrder, updateCar} from '../../graphql/mutation';
import {getOrder} from '../../graphql/query';
import {onUpdateOrder} from '../../graphql/real-time-order';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import mapStyle from '../P4/map-style';

import styles from './styles';

const P6 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [userstate, setUserState] = useState('');
  const [email, setEmail] = useState('');

  const route = useRoute();
  const navigator = useNavigation();

  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'P6') {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  const latitude = route.params.origins.latitude;
  const longitude = route.params.origins.longitude;
  const label = '';

  const url = Platform.select({
    ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
    android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
  });

  const End = async () => {
    try {
      const input = {
        id: route.params.id,
        status: 'updated',
      };

      const response = await API.graphql(
        graphqlOperation(updateOrder, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  const close = async () => {
    try {
      const input = {
        id: route.params.id,
        status: 'rejected',
      };

      const response = await API.graphql(
        graphqlOperation(updateOrder, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const updateUsercar = async () => {
    const getCardata = await API.graphql(
      graphqlOperation(getOrder, {
        id: route.params.id,
      }),
    );

    setUserState(getCardata.data.getOrder.status);
  };

  useEffect(() => {
    updateUsercar();
  }, []);
  const realTime = API.graphql(graphqlOperation(onUpdateOrder)).subscribe({
    next: (data) => {
      updateUsercar();
    },
  });

  useEffect(() => {
    const updateUsercar = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setEmail(userInfo.attributes.sub);
    };

    updateUsercar();
  }, []);

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };
  const onUserLocationChange = async () => {
    // Update the car and set it to active
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const input = {
        id: userData.attributes.sub,
        latitude: lat,
        longitude: lon,
      };
      const updatedCarData = await API.graphql(
        graphqlOperation(updateCar, {input}),
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    onUserLocationChange();
  });

  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.mapsize}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          showsMyLocationButton={false}
          onUserLocationChange={loc}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.origins.latitude,
            longitude: route.params.origins.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapViewDirections
            origin={route.params.origins}
            destination={route.params.destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={2}
            strokeColor="#fff"
          />
        </MapView>

        <View style={styles.orderInfo}>
          <Text style={styles.distance}>{route.params.distance} KM</Text>
          <Text style={styles.cost}>{route.params.cost} NIO</Text>

          <Text></Text>
        </View>
        <TouchableOpacity
          style={styles.endOrder}
          onPress={() => Linking.openURL(url)}>
          <Icon name="navigation" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.useMap}
          onPress={() => navigator.navigate('P3')}
          onPressIn={End}>
          <Icon name="slash" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineOrder} onPress={close}>
          <Icon name="meh" size={20} color="#000000" />
        </TouchableOpacity>
      </View>

      {userstate === 'cancelled' && (
        <View style={styles.status}>
          <Text style={{color: 'red'}}>
            <Icon name="info" size={20} color="#000000" />
            {'  '}
            la orden fue cancelada por el cliente{' '}
          </Text>
        </View>
      )}
      {userstate === 'cancelled' && (
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigator.navigate('P3')}>
          <Icon name="log-out" size={20} color="#000000" />
        </TouchableOpacity>
      )}

      {userstate === 'rejected' && (
        <View style={styles.status}>
          <Text style={{color: 'red'}}>
            <Icon name="info" size={20} color="#000000" />
            {'  '}
            acabas de rechazar esta orden{' '}
          </Text>
        </View>
      )}

      {userstate === 'rejected' && (
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigator.navigate('P3')}>
          <Icon name="log-out" size={20} color="#000000" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default P6;
