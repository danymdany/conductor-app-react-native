import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewOrderPopup = ({
  newOrder,
  onDecline,
  onAccept,

  nota,
}) => {
  return (
    <View style={styles.root}>
      <Pressable style={styles.declineButton} onPress={onDecline}>
        <Text style={styles.declineText}>Cancelar</Text>
      </Pressable>

      <Pressable style={styles.popupContainer} onPress={onAccept}>
        <View style={styles.row}>
          <Text style={styles.uberType}>{newOrder.type}</Text>

          <View style={styles.userBg}>
            <Text>
              <Icon name="user" size={25} color="#ffffff" />
            </Text>
          </View>
        </View>
        <Text style={styles.nota}>km</Text>
        <Text style={styles.nota}>min</Text>

        <Text style={styles.nota}>{newOrder.nota}</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
