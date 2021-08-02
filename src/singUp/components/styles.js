import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    top: 20,
    left: 10,
    position: 'absolute',
  },

  info1: {
    color: '#000',
    fontWeight: 'bold',
  },
  info2: {
    color: '#000',
    fontSize: 16,
  },

  info3: {
    color: '#757474',
    fontSize: 11,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 10,
  },

  icon1: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 85,
    position: 'absolute',
  },
  icon2: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 20,
  },

  input1: {
    width: '90%',
    height: 45,
    borderColor: '#565656',
    borderWidth: 0.2,
    marginTop: 110,
    borderRadius: 10,
    paddingLeft: 10,
  },
  input2: {
    width: '90%',
    height: 45,
    borderColor: '#565656',
    borderWidth: 0.2,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },

  bottomLinkLeft: {
    marginTop: 10,
    bottom: 50,
    left: 50,
    position: 'absolute',
  },
  bottomLinkRight: {
    marginTop: 10,

    bottom: 50,
    right: 50,
    position: 'absolute',
  },

  press1: {
    width: '90%',
    height: 50,
    borderColor: '#565656',
    borderWidth: 0.3,
    marginTop: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  press2: {
    width: '90%',
    height: 50,
    marginTop: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
