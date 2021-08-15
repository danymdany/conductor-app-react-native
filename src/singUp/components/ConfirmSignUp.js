import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

import styles from './styles';

const ConfirmSignUp = (props) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [mistake, setMistake] = React.useState('');

  let input1 = username.replace(/\s+/g, '');
  let input2 = password;

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(input1, input2);
      return props.onStateChange('signIn', {});
    } catch (error) {
      console.log('error confirming sign up', error);
      setMistake('codigo incorrecto o nombre de usuario');
    }
  }
  if (props.authState === 'confirmSignUp')
    return (
      <View style={styles.container}>
        <Text style={styles.title}>confirmar codigo </Text>

        <Text style={styles.icon1}>
          <Icon name="person-outline" size={15} color="#000" />
        </Text>
        <TextInput
          style={styles.input1}
          value={username}
          onChangeText={onChangeUsername}
          placeholder="nombre de usuario"
        />
        <Text style={styles.icon2}>
          <Icon name="ios-eye-off-outline" size={15} color="#000" />
        </Text>
        <TextInput
          style={styles.input2}
          value={password}
          onChangeText={onChangePassword}
          placeholder="codigo"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.press2} onPress={confirmSignUp}>
          <Text style={styles.info2}>confirmar </Text>
        </TouchableOpacity>
        <Text style={styles.mistake}>{mistake}</Text>
        <TouchableOpacity
          style={styles.bottomLinkLeft}
          onPress={() => props.onStateChange('signIn', {})}>
          <Text style={styles.info1}>iniciar sesion</Text>
        </TouchableOpacity>
      </View>
    );
  else return <></>;
};

export default ConfirmSignUp;
