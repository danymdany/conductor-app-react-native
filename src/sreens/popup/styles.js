import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 230,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },

  txt: {
    color: '#ffffff',
    marginTop: 10,
  },

  view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#fff',
    padding: 47,
    marginVertical: 0,
    marginHorizontal: 2,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: 0.5,
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
    color: '#152939',
    fontWeight: 'bold',
    fontSize: 12.5,
  },
  name: {
    color: '#152939',
    fontWeight: 'bold',
  },
  infoPlace: {
    color: '#000000',
    fontSize: 12.5,
  },
});

export default styles;
