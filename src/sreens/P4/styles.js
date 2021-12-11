import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  custom: {
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text21: {
    color: '#fff',

    padding: 7,
  },

  textuser: {
    color: '#fff',

    fontWeight: 'bold',
    fontSize: 16,
    padding: 7,
  },
  textbt: {
    color: '#fff',

    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
  },
  View: {
    backgroundColor: '#121212',

    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 180,
  },

  back: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'absolute',

    top: 10,
    left: 10,
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  item2: {
    width: 300,
    height: 60,

    marginLeft: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
  },
  item22: {
    width: 300,
    height: 30,

    marginTop: 30,
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
    width: 73,
    height: 30,

    margin: 10,
    position: 'absolute',
    borderRadius: 5,
    bottom: 0,
    right: 0,
  },

  acept: {
    position: 'absolute',
    backgroundColor: '#121212',
    bottom: 190,
    right: 10,

    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderRadius: 10,
  },
  timeout: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    width: 200,
    height: 40,
    backgroundColor: '#CE0101',
    position: 'absolute',

    bottom: 130,
    left: 5,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  end: {
    width: 40,
    height: 40,
    backgroundColor: '#D51E1E',
    position: 'absolute',

    bottom: 150,
    left: 10,
    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  costxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cost: {
    position: 'absolute',

    right: 5,
    top: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
