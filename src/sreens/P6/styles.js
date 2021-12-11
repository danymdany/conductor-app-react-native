import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  info1: {
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

  infotxt: {
    color: '#fff',
    padding: 5,
  },

  info2: {
    position: 'absolute',
    backgroundColor: '#121212',
    bottom: 240,
    right: 10,

    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderRadius: 10,
  },

  mapsize: {
    height: '100%',
    width: '100%',
  },
  textuser: {
    color: '#fff',

    fontWeight: 'bold',
    fontSize: 16,
    padding: 7,
  },
  View: {
    backgroundColor: '#121212',

    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 180,
  },

  text: {
    color: '#fff',

    padding: 7,
  },
  endOrder: {
    width: 45,
    height: 45,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 190,
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
    bottom: 310,
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
    bottom: 250,
    left: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderInfo: {
    backgroundColor: '#121212',
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 5,
  },
  distance: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 4,
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
    height: 40,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 400,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  back: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default styles;
