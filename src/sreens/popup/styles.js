import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 230,
    backgroundColor: '#121212',
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
    backgroundColor: '#181818',
  },
  item: {
    backgroundColor: '#404040',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12.5,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoPlace: {
    color: '#fff',
    fontSize: 12.5,
  },

  his: {
    width: 55,
    height: 55,

    position: 'absolute',
    borderRadius: 100,
    top: 2,
    right: 10,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRightWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
