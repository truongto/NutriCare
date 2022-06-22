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


const ListGiftExchangeDetail =({navigation})=>{  
    const {idGiftDetail} = route.params;
  const [data, setData] = useState([]);
  const [showProcess, setShowProcess] = useState(false);
 

  useEffect(() => {
    
    const willFocusSubscription = navigation.addListener('focus', () => {
     

    });
    return willFocusSubscription;

  }, [navigation]);


  const getListItemsDetail = (data2) => {
    var urlList = AppContent.URL_List_Items + 'cateId=' + '&top=0'
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setDataItems1(json.ListGift)
              console.log("setDataItems1",json)
              getListItems2(data2)
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
    <View style={{flex: 1}}>
       <Loader visible={showProcess}></Loader>
   
        <FlatList
          data={data || []}
          horizontal
          renderItem = {({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('GiftExchangeDetail', {
                idGift: item.Id
              })}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,

                backgroundColor: '#FFF',
                height: 230,
                width: DEVICE_WIDTH / 2 - 45,
                elevation: 2,
                borderRadius: 10,
                margin: 10,
              }}>
              <Image
                source={{uri: item.Images}}
                style={{
                  width: DEVICE_WIDTH / 2 - 45,
                  height: 120,
                  position: 'relative',
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft:8,
                  marginRight:8,
                  marginVertical: 5,
                  height:55,
                }}>
                <Text style={{color: '#000', fontSize: 13,}}>{item.Name}</Text>
                <Text style={{fontSize: 12,color: '#000',marginTop:3}}>Giá trị: {item.Price}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12,
                  alignItems: 'center',
                  width: '90%',
                  marginLeft:8,
                  marginRight:8,
                }}>

                <View style={{width: '40%', flexDirection: 'row',alignItems: 'center',}}>
                  <Text style={{fontSize: 11,fontWeight: 'bold',}}>Xu:</Text>
                  <Text style={{fontSize: 14,fontWeight: '800',marginLeft:3,color: COLORS.textCOLORS}}>{item.Point}</Text>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:5}}></Image>
                </View>
                <View
                  style={{
                    width: '50%',
                    backgroundColor:'#CCFFFF',
                    borderRadius:13,
                    alignItems: 'center',
                    marginLeft: 8
                  }}>
                  <Text style={{fontSize: 9,color: '#336699',marginBottom:3,marginTop:3,marginLeft:2,marginRight:2}}>Còn hàng 1479</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            );
          }}></FlatList>
    </View>
  );
}

export default ListGiftExchangeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: '100%',
    backgroundColor: 'transparent',
},
  viewborder: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
    opacity: 0.8,
    height: 40,
    width:'90%',
    backgroundColor: '#ffff',
    marginBottom:10,
    
  },
  textInput: {
    // flex: 1,
    paddingLeft: 10,
    color: '#000000',
  },
  toolBar: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: COLORS.bgTheme,
  },
  toolBarV2: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: COLORS.bgTheme,
    // alignItems:'center',
    justifyContent:'center',
    flex:1,
  },

  textTile: {
    flex: 1,
    marginTop: 10,
    marginBottom:8,
    marginLeft: 10,
    fontWeight: '700',
    color: COLORS.bgTheme,
    fontSize: 17,
  },


  textToolbar: {
    // textAlign: 'center',
    marginLeft:'5%',
    fontSize: 17,
    color: 'white',
    flex: 3,
    marginTop: 16,
    alignSelf: 'center',
    fontWeight: '800',
  },
});