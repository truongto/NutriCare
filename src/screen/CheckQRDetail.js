import React, {useState, useEffect} from "react";
import { View, StyleSheet,Text,ScrollView,Dimensions,Image,TouchableOpacity,Alert} from "react-native";
import CustomTextDetail from '../../src/components/custom/CustomTextDetail';
import { COLORS, images} from '../components/constants';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';
import Loader from '../components/Loader';
import Feather from 'react-native-vector-icons/Feather';
const DEVICE_WIDTH = Dimensions.get('window').width;
import Moment from 'moment';
import Toast from 'react-native-simple-toast';

const CheckQRDetail=({route,navigation})=>{  
    const {codeQR} = route.params;
    const [showProcess, setShowProcess] = useState(false);
    const [dataInfo, setDataInfo] = useState({});

    useEffect(() => {
      // const willFocusSubscription = navigation.addListener('focus', () => {
        
      // });
      // return willFocusSubscription;
      getInfo()
    }, [navigation]);


    const getInfo = () => {
      setShowProcess(true)
      var urlList = AppContent.URL_GET_INFO_PRODUCT + "code=" + String(codeQR)
      var URL = AppContent.BASE_URL + urlList
        AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
          setShowProcess(false)
          if(!err){
              if(json.status == 1){
                setDataInfo(json.ProductInfo)
              }else{
                Toast.show(String(json.Mess), Toast.LONG);
              }
          }else{
              Alert.alert('Mất kết nối', 'Không thể kết nối được tới sever')
          }
      })
    }

  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
    <View style={styles.toolBar}>
         <TouchableOpacity style={{marginLeft: 10,marginTop:15,alignSelf: 'center',}} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="#ffff" size={23} />
          </TouchableOpacity>
          <Text style={styles.textToolbar}>Thôn tin sản phẩm</Text>
        </View>
     <Loader visible={showProcess}></Loader>

    <View style={styles.textNameView}>
    <Text style={styles.textName}>Mã sản phẩm</Text>
    <Text style={styles.textNameV2}>{dataInfo.ProductCode}</Text>
   </View>

    <View style={styles.textNameView}>
    <Text style={styles.textName}>Tên sản phẩm</Text>
    <Text style={styles.textNameV2}>{dataInfo.Name}</Text>
   </View>

   <View style={styles.textNameView}>
    <Text style={styles.textName}>Cân nặng</Text>
    <Text style={styles.textNameV2}>{dataInfo.Weigh} {dataInfo.WeighType}</Text>
   </View>

   <View style={styles.textNameView}>
    <Text style={styles.textName}>Ngày sản xuất</Text>
    <Text style={styles.textNameV2}> { Moment(dataInfo.CreatedOn).format('DD/MM/YYYY')}</Text>
   </View>

   <View style={styles.textNameView}>
    <Text style={styles.textName}>Ngày hết hạn</Text>
    <Text style={styles.textNameV2}> {Moment(dataInfo.ModifiedOn).format('DD/MM/YYYY')}</Text>
   </View>

   <View
              style={[
                {
                  height: 1.2,
                  overflow: 'hidden',
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 30,
                },
              ]}>
              <View
                style={[
                  {
                    height: 2,
                    borderWidth: 2,
                    borderColor: '#ddd',
                    borderStyle: 'dashed',
                  },
                ]}></View>
      </View>

      <Text style={styles.text}>Sau khi xác nhận thông tin sản phẩm</Text>
      <Text style={{
          marginLeft:20,
          marginRight:20,
          alignSelf: 'center',
        }}>hãy nhấn XÁC NHẬN để tiến hành đổi muỗng</Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('ImportCodeSpoon', {
                maCode: route.params
              })}>
            <Text style={styles.loginButtonText}>Xác nhận</Text>
          </TouchableOpacity>

    </View>

    
  );
}

export default CheckQRDetail;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: COLORS.bgTheme,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    marginLeft:40,
    marginRight:40,
    height:38
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 13,
    marginLeft:10,
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

  textName: {
    fontSize: 15,
    color: COLORS.DARK_FIVE,
    fontWeight: '500',
  },
  textNameV2: {
    fontSize: 15,
    color: COLORS.DEFAULT_BLACK,
    fontWeight: '500',
    marginTop: 8,
  },
  
  textNameView: {
    marginTop: 15,
    marginLeft:20,
  },
  text: {
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    alignSelf: 'center',
  },

 
  
});