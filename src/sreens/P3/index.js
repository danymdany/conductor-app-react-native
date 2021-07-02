// screen to go at  map app
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';

import styles from './styles';
import Tr from '../bottomBr/topBar';
import {listOrders, getCar, listCars} from '../../graphql/query';
import {onCreateOrder, onUpdateOrder} from '../../graphql/real-time-order';
import {createCar} from '../../graphql/mutation';

// require imports

const P3 = () => {
  const [newOrders, setNewOrders] = useState([]);
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
      console.log(userInfo.attributes.sub);

      if (!userInfo) {
        return;
      }
      // CHECK IF HAS A CAR
      const getCardata = await API.graphql(
        graphqlOperation(getCar, {
          id: userInfo.attributes.sub,
        }),
      );

      console.log(getCardata);

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

  const renderItem = ({item}) => (
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

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Tr />

        <View style={{marginTop: 71, marginBottom: 0}}>
          <FlatList
            data={newOrders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(P3);
