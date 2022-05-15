import React, {useState,useEffect} from "react";
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,TextInput,Platform } from "react-native";
import { COLORS, images } from '../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';

const DEVICE_WIDTH = Dimensions.get('window').width;



const GiftExchange=({navigation})=>{  

  const data = [
    {
      name: 'Sũa bò',
      thoigian: 'envelope',
    },
    {
      name: 'Sữa chua',
      thoigian: 'map-marker',
    },
    {
      name: 'Vinamilk',
      thoigian: 'camera',
    },
    {
      name: 'Sũa hộp',
      thoigian: 'calendar',
    },
    {
        name: 'Hoa quả',
        thoigian: 'calendar',
    },
  
  ];

  useEffect(() => {
    getTitleList();
  }, [navigation]);

  // const getTitleList = () =>{
  //   var urlList = AppContent.URL_Title_Items
  //   var URL = AppContent.BASE_URL + urlList
  //   AppApi.RequestGET(URL, AppContent.KeyApp, (err, json) => {
  //     // if(!err){
  //     //     if(json.kq){
             
  //     //     }else{
  //     //         Alert.alert('Thông báo', 'Không lấy được dữ liệu')

  //     //     }
  //     // }else{
  //     //     Alert.alert('Mất kết nối', 'Không thể kết nối được tới sever')
  //     // }
  // })

  // }
  const getTitleList = async ( ) =>{
    try {
      let respone = await fetch(AppContent.BASE_URL + AppContent.URL_Title_Items, {
          headers: {
              'Key': AppContent.KeyApp,
          },
          method: "GET",
          timeout: 30000
      });
      let json = await respone.json();
      console.log('ok_Respine: ',json)
      return json;
      } catch (error) {
      console.log('err: ',error)
      return {err: 404}
    }
  }

  

  return (
    <View style={{flex: 1, backgroundColor:'#3399FF'}}>
      <View style={styles.toolBar}>
        <Text style={styles.textToolbar}>Đổi quà</Text>
      </View>

      <ScrollView>

        <View style={styles.toolBarV2}>
          <View style={styles.viewborder}>
            <View style={{justifyContent: 'center'}}>
              <Feather name="search" size={15} color={'#000000'} />
            </View>
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              placeholder={'Tìm kiếm'}
              autoCapitalize="none"
              placeholderTextColor={'#000000'}
              onChangeText={text => {}}
              value={''}
            />
          </View>
          <TouchableOpacity style={{borderWidth:1,borderRadius:10,borderColor:'#FFFF00',height: 40,width:'13%',backgroundColor:'#ffffff',flexDirection:'row'}}>
            <View style={{marginTop:2,marginLeft:3}}>
            <Text>0</Text>
            <Text>Xu</Text>
            </View>
            <View>
            <Foundation name={'bitcoin-circle'} size={25} color="#336699" />
            </View>
          </TouchableOpacity>

        </View>
      <View style={{flex: 1, backgroundColor:'#ffff'}}>  
        <Text style={styles.textTile}>Đổi xu nhận ưu đãi</Text>
        <FlatList
          data={data || []}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('GiftExchangeDetail')}
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
                source={images.imageSP1}
                style={{
                  width: DEVICE_WIDTH / 2 - 45,
                  height: 120,
                  position: 'relative',
                  resizeMode: 'contain',
                  alignSelf: 'center',
               
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
                <Text style={{color: '#000', fontSize: 13,}}>{item.name}</Text>
                <Text style={{fontSize: 12,color: '#000',marginTop:3}}>Giá trị: {item.thoigian}</Text>
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

                <View style={{width: '45%', flexDirection: 'row',alignItems: 'center',}}>
                  <Text style={{fontSize: 11,fontWeight: 'bold',}}>Xu:</Text>
                  <Text style={{fontSize: 14,fontWeight: '800',marginLeft:3,color: COLORS.textCOLORS}}>20</Text>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:2}}></Image>
                </View>
                <View
                  style={{
                    width: '55%',
                    backgroundColor:'#CCFFFF',
                    borderRadius:13,
                    alignItems: 'center',
                    marginLeft: 2
                  }}>
                  <Text style={{fontSize: 9,color: '#336699',marginBottom:3,marginTop:3,marginLeft:2,marginRight:2}}>Còn hàng 1479</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            );
          }}></FlatList>

        <Text style={styles.textTile}>Đổi xu nhận ưu đãi</Text>

        <FlatList
          data={data || []}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('GiftExchangeDetail')}
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
                source={images.imageSP4}
                style={{
                  width: DEVICE_WIDTH / 2 - 45,
                  height: 120,
                  position: 'relative',
                  resizeMode: 'contain',
                  alignSelf: 'center',
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
                <Text style={{color: '#000', fontSize: 13,}}>{item.name}</Text>
                <Text style={{fontSize: 12,color: '#000',marginTop:3}}>Giá trị: {item.thoigian}</Text>
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

                <View style={{width: '45%', flexDirection: 'row',alignItems: 'center',}}>
                  <Text style={{fontSize: 11,fontWeight: 'bold',}}>Xu:</Text>
                  <Text style={{fontSize: 14,fontWeight: '800',marginLeft:3,color: COLORS.textCOLORS}}>20</Text>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:2}}></Image>
                </View>
                <View
                  style={{
                    width: '55%',
                    backgroundColor:'#CCFFFF',
                    borderRadius:13,
                    alignItems: 'center',
                    marginLeft: 2
                  }}>
                  <Text style={{fontSize: 9,color: '#336699',marginBottom:3,marginTop:3,marginLeft:2,marginRight:2}}>Còn hàng 1479</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            );
          }}></FlatList>

        <Text style={styles.textTile}>Đổi xu nhận ưu đãi</Text>

        <FlatList
          data={data || []}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('GiftExchangeDetail')}
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
                source={images.imageSP2}
                style={{
                  width: DEVICE_WIDTH / 2 - 45,
                  height: 120,
                  position: 'relative',
                  resizeMode: 'contain',
                  alignSelf: 'center',
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
                <Text style={{color: '#000', fontSize: 13,}}>{item.name}</Text>
                <Text style={{fontSize: 12,color: '#000',marginTop:3}}>Giá trị: {item.thoigian}</Text>
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

                <View style={{width: '45%', flexDirection: 'row',alignItems: 'center',}}>
                  <Text style={{fontSize: 11,fontWeight: 'bold',}}>Xu:</Text>
                  <Text style={{fontSize: 14,fontWeight: '800',marginLeft:3,color: COLORS.textCOLORS}}>20</Text>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:2}}></Image>
                </View>
                <View
                  style={{
                    width: '55%',
                    backgroundColor:'#CCFFFF',
                    borderRadius:13,
                    alignItems: 'center',
                    marginLeft: 2
                  }}>
                  <Text style={{fontSize: 9,color: '#336699',marginBottom:3,marginTop:3,marginLeft:2,marginRight:2}}>Còn hàng 1479</Text>
                </View>
                
              </View>
            </TouchableOpacity>
            );
          }}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

export default GiftExchange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: '100%',
    backgroundColor: 'transparent',
},
  viewborder: {
   
    marginLeft: 24,
    marginRight:24,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
    opacity: 0.8,
    height: 40,
    width:'70%',
    backgroundColor: '#ffff',
    marginBottom:10
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#000000',
  },
  toolBar: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#3399FF',
  },
  toolBarV2: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#3399FF',
    flex:1
  },

  textTile: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#0099FF',
    fontSize: 20,
  },

  searchToolbar: {},
  textToolbar: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginTop: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});