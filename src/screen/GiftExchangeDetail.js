import React, {useState,useEffect} from "react";
import { View, StyleSheet,Text,ScrollView,Dimensions,Image,TouchableOpacity,Alert,ActivityIndicator} from "react-native";
import CustomTextDetail from '../../src/components/custom/CustomTextDetail';
import { COLORS, images} from '../components/constants';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as AppApi from '../networking';
import AppContent from '../appContent/AppContent'
import { WebView } from 'react-native-webview';
import AutoHeightWebView from "react-native-autoheight-webview";
import Loader from '../components/Loader';
import PoupGiftExchangeFailed from '../components/PoupGiftExchangeFailed';
import PoupGiftExchangeOK from '../components/PoupGiftExchangeOK';

const GiftExchangeDetail=({route,navigation})=>{  
  const {idGift} = route.params;
  const [showProcess, setShowProcess] = useState(false);
  const [ten, setTen] = useState('');
  const [xu, setXu] = useState(0);
  const [gia, setGia] = useState(0);
  const [description, setDescription] = useState('');
  const [linkImage, setLinkImage] = useState('');
  const [showPopUpFailed, setShowPopUpFailed] = useState(false);
  const [showPopUpOK, setShowPopUpOK] = useState(false);


  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getGiftDetails();
    });
    return willFocusSubscription;

  }, [navigation]);

  const getGiftDetails = () => {
    setShowProcess(true)
    var urlList = AppContent.URL_Detail_Gift + 'id=' + String(idGift)
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setTen(json.GiftInfo.Name)
              setXu(json.GiftInfo.Point)
              setGia(json.GiftInfo.Price)
              setDescription(json.GiftInfo.Description)
              setLinkImage(json.GiftInfo.Images)
              setShowProcess(false)
            }else{
              setShowProcess(false)
              Alert.alert('Thông báo', String(json.Mess))
            }
        }else{
           setShowProcess(false)
            Alert.alert('Mất kết nối', 'Không thể kết nối được tới sever')
        }
    })
  }

 

  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
     <Loader visible={showProcess}></Loader>
      <ScrollView style={{marginBottom:10}}>
       <View style={{
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT - 504,
            marginBottom:10,
          }} >
          <Image
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={{uri: linkImage}}
          />
          <TouchableOpacity style={{marginLeft: 20,marginTop:25}} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="#DDDDDD" size={25} />
          </TouchableOpacity>
       </View>

        <Text style={{marginLeft: 15,marginTop:10,color: COLORS.textCOLORS , fontSize:16, fontWeight:'600'}} >{ten}</Text>

        <View style={{flexDirection:'row',marginTop:10, marginLeft: 15,}} >
          <View style={{flexDirection:'column',flex:1}}>
            <Text>Xu</Text>
            <View style={{flexDirection:'row'}}> 
            <Text style={{fontWeight:'600',marginTop:8}}>{xu}</Text>
            <Image source={images.coin} style={{ width:20, height: 20, marginLeft:4, marginTop:6}}></Image>
          </View>
            
          </View>
          <View style={{flexDirection:'column',flex:3,}}>
            <Text>Giá trị</Text>
            <Text style={{fontWeight:'600',marginTop:8}}>{gia}</Text>
          </View>
          <View style={{flexDirection:'column',flex:1}}>
            <Text>Còn hàng</Text>
            <Text style={{fontWeight:'600',marginTop:8,}}>1304</Text>
          </View>
       </View>

        <View
              style={[
                {
                  height: 1.2,
                  overflow: 'hidden',
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 20,
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
        {/* <Text style={{fontSize:13,marginTop:10, marginLeft: 15, marginRight: 15}}>Hoàng Đức luôn biết tìm “những khe rất nhỏ” để tìm đồng đội
           - Tạ Biên Cương Bất ngờ : Ukraine khóa van khí đốt Nga – châu Âu</Text> */}

          <AutoHeightWebView style={{marginTop:10, marginLeft: 10,width: DEVICE_WIDTH - 20,marginRight: 10}}
            originWhitelist={['*']}
            source={{ html: description}}
            scalesPageToFit={false}
            containerStyle={{width: DEVICE_WIDTH -20, flex: 1}}
          ></AutoHeightWebView>
        <Text style={{fontSize:13,marginTop:20, marginLeft: 15}}>Thông tin chi tiết:</Text>
        <Text style={{fontSize:13, marginLeft: 15,color:'#33CCFF',textDecorationLine:'underline'}}>link san pham </Text>

        <TouchableOpacity style={styles.loginButtonV2} onPress={() => {}}>
          <Text style={styles.loginButtonTextV2}>CHIA SẺ NGAY</Text>
        </TouchableOpacity>
       
      </ScrollView>

      <TouchableOpacity style={styles.loginButton} onPress={() => {
              Alert.alert(
                'Thông báo',
                'Bạn có chắc chắn muốn đổi quà ?',
                [
                    {
                        text: 'Thoát',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Đồng ý',
                        onPress: () => {setShowPopUpFailed(true)},
                    },
                ],
                { cancelable: false },
              );
            }
            
            }>
          <Text style={styles.loginButtonText}>Đổi quà</Text>
        </TouchableOpacity>


        <PoupGiftExchangeFailed
          visibles={showPopUpFailed}
          onPressCalback={() => {
            setShowPopUpFailed(false)
          }}
        />

        <PoupGiftExchangeOK
          visibles={showPopUpOK}
          onPressCalback={() => {
            setShowPopUpOK(true)
          }}
        />

    </View>
  );
}

export default GiftExchangeDetail;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: COLORS.button,
    paddingVertical: 10,
    borderRadius: 13,
    marginLeft:40,
    marginRight:40,
    marginBottom:20,
    
  },
  loginButtonV2: {
    backgroundColor: '#ffff',
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft:40,
    marginRight:40,
    marginBottom:20,
    borderColor:COLORS.button,
    borderWidth: 1,
    marginTop:20
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 17,
    marginLeft:10,
    fontWeight:'700'
  },
  loginButtonTextV2: {
    color: COLORS.button,
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 17,
    marginLeft:10
  },
});