import React, {useState} from "react";
import { View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Text, ImageBackground } from "react-native";
import { COLORS, images } from '../src/components/constants';
import { Icon, CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Login=({navigation})=>{ 
  
  return (
    <View style={styles.container}>
     {/* <View  style={{
        
        }} >
      <Image
        style={{
        width:DEVICE_WIDTH - 60
        }}
        source={images.logo}
      
      /> 
      </View> */}
      <View style={styles.logoView} >
                    <Image source={images.logo} style={styles.logo} />
        </View>
      
      <View style={styles.bottomView} animation="fadeInUp" delay={1200}>
        <View style={styles.inputView}>
          <Icon
            style={styles.inputIcon}
            name="person"
            type="ionicons"
            color={COLORS.button}
          />
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={styles.inputIcon}
            name="lock"
            type="ionicons"
            color={COLORS.button}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            // secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity>
            <Feather
              name="eye-off"
              color="grey"
              size={20}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 10,
            borderWidth: 0,
          }}
          title={'Lưu đăng nhập'}
          // checked={checkBoxValue}
          // onPress={()=> {console.log("ok con de");}}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeApp')}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.errButton}>
          <Feather name="alert-triangle" color={'red'} size={25} />
          <Text style={styles.loginButtonText}>Báo cáo sự cố</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: '#ffff',
  },
  logoView: {
    width: '80%',
    height: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    position: 'relative',
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  titleText: {
    position: 'absolute',
    // top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: '#fff',
    opacity: 0.95,
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    // marginTop: 50,
  },
  loginText: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 42,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    // textAlign:'center'
  },
  loginButton: {
    backgroundColor: COLORS.button,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 45,
    marginRight: 45,
  },
  errButton: {
    backgroundColor: COLORS.buttonErr,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
    marginLeft: 10,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#5352ed',
  },
});