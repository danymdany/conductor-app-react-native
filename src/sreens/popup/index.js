import React, {useState} from 'react';
import {
  Text,
  RefreshControl,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import {updateOrder} from '../../graphql/mutation';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createCarInfo} from '../../graphql/mutation';

const NewOrderPopup = ({newOrder, onDecline, onAccept, location}) => {
  const carInfo = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo.username);

      const date = new Date();

      const input = {
        createdAt: date.toISOString(),
        type: newOrder.type,
        originLatitude: location.lat,
        originLongitude: location.lon,
        distance: 1,
        duration: 1,
        cost: 1,
        place: 'place',
        status: 'NEW',
        destLatitude: 0,

        destLongitude: 0,

        nota: 'test',
        userId: 9,
        carId: '1',
      };
      const response = await API.graphql(
        graphqlOperation(createCarInfo, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();

      const input = {
        id: newOrder.id,
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

  const presout = () => {
    console.log('pressss out');
  };

  const DATA = [newOrder];
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPressOut={onAccept}
      onPress={carInfo}
      onPressIn={order}
      style={[styles.item, backgroundColor]}>
      <Text style={[styles.title1, textColor]}>{item.type}</Text>
      <Text style={[styles.title2, textColor]}>{item.duration}min</Text>
      <Text style={[styles.title3, textColor]}>
        {item.cost} {''}C$
      </Text>
      <Text style={[styles.title4, textColor]}>{item.distance}Km</Text>
      <Text style={[styles.title4, textColor]}>{item.nota}</Text>

      <Text style={[styles.title2, textColor]}>
        {' '}
        {'  '}
        {item.place}
      </Text>

      <Text style={[styles.title5]}>{item.status}</Text>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#000000' : '#ffffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={newOrder}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default NewOrderPopup;
