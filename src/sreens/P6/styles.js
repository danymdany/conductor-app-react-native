import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    top: 0,
  },

  ifoView: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ifoText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },

  costText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  Options: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    alignSelf: 'center',
    top: -20,
  },

  menu: {
    width: 180,
    height: 50,
    top: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  imgs: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 5,
  },

  press: {
    width: 55,
    height: 55,
    backgroundColor: '#ffffff',
    left: 10,
    borderRadius: 100,
    borderRightWidth: 0.3,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  texop: {
    marginLeft: 20,
    color: '#656565',
  },

  status: {
    color: '#000000',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },

  start: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    right: 10,
    borderRadius: 10,
    borderRightWidth: 0.3,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    position: 'absolute',
  },

  taked: {
    width: 200,
    height: 400,
    backgroundColor: 'red',
    right: 10,
    borderRadius: 10,
    borderRightWidth: 0.3,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    position: 'absolute',
  },
});

export default styles;
