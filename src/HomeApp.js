import React, {useState} from "react";
import { View, StyleSheet,Text,Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, images } from '../src/components/constants';
import Feather from 'react-native-vector-icons/Feather';
import Home from "../src/screen/Home";
import GiftExchange from "../src/screen/GiftExchange";
import Notification from "../src/screen/Notification";
import User from "../src/screen/User";
import CheckQR from "../src/screen/CheckQR";
import GiftExchangeDetail from "../src/screen/GiftExchangeDetail";
import CheckQRDetails from "../src/screen/CheckQRDetail";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const QRStack = createNativeStackNavigator();
const GiftExchangeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown:false }} />
       <HomeStack.Screen name="GiftExchangeDetail" component={GiftExchangeDetail} options={{ headerShown:false }} /> 
    </HomeStack.Navigator>
  );
}

function CheckQRStackScreen() {
  return (
    <QRStack.Navigator>
      <QRStack.Screen name="CheckQR" component={CheckQR} options={{ headerShown:false }} />
      <HomeStack.Screen name="CheckQRDetails" component={CheckQRDetails} options={{ headerShown:false }}  />
    </QRStack.Navigator>
  );
}
function GiftExchangeScreen() {
  return (
    <GiftExchangeStack.Navigator>
      <GiftExchangeStack.Screen name="GiftExchange" component={GiftExchange} options={{ headerShown:false }} />
      
    </GiftExchangeStack.Navigator>
  );
}

const HomeApp=({navigation})=>{  
  return (
    <Tab.Navigator
    // initialRouteName="Feed"
    // barStyle={{ }}
    screenOptions={{
      tabBarStyle: { height: 60, paddingBottom:8},
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight:'600'
      },
      tabBarInactiveTintColor: "#CCCCCC",
      // tabBarActiveTintColor: "#f5610a",
    }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false ,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="GiftExchange"
        component={GiftExchangeScreen}
        options={{
          headerShown: false ,
          tabBarLabel: 'Đổi quà',
          tabBarIcon: ({color, size}) => (
            <Feather name="gift" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="CheckQR"
        component={CheckQRStackScreen}
        
        options={{
          headerShown: false ,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                position: 'relative',
                bottom: 0, // space from bottombar
                height: 45,
                width: 45,
                // borderRadius: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:20,
              }}>
              <Image source={images.QRCode} style={{width: 45, height: 45}} />
            </View>
          ),
          tabBarOptions: { showLabel: false },
        }}
      
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false ,
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color, size}) => (
            <Feather name="bell" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false ,
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});