import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

import styles from './styles';

const SignIn = (props) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [loadState, setLoadState] = React.useState('');

  let input1 = username.replace(/\s+/g, '');
  let input2 = password.replace(/\s+/g, '');

  async function signIn() {
    try {
      setLoadState('start');
      await Auth.signIn(input1, input2).then(() => setLoadState('end'));
    } catch (error) {
      setLoadState('error');
    }
  }

  if (props.authState === 'signIn')
    return (
      <View style={styles.container}>
        <Text style={styles.title}> iniciar sesion</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>
            {' '}
            <Icon name="person-outline" size={15} color="#000" />
          </Text>
          <TextInput
            style={styles.input1}
            value={username}
            onChangeText={onChangeUsername}
            placeholder="nombre de usuario"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon2}>
            {' '}
            <Icon name="ios-eye-off-outline" size={15} color="#000" />
          </Text>
          <TextInput
            style={styles.input2}
            value={password}
            onChangeText={onChangePassword}
            placeholder="contraseña"
          />
        </View>
        <TouchableOpacity style={styles.press2} onPress={signIn}>
          <Text style={styles.info2}>
            {loadState === '' && 'iniciar sesion'}
            {loadState === 'start' && 'Verificando...'}
            {loadState === 'end' && 'Listo!'}
            {loadState === 'error' && 'algo salio mal'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomLinkLeft}
          onPress={() => props.onStateChange('signUp', {})}>
          <Text style={styles.info1}> Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
  else return <></>;
};

export default SignIn;
