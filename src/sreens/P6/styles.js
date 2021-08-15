import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  mapsize: {
    height: '100%',
    width: '100%',
  },

  endOrder: {
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 50,
    left: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  useMap: {
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 110,
    left: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  declineOrder: {
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 170,
    left: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderInfo: {
    width: '100%',
    height: 45,
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  cost: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  status: {
    width: 300,
    height: 50,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 300,

    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  back: {
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 170,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
