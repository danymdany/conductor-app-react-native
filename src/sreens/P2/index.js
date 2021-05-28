// principal screen for all the  order logistic

import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapStyle from '../../map-style/index';
import styles from './styles';
import Pop from '../popup/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewDirections from 'react-native-maps-directions';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {getCar, listOrders} from '../../graphql/query';
import {onCreateOrder, onUpdateOrder} from '../../graphql/real-time-order';
//  require imports

const P2 = () => {
  const route = useRoute();
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
  const [lat, setLat] = useState(route.params.lat);
  const [lon, setLon] = useState(route.params.lon);
  const [isOnline, setIsOnline] = useState(false);
  const [order, setOrder] = useState(null);
  const [newOrders, setNewOrders] = useState([]);
  //  states

  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const carData = await API.graphql(
        graphqlOperation(getCar, {id: userData.attributes.sub}),
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchCar();
  }, []);

  //   get car

  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  };

  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(listOrders, {filter: {status: {eq: 'NEW'}}}),
      );
      setNewOrders(orderData.data.listOrders.items);
    } catch (e) {
      console.error(e);
    }
  };

  // ondecline order

  const onAccept = (newOrder) => {
    setOrder(newOrder);
    setNewOrders(newOrders.slice(1));
  };
  // on accept order
  const online = () => {
    setIsOnline(!isOnline);
    console.log('oneline');
  };

  // real time UI update

  useEffect(() => {
    const realTime = API.graphql(graphqlOperation(onCreateOrder)).subscribe({
      next: (data) => {
        const UIupdate = data.value.data.onCreateOrder;
        setNewOrders([UIupdate, ...newOrders]);
      },
    });
  }, []);

  /* useEffect(() => {
    const status = API.graphql(graphqlOperation(onUpdateOrder)).subscribe({
      next: (data) => {
        const UI = data.value.data.onUpdateOrder;
        setNewOrders([UI, ...newOrders]);
      },
    });
  }, []); */

  // return for the driver interface if the order was accept

  const location = {
    lat: lat,
    lon: lon,
  };

  const orderAcept = () => {
    if (order) {
      return (
        <View style={styles.onlineorder}>
          <View style={[styles.info, {bottom: 80, left: 10}]}>
            <Text style={styles.Text11}>{order.type}</Text>
          </View>
          <Pressable
            style={[styles.info, {bottom: 30, left: 10}]}
            onPress={move}>
            <Text style={styles.Text11}>usar maps</Text>
          </Pressable>
          <View style={[styles.info, {bottom: 80, right: 10}]}>
            <Text style={styles.Text11}> {order.distance}Km</Text>
          </View>
          <View style={[styles.info2, {bottom: 30, right: 10}]}>
            <Text style={styles.Text11}> {order.duration}min </Text>
          </View>
        </View>
      );
    }
  };

  // gps from google map  and set states
  const gps = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };
  // info from map   like latitude and longitude
  const info = (event) => {
    if (order)
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
      });
  };

  // navigation when the driver prress use maps option  to open in google maps
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P3', {
      latitude: order.destLatitude,
      longitude: order.destLongitude,
    });
  };

  // return for the principal interface UI for thedriver and logistic about order and  change of the UI when order is

  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={gps}
        customMapStyle={mapStyle}
        showsMyLocationButton={false}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {order && (
          <MapViewDirections
            origin={{
              latitude: lat,
              longitude: lon,
            }}
            destination={{
              latitude: order.originLatitude,
              longitude: order.originLongitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={info}
            strokeWidth={5}
            strokeColor="#400857"
          />
        )}
      </MapView>

      <Pressable style={[styles.menu, {top: 10, left: 10}]}>
        <Text>
          <Icon name="bars" size={30} color="#ffffff" />
        </Text>
      </Pressable>

      <Pressable style={[styles.saldo, {top: 20, right: 10}]}>
        <Text style={styles.text12}>0 C$</Text>
      </Pressable>
      <Pressable
        style={[styles.online2, {bottom: 150, left: 10}]}
        onPress={online}>
        {isOnline ? (
          <Text style={styles.Texton}>
            <Icon name="eye" size={15} color="#000000" /> {'  '}on
          </Text>
        ) : (
          <Text style={styles.Textof}>
            <Icon name="eye-slash" size={15} color="#000000" />
            {'  '}of
          </Text>
        )}
      </Pressable>

      <Pressable style={[styles.online, {bottom: 0}]}>{orderAcept}</Pressable>

      {newOrders.length > 0 && !order && (
        <Pop
          newOrder={newOrders[0]}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrders[0])}
          location={location}
        />
      )}
    </SafeAreaView>
  );
};

export default P2;
