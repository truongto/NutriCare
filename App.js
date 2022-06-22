/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeApp from "./src/HomeApp";
import Login from "./src/Login";
import MemberUser from "./src/screen/MemberUser";
import GiftExchangeDetail from "./src/screen/GiftExchangeDetail";
import RegistrationScreen from "./src/screen/RegistrationScreen";
import CheckQR from "./src/screen/CheckQR";
import VerificationScreen from "./src/screen/VerificationScreen";
import RegistrationPhoneScreen from "./src/screen/RegistrationPhoneScreen";
import MyGift from "./src/screen/MyGift";
import ListGiftExchangeDetailScreen from "./src/screen/ListGiftExchangeDetail";
import CheckQRDetailsScreen from "./src/screen/CheckQRDetail";
import ImportCodeSpoonScreen from "./src/screen/ImportCodeSpoon";


import { CardStyleInterpolators } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, images } from './src/components/constants';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.bgTheme,
              height: 70,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '800',
              fontSiz: 17
            },
          }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeApp"  component={HomeApp} options={{ headerShown: false , gestureEnabled: false,}}/>
        <Stack.Screen name="MemberUser"  component={MemberUser} options={{ headerShown: false , gestureEnabled: false,}}/>
        <Stack.Screen name="GiftExchangeDetail" component={GiftExchangeDetail} options={{ headerShown: false , gestureEnabled: false,}} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false , gestureEnabled: false,}} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false , gestureEnabled: false,}} />
        <Stack.Screen name="RegistrationPhone" component={RegistrationPhoneScreen} options={{ headerShown: false , gestureEnabled: false,}} />
        <Stack.Screen name="ListGiftExchangeDetail" component={ListGiftExchangeDetailScreen} options={{ headerShown: false , gestureEnabled: false,}} />
        <Stack.Screen name="CheckQRDetails" component={CheckQRDetailsScreen} options={{ headerShown:false, gestureEnabled: false, }} />
        <Stack.Screen name="ImportCodeSpoon" component={ImportCodeSpoonScreen} options={{ headerShown:false, gestureEnabled: false, }} /> 
      
        <Stack.Screen name="MyGift" component={MyGift} 
         options={{ headerShown: true, 
            gestureEnabled: false,
            title:'Quà của tôi',
            headerTitleStyle: styles.headerTitle,
            headerShadowVisible: false,

        }}/>

        {/* <Stack.Screen name="CheckQR" component={CheckQR} options={{ headerShown: false , gestureEnabled: false,}} /> */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal', cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}>
       <Stack.Screen name="CheckQR" component={CheckQR} options={{ headerShown:false }} />
      </Stack.Group> */}
    </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100%',
      fontWeight:'800'
  },
});

export default App;
