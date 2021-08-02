import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Platform,
  Linking,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {
  createCarInfo,
  updateOrder,
  updateCarInfo,
  updateCar,
} from '../../graphql/mutation';
import {getOrder} from '../../graphql/query';
import {onUpdateOrder} from '../../graphql/real-time-order';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import styles from './styles';

const P6 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [userstate, setUserState] = useState();
  const [email, setEmail] = useState('');

  const route = useRoute();
  const navigator = useNavigation();

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
  return (
    <SafeAreaView>
      <View>
        <MapView
          style={{height: 0, width: 0}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={false}
          onUserLocationChange={loc}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
      </View>

      <View style={styles.view}>
        <View style={styles.logo}>
          <ImageBackground
            style={styles.imgs}
            source={require('../../animations/logo.png')}></ImageBackground>
        </View>
        <View style={styles.ifoView}>
          <Text style={styles.costText}>{route.params.cost} NIO</Text>
        </View>
      </View>

      <View style={styles.Options}>
        <View style={styles.menu}>
          <Text style={styles.ifoText}>
            <Icon name="radio" size={20} color="#000000" />
            {'  '} orden en curso{' '}
          </Text>
        </View>
        <Pressable style={styles.press} onPress={() => Linking.openURL(url)}>
          <Icon name="navigation" size={20} color="#000000" />
        </Pressable>
        <Text style={styles.texop}>usar google maps</Text>
        <Pressable
          style={styles.press}
          onPress={() => navigator.navigate('P3')}
          onPressIn={End}>
          <Icon name="slash" size={20} color="#000000" />
        </Pressable>
        <Text style={styles.texop}>terminar carrera </Text>
        <Pressable style={styles.press} onPress={close}>
          <Icon name="meh" size={20} color="#000000" />
        </Pressable>

        <Text style={styles.texop}>cancelar orden </Text>

        {userstate === 'cancelled' && (
          <Text style={styles.status}>
            la orden fue cancelada por el cliente{' '}
          </Text>
        )}

        {userstate === 'rejected' && (
          <Text style={styles.status}>acabas de rechasar la orden </Text>
        )}

        {userstate === 'rejected' && (
          <Pressable
            style={styles.press}
            onPress={() => navigator.navigate('P3')}
            onPressIn={End}>
            <Icon name="slash" size={20} color="red" />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default P6;
