import React, {useState} from "react";
import { View, StyleSheet,Text ,Alert,Linking,TouchableOpacity,Dimensions} from "react-native";

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from 'react-native-vector-icons/Feather';
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { COLORS, images } from '../components/constants';
//https://github.com/moaazsidat/react-native-qrcode-scanner/issues/115

const CheckQR=({navigation})=>{  
  const onSuccess = e => {
   // Linking.openURL(e.data).catch(err => console.log(e.data))
   var dataText = String(e.data)
   let myArray = dataText.split("=");
   let qrCode = myArray[1];
   console.log("codeQR=> :",dataText)
    navigation.navigate('CheckQRDetails', {
      codeQR: qrCode,
    })
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.15
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  return (
  
      <View style={{flex: 1,alignItems: 'center', justifyContent: 'center' }}>
        {/* <View style={styles.toolBar}>
          <Text style={styles.textToolbar}>QR CODE SCANNER</Text>
        </View> */}
         <View style={styles.toolBar}>
         <TouchableOpacity style={{marginLeft: 10,marginTop:15,alignSelf: 'center',}} onPress={() => navigation.goBack()} title="Dismiss">
          <Feather name="arrow-left" color="#ffff" size={23} />
          </TouchableOpacity>
          <Text style={styles.textToolbar}>Xu tích lũy</Text>
        </View>

        <QRCodeScanner
          onRead={onSuccess}
          reactivate={true}
          showMarker={true}
          cameraStyle={{height: SCREEN_HEIGHT}}
          flashMode={RNCamera.Constants.FlashMode.auto}
          // topContent={
          //   <Text style={styles.centerText}>
          //     Go to{' '}
          //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          //     your computer and scan the QR code.
          //   </Text>
          // }
          // bottomContent={
          //   <TouchableOpacity style={styles.buttonTouchable}>
          //     <Text style={styles.buttonText}>OK. Got it!</Text>
          //   </TouchableOpacity>
          // }

          customMarker={
            <View style={styles.rectangleContainer}>
              <View style={styles.topOverlay}>
                <Text style={{fontSize: 30, color: 'white'}}>
                  QR CODE SCANNER
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={styles.leftAndRightOverlay} />
                <View style={styles.rectangle}>
                  <Icon
                    name="ios-scan-outline"
                    size={SCREEN_WIDTH * 0.68}
                    color={iconScanColor}
                  />
                  <Animatable.View
                    style={styles.scanBar}
                    direction="alternate-reverse"
                    iterationCount="infinite"
                    duration={1700}
                    easing="linear"
                    animation={makeSlideOutTranslation(
                      'translateY',
                      SCREEN_WIDTH * -0.5,
                    )}
                  />
                </View>

                <View style={styles.leftAndRightOverlay} />
              </View>

              <View style={styles.bottomOverlay} />
            </View>
          }
        />
      </View>

      
    
  );
}

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "red";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "#ffff";

export default CheckQR;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
 
//   toolBar: {
//     height: 70,
//     flexDirection: 'row',
//     backgroundColor: COLORS.bgTheme,
//  },

// textToolbar: {
//     // textAlign: 'center',
//     fontSize: 17,
//     color: 'white',
//     flex: 1,
//     marginTop: 15,
//     alignSelf: 'center',
//     fontWeight: '800',
//     marginLeft:'5%',
// },
toolBar: {
  height: 70,
  flexDirection: 'row',
  backgroundColor: COLORS.bgTheme,
},


textToolbar: {
  // textAlign: 'center',
  fontSize: 17,
  color: 'white',
  flex: 1,
  marginTop: 15,
  alignSelf: 'center',
  fontWeight: '800',
  marginLeft:'5%',
},
});