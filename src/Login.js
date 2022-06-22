import React, {useState,useEffect} from "react";
import { View, StyleSheet, Image, Dimensions,
   TextInput, TouchableOpacity, Text, ImageBackground,
   Alert, Platform} from "react-native";
import { COLORS, images } from '../src/components/constants';
import {CheckBox,Icon} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Iconss from 'react-native-vector-icons/Ionicons';
import AppContent from '../src/appContent/AppContent'
import * as AppApi from '../src/networking';
import * as Progress from "react-native-progress";
import storeData from '../src/dataClient/StoreData';
import Loader from './components/Loader';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import Toast from 'react-native-simple-toast';

const Login = ({navigation})=>{ 

  const [sdtDangNhap, setSdtDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [showProcess, setShowProcess] = useState(false);
  const [remember, setRemember] = useState(false);
  const [eyeName, setEyeName] = useState('eye-off-outline');
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      layThongTinDangNhap();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);

    const layThongTinDangNhap = async () => {
          let rememberData = await storeData.getStoreDataValue('rememberUser');
          setRemember(rememberData);

          if(rememberData){
            let userName = await storeData.getStoreDataValue('UserNamePhone');
            let passWord = await storeData.getStoreDataValue('PassWord');
            if(userName !== undefined && passWord !== undefined) {
              setSdtDangNhap(userName);
              setMatKhau(passWord);
            }else{
              setSdtDangNhap('');
              setMatKhau('');
            }
          }else{
            setSdtDangNhap('');
            setMatKhau('');
          }
       
      }

      const checkLogIn = () => {   
        console.log("TenDangNhap",sdtDangNhap);
        if(sdtDangNhap === '' && matKhau === ''){
          Alert.alert('Thông báo', 'Vui lòng nhập đủ thông tin đăng nhập')
        }else{
          startLogin()
        }
      }

    const startLogin = () => {   
        var paramsBody = {
          Phone: sdtDangNhap,
          Password: matKhau,
        };
       
        setShowProcess(true)
        var urlList = AppContent.URL_LOGIN
        var URL = AppContent.BASE_URL + urlList
          AppApi.RequestPOST(URL, paramsBody, AppContent.Token, (err, json) => {
            if(!err){
                if(json.status == 1){
                  AppContent.UserLoin = json.CustomerInfo
                  Toast.show('Đăng nhập thành công', Toast.LONG);
                  storeData.setStoreDataValue("UserNamePhone",sdtDangNhap);
                  storeData.setStoreDataValue("PassWord", matKhau);
                  storeData.setStoreDataValue('rememberUser', remember);
                  setShowProcess(false)
                  navigation.navigate('HomeApp')
                }else{
                  setShowProcess(false)
                  Toast.show(String(json.Mess), Toast.LONG);
                }
            }else{
              setShowProcess(false)
                Alert.alert('Mất kết nối', 'Không thể kết nối được tới sever')
            }
        })
      }

      const imageClick = () => {
        setShowPassword(!showPassword);
        setEyeName(!showPassword ?  'eye-outline' : 'eye-off-outline');
      };

      const onPressCheckBox = async () => {
        setRemember(!remember)
      }
  

      const renderProcess = () => {
        if (showProcess) {
            return (
                <View style={{position: 'absolute', height: '100%', width: '100%'}}>
                    <View style={{position: 'absolute', bottom: '50%', alignSelf: 'center'}}>
                        <View style={{
                            backgroundColor: 'rgba(10,10,10,0.5)',
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {Platform.OS === 'android' ? <ActivityIndicator size="large" color="white"/> :
                                <Progress.CircleSnail color={'white'}/>}
                                
                            <Text style={{color: 'white', paddingTop: 5}}>Đang tải ...</Text>
                        </View>
                    </View>
                </View>
            );

        } else {
            return null;
        }
    };
   
    var eyeImgComponet = eye => {
      if (eye == true) {
        return (
          <TouchableOpacity
            onPress={() => {
              imageClick();
            }}
            style={styles.inlineEndImg}>
            <Iconss name={eyeName} style={{fontSize: 23, color: '#ABB4BD'}} />
          </TouchableOpacity>
        );
      } else {
        return null;
      }
    };
    
   


  return (
    <View style={styles.container}>
      <Loader visible={showProcess}></Loader>

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
              placeholder="Nhập số điện thoại"
              autoCapitalize="none"
              value={sdtDangNhap}
              keyboardType="numeric"
              onChangeText={value => {
                setSdtDangNhap(value);
              }}
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
              secureTextEntry= {true ? !showPassword : false}
              autoCapitalize="none"
              value={matKhau}
              onChangeText={value => {
                setMatKhau(value);
              }}

            />
            {eyeImgComponet(true)}
          </View>
          
          <CheckBox
            containerStyle={{
              marginLeft: 10,
              width: '100%',
              backgroundColor: 'white',
              marginTop: 10,
              borderWidth: 0,
            }}
            textStyle={{fontSize:15}}
            title={'Lưu đăng nhập'}
            checked={remember}
            onPress={()=> {
              onPressCheckBox()
            }}
          />
          <TouchableOpacity style={styles.loginButton} onPress={() => checkLogIn() }>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
        <View  style={{flexDirection:'row',marginTop:40,justifyContent:'center'}}>
          <Text
              style={{
                color: COLORS.black,
                fontWeight: '400',
                textAlign: 'center',
                fontSize: 15,
              }}>
              Bạn chưa có tài khoản? 
            </Text>
            <Text> </Text>
            <Text
              onPress={() => 
                {
                   navigation.navigate('RegistrationPhone')
                  // navigation.navigate('Verification')
                
                 }}
              style={{
                color: COLORS.black,
                fontWeight: '600',
                textAlign: 'center',
                fontSize: 15,
                color:'#33CCFF'
              }}>
              Đăng kí ngay!
            </Text>
        </View>
        
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
    height: '27%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:20
  },
  logo: {
    position: 'relative',
    width: '80%',
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
    height: 48,
    borderRadius: 5,
    backgroundColor: '#f1f3f6',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 15,
    color: '#333',
    marginTop: 5,
    // textAlign:'center'
  },
  loginButton: {
    backgroundColor: COLORS.bgTheme,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height:45,
    justifyContent:'center',
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
 
    fontSize: 17,
    fontWeight:'700',
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
  inlineEndImg: {
    position: 'absolute',
    zIndex: 99,
    width: 30,
    height: 30,
    right: 12,
    justifyContent:'center'
  },

  loginButtonDK: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth:1.5,
    borderColor: COLORS.button,
    marginTop: 20,
    marginLeft: 45,
    marginRight: 45,
    height:40,
  },
  loginButtonTextDK: {
    color: COLORS.button,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight:'700',
    marginLeft: 10,
  },

});