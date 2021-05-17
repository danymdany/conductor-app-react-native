import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateOrder} from '../../graphql/mutation';
import {API, graphqlOperation, Auth} from 'aws-amplify';

const NewOrderPopup = ({newOrder, onDecline, onAccept}) => {
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

  return (
    <View style={styles.root}>
      <Pressable style={styles.declineButton} onPress={onDecline}>
        <Text style={styles.declineText}>Cancelar</Text>
      </Pressable>

      <Pressable style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.uberType}>{newOrder.type}</Text>

          <View style={styles.userBg}>
            <Text>
              <Icon name="user" size={25} color="#ffffff" />
            </Text>
          </View>
        </View>

        <Text style={styles.nota}>{newOrder.nota}</Text>
        <Text style={styles.nota}>{newOrder.distance}Km</Text>
        <Text style={styles.nota}>{newOrder.duration}min</Text>
        <Text style={styles.nota}>{newOrder.cost}C$</Text>
        <Pressable
          style={styles.declineButton}
          onPress={onAccept}
          onPressIn={order}>
          <Text style={styles.declineText}>aceptar</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
