// screen to go at  map app
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  SectionList,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Br from '../bottomBr/bottomBar';
import Tr from '../bottomBr/topBar';
import {listOrders} from '../../graphql/query';
import {onCreateOrder, onUpdateOrder} from '../../graphql/real-time-order';
// require imports

const P3 = () => {
  const [newOrders, setNewOrders] = useState([]);

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

  const renderItem = ({item}) => (
    <Item
      title={item.nota}
      price={item.cost}
      place={item.place}
      duration={item.duration}
      distance={item.distance}
      name={item.type}
      status={item.status}
    />
  );

  const Item = ({title, price, place, name}) => (
    <View style={styles.item}>
      <View style={styles.item2}>
        <Text style={styles.infoPlace}>{place}</Text>
      </View>

      <View style={styles.item3}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.item4}>
        <Text style={styles.title}>{price} NIO </Text>
      </View>
      <View style={styles.item5}>
        <Text style={styles.title}>
          <Icon name="eye" size={18} color="#ffffff" />
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', backgroundColor: '#d8e3e7'}}>
        <Tr />

        <View style={{marginTop: 50}}>
          <FlatList
            data={newOrders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <Br />
    </SafeAreaView>
  );
};

export default P3;
