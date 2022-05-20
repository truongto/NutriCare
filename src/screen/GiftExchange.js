import React, {useState,useEffect} from "react";
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,
  TextInput,Platform,Alert,ActivityIndicator } from "react-native";
import { COLORS, images } from '../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';
import * as Progress from "react-native-progress";

const DEVICE_WIDTH = Dimensions.get('window').width;



const GiftExchange=({navigation})=>{  
  const [dataTitle, setDataTitle] = useState([]);
  const [dataItems1, setDataItems1] = useState([]);
  const [dataItems2, setDataItems2] = useState([]);
  const [dataItems3, setDataItems3] = useState([]);
  const [showProcess, setShowProcess] = useState(false);
 
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
    
    const willFocusSubscription = navigation.addListener('focus', () => {
      getTitleList();
    });
    return willFocusSubscription;

  }, [navigation]);


  const getTitleList = () => {
    setShowProcess(true)
    var urlList = AppContent.URL_Title_Items
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              var data = json.ListCategory
             setDataTitle(data)  
             console.log("setDataItemsTTT",data)
            getListItems1(data)
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

  const getListItems1 = (data2) => {
    var urlList = AppContent.URL_List_Items + 'cateId=' + String(data2[0].Id)
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

  const getListItems2 = (data3) => {
    var urlList = AppContent.URL_List_Items + 'cateId=' + String(data3[1].Id)
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setDataItems2(json.ListGift)
              console.log("setDataItems2",json)
              getListItems3(data3);
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


  const getListItems3 = (data4) => {
    var urlList = AppContent.URL_List_Items + 'cateId=' + String(data4[1].Id)
    var URL = AppContent.BASE_URL + urlList
    
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setDataItems3(json.ListGift),
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

  return (
    <View style={{flex: 1}}>

      <ScrollView>
        <View style={styles.toolBar}>
          <Text style={styles.textToolbar}>Đổi xu nhận ưu đãi</Text>
            <View style={{flex:1, alignSelf: 'center',marginTop:8}}>
              <TouchableOpacity style={{borderWidth:1,borderRadius:10,borderColor:'#FFFF00',height: 40,width:50,backgroundColor:'#ffffff',flexDirection:'row'}}
               onPress={() => {
                navigation.navigate('MemberUser')
              }}
              >
                <View style={{marginTop:2,marginLeft:3}}>
                <Text style={{fontWeight:'700',fontSize:15}}>0</Text>
                <Text style={{fontWeight:'300',fontSize:11}}>Xu</Text>
                </View>
                <Image source={images.coin} style={{ width: 18, height: 18, marginLeft:5,marginTop:3}}></Image>
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.toolBarV2}>

          <TouchableOpacity style={styles.viewborder}>
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
              editable={false} 
              selectTextOnFocus={false} />
          </TouchableOpacity>
        </View>

        
      <View style={{backgroundColor:'#ffff'}}>  
      {
        dataTitle.length > 0?
        <Text style={styles.textTile}>{dataTitle[0].Name}</Text>
        :<Text style={styles.textTile}></Text>
      }
       
        <FlatList
          data={dataItems1 || []}
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
                <Text style={{color: '#000', fontSize: 13,}}>ok con de</Text>
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

        
        {
        dataTitle.length > 0?
        <Text style={styles.textTile}>{dataTitle[1].Name}</Text>
        :<Text style={styles.textTile}></Text>
       }

        <FlatList
          data={dataItems2 || []}
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
                <Text style={{color: '#000', fontSize: 13,}}>ok con de</Text>
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


       {
        dataTitle.length > 0?
        <Text style={styles.textTile}>{dataTitle[2].Name}</Text>
        :<Text style={styles.textTile}></Text>
       }

        <FlatList
          data={dataItems3 || []}
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
                <Text style={{color: '#000', fontSize: 13,}}>ok con de</Text>
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
      </ScrollView>
      {renderProcess()}
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