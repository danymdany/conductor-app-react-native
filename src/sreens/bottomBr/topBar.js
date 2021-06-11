import React from 'react';
import {Text, Pressable, SafeAreaView, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

const Tr = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable style={[styles.top, {top: 0}]}>
        <Pressable
          style={{alignSelf: 'center', marginLeft: 10, marginRight: 20}}
          onPress={() => navigation.navigate('P2')}>
          <Text>
            <Icon name="angle-left" size={35} color="#000000" />
          </Text>
        </Pressable>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.texto}>órdenes</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Tr;
