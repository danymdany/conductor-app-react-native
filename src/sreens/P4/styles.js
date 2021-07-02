import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  custom: {
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#171717',
  },
  text21: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  View: {
    backgroundColor: '#fff',

    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 125,
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
    width: 55,
    height: 55,
    backgroundColor: '#171717',
    position: 'absolute',

    bottom: 200,
    right: 10,
    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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

  cost: {
    width: 200,
    height: 40,
    position: 'absolute',

    top: 10,

    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;
