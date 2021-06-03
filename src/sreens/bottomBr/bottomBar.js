import React from 'react';
import {Text,  Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

const Br = () => {
   
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable style={[styles.online, {bottom: 0}]}   >
<Pressable style={styles.saldo2}onPress={() => navigation.navigate('P2')}>
  <Text>
  <Icon name="home" size={25} color="#ffffff" />

  </Text>
</Pressable>
<Pressable style={styles.saldo2}onPress={() => navigation.navigate('P3')}>
  <Text>
  <Icon name="automobile" size={20} color="#ffffff" />

  </Text>
</Pressable><Pressable style={styles.saldo2}onPress={() => navigation.navigate('P3')}>
  <Text>
  <Icon name="user" size={20} color="#ffffff" />

  </Text>
</Pressable>

      </Pressable>

     
    </SafeAreaView>
  );
};

export default Br;
