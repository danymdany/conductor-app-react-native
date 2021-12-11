import React, {useState, useEffect} from 'react';
import {View, Image, ImageBackground, BackHandler, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';

const P1 = () => {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('AuthFlow');
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('espera!', 'estas seguro que quieres salir de la app ', [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('P3'),
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  console.log('s');

  return (
    <ImageBackground
      source={require('../../animations/bg.jpg')}
      style={styles.image}>
      <View style={styles.view}>
        <Image
          style={styles.img}
          source={require('../../animations/logo.png')}
        />

        <LottieView
          source={require('../../animations/1.json')}
          autoPlay={true}
          loop={false}
          onAnimationFinish={move}
          style={{
            height: 1,
            width: 1,
            alignSelf: 'center',
            marginTop: 50,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default P1;
