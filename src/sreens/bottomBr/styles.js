import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    padding: 10,
    borderRadius: 25,
  },

  saldo: {
    position: 'absolute',
    borderRadius: 10,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saldo2: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 100,
    top: 0,
    marginTop: 50,
  },
  online: {
    position: 'absolute',

    width: 50,
    height: 300,
    alignSelf: 'center',
  },
  top: {
    position: 'absolute',
    width: '100%',
    height: 70,

    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#121212',
  },

  onlineorder: {
    position: 'absolute',
    backgroundColor: '#262626',
    width: '100%',
    height: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  online2: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  Text: {
    color: '#000000',
    fontWeight: 'bold',
  },

  Texton: {
    color: '#0B9300',
    fontWeight: 'bold',
    fontSize: 17,
  },

  Textof: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },

  info: {
    position: 'absolute',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info2: {
    position: 'absolute',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listo: {
    position: 'absolute',
    backgroundColor: '#1FD706',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info3: {
    position: 'absolute',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    width: 130,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text11: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  text12: {
    color: '#171717',
    fontWeight: 'bold',
    fontSize: 20,
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginLeft: 10,
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

  pres: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default styles;
