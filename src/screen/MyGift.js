
import React, {useState,useEffect} from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,ImageBackground } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import E_Voucher from "./E_Voucher";
import Gift from "./Gift";
import { COLORS, images } from '../components/constants';
const Tab = createMaterialTopTabNavigator();

const MyGift = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Feather
          name="arrow-left"
          size={22}
          color="white"
          style={{ marginRight: 7, marginTop: 1, marginLeft: 3 }}
          onPress={() => navigation.goBack()}
        
        />
      ),
    });
  }, [navigation]);

  return (
     
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 14,fontWeight:'700',color: COLORS.bgTheme },
            tabBarStyle: { backgroundColor: '#fff', marginTop:0 },
            swipeEnabled: false,
        }}  
    >
      <Tab.Screen name="Gift" component={Gift} options={{tabBarLabel: 'Quà tặng'}} />
      <Tab.Screen name="EVoucher" component={E_Voucher} options={{tabBarLabel: 'E-Voucher'}}/>
    </Tab.Navigator>
  );


}
export default MyGift;