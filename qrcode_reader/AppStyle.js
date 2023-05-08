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
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnCamera: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
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
});