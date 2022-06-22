import React, {useState} from "react";
import { View, StyleSheet, Image, Dimensions,
    TextInput, TouchableOpacity, Text, ImageBackground,
    Alert, Platform} from "react-native";
import { COLORS } from '../components/constants';
import {Display} from '../components/utils';
import Feather from 'react-native-vector-icons/Feather';
import Loader from '../components/Loader';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';

const ChangeCodeSpoonOK = ({route,navigation})=>{  
    const {maCode} = route.params;
    const [nhapCodeSpoon, setNhapCodeSpoon] = useState('');
    const [showProcess, setShowProcess] = useState(false);

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>

      <View style={styles.toolBar}>
         <TouchableOpacity style={{marginLeft: 10,marginTop:15,alignSelf: 'center',}} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="#ffff" size={23} />
          </TouchableOpacity>
          <Text style={styles.textToolbar}>Đổi muỗng thành công</Text>
        </View>
     {/* <Loader visible={showProcess}></Loader> */}

     
   </View>
  )
}

export default ChangeCodeSpoonOK;

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop:20
      },
      headerTitle: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
        fontWeight:'600'
      },

    signinButton: {
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.bgTheme,
        marginLeft:40,
        marginRight:40,
        height:38
      },

      signinButtonText: {
        fontSize: 13,
        lineHeight: 18 * 1.4,
        color: COLORS.DEFAULT_WHITE,
       fontWeight:'800'
      },
      
      inputView: {
        height: 50,
        borderRadius: 5,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderBottomColor:COLORS.bgTheme,
        borderBottomWidth:1
      },
    
      input: {
        height: 50,
        flex: 1,
        fontSize: 19,
        color: '#333',
        fontWeight:'500',
      },

      title: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        marginTop: 40,
        marginHorizontal: 20,
        fontWeight:'600'
      },
      content: {
        fontSize: 15,
        marginTop: 20,
        marginHorizontal: 20,
        fontWeight:'800'
      },

      toolBar: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: COLORS.bgTheme,
      },
      
      
      textToolbar: {
        fontSize: 17,
        color: 'white',
        flex: 1,
        marginTop: 15,
        alignSelf: 'center',
        fontWeight: '800',
        marginLeft:'5%',
      },
    
});