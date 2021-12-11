import React from 'react';
import {Text, Pressable, View, ImageBackground} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';

const Tr = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={[styles.top, {top: 0}]}>
      <View style={styles.logo}>
        <ImageBackground
          style={styles.imgs}
          source={require('../../animations/logo.png')}></ImageBackground>
      </View>

      <Pressable
        style={styles.pres}
        onPressIn={() => navigation.navigate('P5')}>
        <Text>
          <Icon name="user" size={30} color="#ffffff" />
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default Tr;
