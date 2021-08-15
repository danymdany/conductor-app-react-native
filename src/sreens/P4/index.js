import React, {useState, useEffect, memo} from 'react';
import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createCarInfo, updateOrder, updateCar} from '../../graphql/mutation';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getOrder} from '../../graphql/query';
import {onUpdateOrder} from '../../graphql/real-time-order';

import mapStyle from './map-style';
import styles from './styles';

const P4 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [userstate, setUserState] = useState();
  const [variation, setVariation] = useState();

  const [allinfo, setAllinfo] = useState({
    distance: 10,
    duration: 1000,
  });
  console.log(userstate);

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };
  const End = async () => {
    try {
      const input = {
        id: route.params.id,
        status: 'ongoing',
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

  const route = useRoute();
  const navigation = useNavigation();

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();

      const input = {
        createdAt: date.toISOString(),
        type: userInfo.username,
        originLatitude: lat,
        originLongitude: lon,
        distance: 1,
        duration: 1,
        cost: route.params.cost,
        place: route.params.id,
        status: 'NEW',
        destLatitude: lat,
        destLongitude: lon,
        nota: userInfo.attributes.sub,
        userId: route.params.name,
        carId: userInfo.username,
      };

      const response = await API.graphql(
        graphqlOperation(createCarInfo, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
  const origins = {
    latitude: route.params.origenA,
    longitude: route.params.origenB,
  };

  const destination = {
    latitude: route.params.destinoA,
    longitude: route.params.destinoB,
  };

  const info = (event) => {
    setAllinfo({
      distance: event.distance,
      duration: event.duration,
    });
  };

  const MyCustomMarkerView = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>A</Text>
      </View>
    );
  };
  const MyCustomMarkerViewB = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>B</Text>
      </View>
    );
  };

  const onUserLocationChange = async () => {
    // Update the car and set it to active
    try {
      const userData = await Auth.currentAuthenticatedUser();

      setVariation(userData.attributes.sub);
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

  const updateUsercar = async () => {
    // GET USER

    // CHECK IF HAS A CAR
    const getCardata = await API.graphql(
      graphqlOperation(getOrder, {
        id: route.params.id,
      }),
    );

    setUserState(getCardata.data.getOrder.status);

    // IF NOT ,  CREATE A CAR
  };

  useEffect(() => {
    updateUsercar();
  }, []);
  const realTime = API.graphql(graphqlOperation(onUpdateOrder)).subscribe({
    next: (data) => {
      updateUsercar();
    },
  });
  console.log(variation);

  const km = (event) => {
    setAllinfo({
      distance: event.distance,
      duration: event.duration,
    });
  };

  const distance = allinfo.distance.toFixed(1);

  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={false}
        customMapStyle={mapStyle}
        onUserLocationChange={loc}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: route.params.destinoA,
          longitude: route.params.destinoB,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: route.params.origenA,
            longitude: route.params.origenB,
          }}>
          <MyCustomMarkerView {...MyCustomMarkerView} />
        </Marker>
        <Marker
          coordinate={{
            latitude: route.params.destinoA,
            longitude: route.params.destinoB,
          }}>
          <MyCustomMarkerViewB {...MyCustomMarkerViewB} />
        </Marker>

        <MapViewDirections
          origin={origins}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={2}
          onReady={km}
          strokeColor="#ffffff"
        />
      </MapView>

      <Pressable style={styles.View}>
        <View style={styles.item2}>
          <Text style={styles.title}>{route.params.place}</Text>
        </View>

        <View style={styles.item3}>
          <Text style={styles.title}>{route.params.name}</Text>
        </View>
        <View style={styles.item4}></View>
        <View style={styles.item22}>
          <Text style={styles.title}>{route.params.nota}</Text>
        </View>
      </Pressable>

      {userstate === 'NEW' && (
        <TouchableOpacity
          onPress={order}
          onPressIn={End}
          onPressOut={() =>
            navigation.navigate('P6', {
              cost: route.params.cost,
              type: route.params.name,
              id: route.params.id,
              carId: route.params.carid,
              variate: variation,
              distance: distance,
              destination: destination,
              origins: origins,
            })
          }
          style={styles.acept}>
          <Text>
            <Icon name="check" size={20} color="#000000" />
          </Text>
        </TouchableOpacity>
      )}

      {userstate === 'ongoing' && (
        <TouchableOpacity
          onPressOut={() => navigation.navigate('P3')}
          style={styles.timeout}>
          <Text style={{color: '#ffffff'}}>esta orden ya fue tomada</Text>
        </TouchableOpacity>
      )}
      <Pressable style={styles.cost}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          {route.params.cost} NIO{' '}
        </Text>
      </Pressable>

      <Pressable style={styles.back} onPress={() => navigation.navigate('P3')}>
        <Text>
          <Icon name="angle-left" size={30} color="#000000" />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default memo(P4);
