import React from 'react';
import {Text, Pressable, SafeAreaView, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

const Tr = () => {
  return (
    <SafeAreaView>
      <Pressable style={[styles.top, {top: 0}]}>
        <View style={{left: 10, top: 10}}>
          <Text style={styles.texto}>órdenes</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Tr;
