import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#00000099',
  },
  popupContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  minutes: {
    color: 'lightgrey',
    fontSize: 36,
  },
  distance: {
    color: 'lightgrey',
    fontSize: 26,
  },
  uberType: {
    color: 'lightgrey',
    fontSize: 20,
    marginHorizontal: 10,
  },

  nota: {
    color: 'lightgrey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userBg: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineButton: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
  },
  declineText: {
    color: 'black',
    fontWeight: 'bold',
  },

  scrollView: {},
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
  },
  title3: {
    fontSize: 15,
  },
  title4: {
    fontSize: 15,
  },

  title5: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#18C800',
  },
});

export default styles;
