import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  Pressable,
  Switch,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {listOrders, getCar} from '../../graphql/query';
import {onCreateOrder, onUpdateOrder} from '../../graphql/real-time-order';
import {createCar, updateCar} from '../../graphql/mutation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import PushNotification from 'react-native-push-notification';
import BackgroundFetch from 'react-native-background-fetch';

const P3 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [newOrders, setNewOrders] = useState([]);
  const [online, setOneline] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    fetchOrders();
  }, []);

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

  useEffect(() => {
    const realTime = API.graphql(graphqlOperation(onCreateOrder)).subscribe({
      next: (data) => {
        fetchOrders();
        sms();
      },
    });
  }, []);

  useEffect(() => {
    const onUpdate = API.graphql(graphqlOperation(onUpdateOrder)).subscribe({
      next: (data) => {
        fetchOrders();
      },
    });
  }, []);

  useEffect(() => {
    const updateUsercar = async () => {
      // GET USER
      const userInfo = await Auth.currentAuthenticatedUser();

      if (!userInfo) {
        return;
      }
      // CHECK IF HAS A CAR
      const getCardata = await API.graphql(
        graphqlOperation(getCar, {
          id: userInfo.attributes.sub,
        }),
      );

      if (!!getCardata.data.getCar) {
        console.log('user has a car ');
      }
      // IF NOT ,  CREATE A CAR

      const NewCar = {
        id: userInfo.attributes.sub,
        type: 'taxi',
        latitude: 11,
        longitude: 0,
        heading: 1,
        oneline: true,
        userId: userInfo.attributes.sub,
      };
      await API.graphql(
        graphqlOperation(createCar, {
          input: NewCar,
        }),
      );
    };

    updateUsercar();
  }, []);

  const ofline = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();

    try {
      const input = {
        id: userInfo.attributes.sub,
        oneline: false,
        type: 'out-road',
      };

      const response = await API.graphql(
        graphqlOperation(updateCar, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const oneline = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();

    try {
      const input = {
        id: userInfo.attributes.sub,
        oneline: true,
        type: 'taxi',
      };

      const response = await API.graphql(
        graphqlOperation(updateCar, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const renderItem = ({item}) => {
    var lat1 = item.originLatitude;
    var lon1 = item.originLongitude;
    var lat2 = lat;
    var lon2 = lon;

    function distance(lat1, lon1, lat2, lon2, unit) {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == 'K') {
          dist = dist * 1.609344;
        }
        if (unit == 'N') {
          dist = dist * 0.8684;
        }
        return dist.toFixed(0);
      }
    }

    const cal = distance(lat1, lon1, lat2, lon2);

    if (cal <= 3) {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate('P4', {
              origenA: item.originLatitude,
              origenB: item.originLongitude,
              destinoA: item.destLatitude,
              destinoB: item.destLongitude,
              cost: item.cost,
              name: item.type,
              nota: item.nota,
              lat: route.params.lat,
              lon: route.params.lon,
              place: item.place,
              id: item.id,
              carid: item.carId,
            })
          }>
          <View style={styles.item2}>
            <Text style={styles.infoPlace}>{item.place}</Text>
          </View>

          <View style={styles.item3}>
            <Text style={styles.name}>{item.type}</Text>
          </View>
          <View style={styles.item4}>
            <Text style={styles.title}>{item.cost} NIO </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

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

  useEffect(() => {
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 0.1, // fetch interval in minutes
      },
      async (taskId) => {
        console.log('Received background-fetch event: ', taskId);

        // 3. Insert code you want to run in the background, for example:

        fetchOrders();
        // Call finish upon completion of the background task
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.error('RNBackgroundFetch failed to start.');
      },
    );
  });

  const sms = () => {
    PushNotification.configure({
      // onNotification is called when a notification is to be emitted
      onNotification: () => console.log(''),

      // Permissions to register for iOS

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });

    PushNotification.createChannel({
      channelId: 'pop',
      channelName: 'test',
    });

    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: 'pop', // (required) channelId, if the channel doesn't exist, notification will not trigger.

      title: 'conductor', // (optional)
      message: 'Nueva orden!!!! ', // (required)
      soundName: 'default',
      playSound: true,
    });
  };
  const toggleSwitch = () => {
    setOneline(!online);
  };

  const checkOneline = () => {
    if (online === true) {
      console.log(online);

      oneline();
    }
    if (online === false) {
      console.log(online);

      ofline();
    }
  };

  useEffect(() => {
    checkOneline();
  }, [toggleSwitch]);
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', backgroundColor: '#181818'}}>
        <Pressable style={[styles.top, {top: 0}]}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={online ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={online}
          />
          <View style={styles.oneline}>
            {online ? (
              <Text style={styles.onelinetxt}>oneline</Text>
            ) : (
              <Text style={styles.oflinetxt}>offline</Text>
            )}
          </View>
          <View style={styles.pres}>
            <Text style={styles.wallet}>
              {12912}
              {'  '} <Icon name="wallet-outline" size={20} color="#ffffff" />
            </Text>
          </View>
        </Pressable>
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

        {online === true && (
          <View style={{marginTop: 71, marginBottom: 0}}>
            <FlatList
              data={newOrders}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.history}
          onPressIn={() => navigation.navigate('P5')}>
          <Icon name="bar-chart-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default P3;
