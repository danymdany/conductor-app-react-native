import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  erroTxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  error: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#404040',
    padding: 47,
    marginVertical: 0,
    marginHorizontal: 2,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 0.5,
  },
  top: {
    position: 'absolute',
    width: '100%',
    height: 70,

    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#121212',
    borderBottomColor: '#898989',
    borderBottomWidth: 0.2,
  },
  pres: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

    right: 10,
  },

  wallet: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  history: {
    width: 45,
    height: 45,

    position: 'absolute',
    borderRadius: 100,

    right: 10,
    bottom: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2: {
    width: 300,
    height: 60,

    marginTop: 35,
    marginLeft: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  item3: {
    width: 100,
    height: 20,

    margin: 10,
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    left: 0,
  },
  item4: {
    width: 68,
    height: 30,

    margin: 10,
    position: 'absolute',
    borderRadius: 5,
    bottom: 0,
    right: 0,
  },
  item5: {
    width: 30,
    height: 30,

    margin: 10,
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    right: 0,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12.5,
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  infoPlace: {
    color: '#ffffff',
    fontSize: 12.5,
  },

  oneline: {
    marginLeft: 10,
  },

  onelinetxt: {
    color: 'green',
    fontSize: 15,
  },
  oflinetxt: {
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
