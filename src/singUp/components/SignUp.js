import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

import styles from './styles';

const SignUp = (props) => {
  const [username, onChangeUsername] = React.useState('');
  const [loadState, setLoadState] = React.useState('');
  const [loadState2, setLoadState2] = React.useState('');

  const [password, onChangePassword] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [mistake, setMistake] = React.useState('');
  const [code, setCode] = React.useState('');

  let input1 = username.replace(/\s+/g, '');
  let input2 = password.replace(/\s+/g, '');
  let input3 = Email.replace(/\s+/g, '');
  let input4 = code.replace(/\s+/g, '');

  async function confirmSignUp() {
    try {
      setLoadState2('start');
      await Auth.confirmSignUp(input1, input4).then(() => setLoadState2('end'));
    } catch (error) {
      setLoadState2('error');
    }
  }

  async function GetCode() {
    try {
      setLoadState('start');

      await Auth.signUp({
        username: input1,
        password: input2,
        attributes: {
          email: input3,
        },
      }).then(() => setLoadState('end'));
    } catch (error) {
      setLoadState('error');
    }
  }

  if (props.authState === 'signUp')
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}> Crear una cuenta</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>
              <Icon name="mail-outline" size={15} color="#000" />
            </Text>
            <TextInput
              style={styles.input1}
              value={Email}
              onChangeText={onChangeEmail}
              placeholder="correo electronico"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon2}>
              <Icon name="ios-eye-off-outline" size={15} color="#000" />
            </Text>
            <TextInput
              style={styles.input2}
              value={password}
              onChangeText={onChangePassword}
              placeholder="contraseña"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon2}>
              <Icon name="person-outline" size={15} color="#000" />
            </Text>
            <TextInput
              style={styles.input2}
              value={username}
              onChangeText={onChangeUsername}
              placeholder="nombre y apellido"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon2}>
              <Icon name="md-lock-closed-outline" size={15} color="#000" />
            </Text>
            <TextInput
              style={styles.input2}
              value={code}
              onChangeText={setCode}
              placeholder="codigo"
              keyboardType="numeric"
            />

            {Email !== '' &&
              Email.length > 12 &&
              username !== '' &&
              password !== '' && (
                <TouchableOpacity style={styles.code} onPress={GetCode}>
                  <Text style={styles.codetxt}>
                    {loadState === '' && 'obtener el codigo'}
                    {loadState === 'start' && 'Verificando...'}
                    {loadState === 'end' && 'Revisa tu Email!!'}
                    {loadState === 'error' && 'error :('}
                  </Text>
                </TouchableOpacity>
              )}
          </View>

          <View>
            <Text style={styles.email}>
              <Icon name="ios-alert-circle-outline" size={15} color="#000" />
              {'  '} el codigo sera enviado a tu correo
            </Text>
          </View>

          {code !== '' && code.length > 5 && code.length < 7 && (
            <TouchableOpacity
              style={styles.press2}
              onPress={() => {
                confirmSignUp();
              }}>
              <Text style={styles.info2}>
                {loadState2 === '' && 'crear cuenta'}
                {loadState2 === 'start' && 'Verificando...'}
                {loadState2 === 'end' && 'Listo!'}
                {loadState2 === 'error' && 'error :('}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.bottomLinkRight}
            onPress={() => props.onStateChange('signIn', {})}>
            <Text style={styles.info1}>iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  else return <></>;
};

export default SignUp;
