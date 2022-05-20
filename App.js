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
} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeApp from "./src/HomeApp";
import Login from "./src/Login";
import MemberUser from "./src/screen/MemberUser";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View>
    //   <Text>OKaaaaa</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeApp"  component={HomeApp} options={{ headerShown: false , gestureEnabled: false,}}/>
        <Stack.Screen name="MemberUser"  component={MemberUser} options={{ headerShown: false , gestureEnabled: false,}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
