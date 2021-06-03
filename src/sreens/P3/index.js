// screen to go at  map app
import React , {useEffect, useState} from 'react';
import {View,   SafeAreaView, ScrollView, Text,   SectionList,  FlatList
} from 'react-native';
 import {useNavigation, useRoute} from '@react-navigation/native';
 import {API, Auth, graphqlOperation} from 'aws-amplify';

import styles from './styles';
import Br from '../bottomBr/bottomBar'
import Tr from '../bottomBr/topBar'
import {listOrders} from '../../graphql/query'
import {onCreateOrder} from '../../graphql/real-time-order'
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
        const UIupdate = data.value.data.onCreateOrder;
        setNewOrders([UIupdate, ...newOrders]);
      },
    });
  }, []);
 
 
console.log(newOrders)

const Item = ({title, price, place, distance, duration, final, status}) => (
  <View style={styles.item}>
    <View style={styles.item2}>
    <Text style={styles.title}>nota :{title}</Text>
    <Text style={styles.title}>{price}C$</Text>
    <Text style={styles.title}>{distance}km</Text>
    <Text style={styles.title}>{duration}min</Text>
    <Text style={styles.title}>{place}</Text>
    <Text style={styles.title2}>{status}</Text>
    </View>
  </View>
);
const renderItem = ({item}) => (
  <Item
    title={item.nota}
    price={item.cost}
    place={item.place}
    duration={item.duration}
    distance={item.distance}
    status={item.status}

  />
);

  return (
  
      <SafeAreaView>
        <View style={{width:"100%", height:"100%", backgroundColor:"#d8e3e7"}}>
        <Tr/>
       
 
<View  style={{marginTop:50}}>
<FlatList
        data={newOrders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
</View>
        




</View>

<Br/>
      </SafeAreaView>
     
  );
};

export default P3;
