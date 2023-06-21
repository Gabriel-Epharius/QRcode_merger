import {
    StyleSheet,
  } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '##F2F2FC',
  },
  saveArea: {
    backgroundColor: '#62d1bc',
  },
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff',
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionTitleText: {
    color: '#121B0D',
    fontSize: 16,
    fontWeight: '600'
  },
  btn: {
    width: 240,
    borderRadius: 2,
    backgroundColor: '#62d1bc',
    paddingVertical: 20,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginVertical: 8,
    marginTop: 30

  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  cameraControl: {
    marginTop: 0,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnCamera: {
    flex: 1,
    width: '60%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  rnCameraResult: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#eeeeee',
  },
  rnCameraResultText: {
    fontSize: 20,
    color: '#621dbc',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'red',
    marginTop: 60,
    marginHorizontal: 5,
  },
});