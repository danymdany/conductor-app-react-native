import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapStyle from '../../map-style/index';
import styles from './styles';
import Pop from '../popup/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewDirections from 'react-native-maps-directions';
import {withAuthenticator} from 'aws-amplify-react-native';

const P2 = () => {
  const route = useRoute();
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
  const [lat, setLat] = useState(route.params.lat);
  const [lon, setLon] = useState(route.params.lon);
  const [isOnline, setIsOnline] = useState(false);
  const [order, setOrder] = useState(null);
  const [newOrders, setNewOrders] = useState({
    id: '1',
    type: 'stanley',

    user: {
      rating: 0.5,
      nombre: 'stanley',
      distance: 5,
    },
  });

  const onDecline = () => {
    setNewOrders(null);
  };

  const onAccept = (newOrder) => {
    setOrder(newOrder);
    setNewOrders(null);
  };

  const online = () => {
    setIsOnline(!isOnline);
    console.log('oneline');
  };

  const destination = {
    A: 12.146189045598227,
    B: -86.21295625560116,
  };

  const orderAcept = () => {
    if (order) {
      return (
        <View style={styles.onlineorder}>
          <View style={[styles.info, {bottom: 80, left: 10}]}>
            <Text style={styles.Text11}>{order.user.nombre}</Text>
          </View>
          <Pressable
            style={[styles.info, {bottom: 30, left: 10}]}
            onPress={move}>
            <Text style={styles.Text11}>usar maps</Text>
          </Pressable>
          <View style={[styles.info, {bottom: 80, right: 10}]}>
            <Text style={styles.Text11}>{order.distance} Km</Text>
          </View>
          <View style={[styles.info2, {bottom: 30, right: 10}]}>
            <Text style={styles.Text11}>{order.duration} min</Text>
          </View>
        </View>
      );
    }

    if (isOnline) {
      return (
        <View style={[styles.info, {bottom: 80, left: 10}]}>
          <Text style={styles.Text11}>oneline</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.info, {bottom: 80, left: 10}]}>
          <Text style={styles.Text11}>ofline</Text>
        </View>
      );
    }
  };
  const gps = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };

  const info = (event) => {
    if (order)
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
      });
  };

  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P3', {
      destination,
    });
  };

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
              latitude: destination.A,
              longitude: destination.B,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={info}
            strokeWidth={5}
            strokeColor="#ffffff"
          />
        )}
      </MapView>

      <Pressable style={[styles.menu, {top: 10, left: 10}]}>
        <Text>
          <Icon name="bars" size={30} color="#ffffff" />
        </Text>
      </Pressable>

      <Pressable style={[styles.saldo, {top: 20, right: 10}]}>
        <Text style={styles.text12}>125 C$</Text>
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

      {newOrders && (
        <Pop
          newOrder={newOrders}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrders)}
        />
      )}
    </SafeAreaView>
  );
};

export default withAuthenticator(P2);
