import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import { COLORS } from '../components/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';
import Toast from 'react-native-simple-toast';

const RegistrationScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Vui lòng nhập email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Nhập email không hợp lệ', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Vui lòng nhập họ tên', 'Họ tên');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Vui lòng nhập số điện thoại', 'Số điện thoại');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Vui lòng nhập mật khẩu', 'Mật khẩu');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Mật khẩu không được nhỏ hơn 5 kí tự', 'Mật khẩu');
      isValid = false;
    }

    if (isValid) {
        registerStart();
    }

  };

  const registerStart = () => {
    var paramsBody = {
      Phone: inputs.phone,
      Password: inputs.password,
      FullName:inputs.fullname,
      Email:inputs.email
    };
    setLoading(true)
    var urlList = AppContent.URL_CREATE_ACCOUNT
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestPOST(URL, paramsBody, AppContent.Token, (err, json) => {
        if(!err){
            if(json.Status != 0){
              setLoading(false)
              navigation.navigate('Login')
              Toast.show('Đăng kí tài khoản thành công', Toast.LONG);
            }else{
              setLoading(false)
              Toast.show(String(json.Mess) , Toast.LONG);
            }
        }else{
            setLoading(false)
            Alert.alert('Mất kết nối', 'Không thể kết nối được tới sever')
        }
    })

  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 35, fontWeight: 'bold'}}>
          Đăng kí tài khoản
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 16, marginVertical: 10}}>
         Nhập thông tin đăng kí
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Nhập địa chỉ Email"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Họ tên"
            placeholder="Nhập tên người dùng"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            error={errors.password}
            password
          />
          <Button title="Đăng kí tài khoản" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
           Đã có tài khoản ?Đăng nhập
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;