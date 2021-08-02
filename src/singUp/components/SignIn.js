import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

import styles from './styles';

const SignIn = (props) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  let input1 = username.replace(/\s+/g, ',');
  let input2 = password.replace(/\s+/g, '');

  async function signIn() {
    try {
      const user = await Auth.signIn(input1, input2);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  if (props.authState === 'signIn')
    return (
      <View style={styles.container}>
        <Text style={styles.title}> iniciar sesion</Text>

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
          placeholder="contraseña"
        />
        <TouchableOpacity style={styles.press2} onPress={signIn}>
          <Text style={styles.info2}>iniciar sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomLinkLeft}
          onPress={() => props.onStateChange('signUp', {})}>
          <Text style={styles.info1}>crear una cuenta</Text>
        </TouchableOpacity>
      </View>
    );
  else return <></>;
};

export default SignIn;
