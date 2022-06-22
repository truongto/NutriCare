import React, {useState} from "react";
import { View, StyleSheet,Text,Image,FlatList } from "react-native";
import { COLORS, images } from '../components/constants';

const E_Voucher=({navigation})=>{  


  return(
    <View style={{flex:1}}>
    <Text >VOucher</Text>
  </View>
  )
}

export default E_Voucher;

const styles = StyleSheet.create({
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

textphone:{
  fontSize: 12,
  color: '#666',
  marginTop: 4,
}, 
viewUser:{
  backgroundColor: '#fff',
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius:8,
  borderColor: '#dfe4ea',
  marginBottom:5,
  marginLeft: 10,
  marginRight:10,
},
 
});