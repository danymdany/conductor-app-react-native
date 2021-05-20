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
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateOrder} from '../../graphql/mutation';
import {API, graphqlOperation, Auth} from 'aws-amplify';

const NewOrderPopup = ({newOrder, onDecline, onAccept}) => {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo.username);

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

  console.log(newOrder);

  const DATA = [newOrder];
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onAccept}
      onPressIn={order}
      style={[styles.item, backgroundColor]}>
      <Text style={[styles.title1, textColor]}>{item.type}</Text>
      <Text style={[styles.title2, textColor]}>{item.duration}min</Text>
      <Text style={[styles.title3, textColor]}>
        {item.cost} {''}C$
      </Text>
      <Text style={[styles.title4, textColor]}>{item.distance}Km</Text>
      <Text style={[styles.title2, textColor]}>
        {' '}
        B: {'  '}
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
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewOrderPopup;
