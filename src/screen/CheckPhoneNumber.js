import React, {useState,useEffect} from "react";
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,
  TextInput,Platform,Alert,ActivityIndicator } from "react-native";
import { COLORS, images } from '../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';
import * as Progress from "react-native-progress";
import Loader from '../components/Loader';
const DEVICE_WIDTH = Dimensions.get('window').width;



const CheckPhoneNumber = ({navigation})=>{  
 

  useEffect(() => {
    
    const willFocusSubscription = navigation.addListener('focus', () => {
      
    });
    return willFocusSubscription;

  }, [navigation]);


  

  return (
    <View style={{flex: 1}}>
       <Loader visible={showProcess}></Loader>
     
    </View>
  );
}

export default GiftExchange;

const styles = StyleSheet.create({
  
});