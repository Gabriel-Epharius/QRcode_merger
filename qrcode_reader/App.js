// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, {PureComponent, useState} from 'react';
import type {Node} from 'react';

import {styles} from './AppStyle'; 

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { RNCamera} from 'react-native-camera';


// appStyles.rnCamera;

const App: () => Node = () => {

  const [barcode, setBarcode] = useState(null);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.saveArea}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>ReactNative Scanner</Text>
        </View>
      </SafeAreaView>

      <View style={styles.caption}>
        <Text style={styles.captionTitleText}>Welcome to ReactNative</Text>
      </View>

    {barcode ? (
      <View style={[styles.rnCamera, styles.rnCameraResult]}>
        <Text style={styles.rnCameraResultText}>{barcode.data}</Text>
        <Text style={styles.rnCameraResultText}>{barcode.type}</Text>
      </View>
    ) : (
      <RNCamera 
        style={styles.rnCamera}
        onBarCodeRead={setBarcode}
        ></RNCamera>
    )}

      <View style={styles.cameraControl}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>New QR Scan</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};




export default App;

// AppRegistry.registerComponent('App', () => ExampleApp);
