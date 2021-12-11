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
    color: '#fff',
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
  inputIcon: {
    marginBottom: -111,
    marginRight: -20,
  },

  inputIcon2: {
    marginBottom: -25,
    marginRight: -20,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  input1: {
    width: '90%',
    height: 45,
    borderBottomColor: '#454545',
    borderBottomWidth: 0.3,
    marginTop: 110,

    paddingLeft: 30,
  },

  input2: {
    width: '90%',
    height: 45,
    borderBottomColor: '#454545',
    borderBottomWidth: 0.3,
    marginTop: 20,

    paddingLeft: 30,
  },

  code: {
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderColor: '#004DFF',
    borderRadius: 10,
    marginLeft: -115,
    marginBottom: -15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  codetxt: {
    color: 'rgb(7, 90, 255)',
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
    backgroundColor: '#286EFA',
    marginTop: 30,
    width: 340,
    height: 47,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#000000',
    borderWidth: 0.2,

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },

  mistake: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default styles;
