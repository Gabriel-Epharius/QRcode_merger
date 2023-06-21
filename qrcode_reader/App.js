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
  const [circleColors, setCircleColors] = useState(['red', 'red', 'red', 'red', 'red','red']);
  const slicedKey = ["1", "2", "3", "4", "5", "6"];


  

  const changeCircleColor = (index) => {
    const updateColors = [...circleColors];
    if (updateColors[index] === 'red') {
      updateColors[index] = 'green';
    } else {
      updateColors[index] = 'red';
    }
    setCircleColors(updateColors);
  };

  const handleBarcodeRead = (event) => {
    if (event.data) {
      setBarcode(event.data);
      console.log(event.type);
    }
  };

  const parseBarcode = (data) => {
    return null;
  }

  const eraseKeySlice = (index) => {
    const updateColors = [...circleColors];
    if (index >= 0 || index < 6) {
      slicedKey[index] = "";
      updateColors[index] = "red";
    }

    console.log(slicedKey[index]);
  }
  

  

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.saveArea}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>QRCode Merger</Text>
        </View>
      </SafeAreaView>

      <View style={styles.caption}>
        <Text style={styles.captionTitleText}>Welcome to ReactNative</Text>
      </View>

    

    {/* {barcode ? (
      <View style={[styles.rnCamera, styles.rnCameraResult]}>
        <Text style={styles.rnCameraResultText}>{barcode.data}</Text>
        <Text style={styles.rnCameraResultText}>{barcode.type}</Text>
      </View>
    ) : (
      <RNCamera 
        style={styles.rnCamera}
        onBarCodeRead={setBarcode}
        ></RNCamera>
    )} */}

    <RNCamera
      style={styles.rnCamera}
      onBarCodeRead={handleBarcodeRead}>
    </RNCamera>

    <View style={styles.circleContainer}>
      {circleColors.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.circle, {backgroundColor: color}]}
          onPress = { () => eraseKeySlice(index)}
          />
      ))}
    </View>


      <View style={styles.cameraControl}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}> Voltar </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default App;

// AppRegistry.registerComponent('App', () => ExampleApp);
