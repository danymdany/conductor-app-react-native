import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Alert = () => {
  const route = useRoute();
  const navigator = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.userstate}</Text>
    </View>
  );
};

export default Alert;
