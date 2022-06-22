import React, {useState} from "react";
import { View, StyleSheet, Image, Dimensions,
    TextInput, TouchableOpacity, Text, ImageBackground,
    Alert, Platform} from "react-native";
import { COLORS } from '../components/constants';
import {Display} from '../components/utils';
import Feather from 'react-native-vector-icons/Feather';

const RegistrationPhoneScreen=({navigation})=>{  
    //  const { navigation } = props;
    const [nhapSDT, setNhapSDT] = useState('');

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>

     <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={30}/>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng kí số điện thoại</Text>
      </View>

     
      <Text style={styles.content}>
       Nhập số điện thoại {' '}
      </Text>

      <View style={styles.inputView}>
        <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại"
                autoCapitalize="none"
                value={nhapSDT.length}
                keyboardType="numeric"
               
                onChangeText={value => {
                    setNhapSDT(value);
                }}
               
                />
     </View>  
    <TouchableOpacity
        style={[styles.signinButton,{backgroundColor: nhapSDT.length >= 9 ? COLORS.bgTheme : COLORS.DARK_FIVE }]}
        onPress={() => {navigation.navigate('Verification')}}>
        <Text style={styles.signinButtonText}>Tiếp theo</Text>
      </TouchableOpacity>
   </View>
  )
}

export default RegistrationPhoneScreen;

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
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: COLORS.DEFAULT_WHITE,
        // fontFamily: Fonts.POPPINS_MEDIUM,
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
      },
});