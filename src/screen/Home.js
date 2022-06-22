import React, {useState,useEffect} from "react";
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,ImageBackground,Alert } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/Foundation';
import Swiper from 'react-native-swiper';
import { COLORS, images } from '../components/constants';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import AppContent from '../appContent/AppContent'
import * as AppApi from '../networking';
import Loader from '../components/Loader';
import Toast from 'react-native-simple-toast';

const Home=({navigation})=>{  
  const [dataInfo, setDataInfo] = useState({});
  const [dataTitle, setDataTitle] = useState([]);
  const [dataItems1, setDataItems1] = useState([]);
  const [dataItems2, setDataItems2] = useState([]);
  const [showProcess, setShowProcess] = useState(false);
  const menu = [
    {
      name: 'Giải trí',
      nav: 'giaitri',
      icon: images.giaitri,
    },
    {
      name: 'Khảo sát',
      nav: 'khaosat',
      icon: images.khaosat,
    },
    {
      name: 'Chia sẻ',
      nav: 'chiase',
      icon: images.chiase,
    },
    {
      name: 'Mua sắm',
      nav: 'muasam',
      icon: images.muasam,
    },
    {
      name: 'Cửa hàng',
      nav: 'cuahang',
      icon: images.cuahang,
    },
    {
      name: 'Cẩm nang',
      nav: 'camnang',
      icon: images.camnang,
    },
  ];


  useEffect(() => {
    
    const willFocusSubscription = navigation.addListener('focus', () => {
      getInfoHome()
    });
    return willFocusSubscription;

  }, [navigation]);

  const getTitleList = () => {
    var urlList = AppContent.URL_Title_Items
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              var data = json.ListCategory
             setDataTitle(data)  
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
    var urlList = AppContent.URL_List_Items + 'cateId=' + String(data2[0].Id) + '&top=4'
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setDataItems1(json.ListGift)
              getListItems2(data2)
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

  const getListItems2 = (data3) => {
    var urlList = AppContent.URL_List_Items + 'cateId=' + String(data3[1].Id) + '&top=4'
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              setDataItems2(json.ListGift)
              setShowProcess(false)
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

  const getInfoHome = () => {
    setShowProcess(true)
    console.log("IDDDTaiKhoan",AppContent.UserLoin.Id)
    var urlList = AppContent.URL_INFO_Home + 'userId=' + String(AppContent.UserLoin.Id)
    var URL = AppContent.BASE_URL + urlList
      AppApi.RequestGET(URL, AppContent.Token, (err, json) => {
        if(!err){
            if(json.status == 1){
              getTitleList();
              setDataInfo(json.CustomerInfo)
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


  return (
    <ImageBackground 
    source={images.BGHome} 
    style={{flex: 1,backgroundColor:'#ffff'}}>
    <Loader visible={showProcess}></Loader>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.logoView} >
                <Image source={images.logoHome} style={styles.logo} />
          </View>

          <TouchableOpacity style={{ marginLeft:10, marginTop:30, flex:1}}   onPress={() => {
                  navigation.navigate('Notification')
                }}>
          <Feather name="bell" color="#ffff" size={27} />
          </TouchableOpacity>
        </View>

        <Swiper
          // autoplay
          horizontal={true}
          height={225}
          // activeDotColor="#FF6347"
          style={{marginTop:20}}
          >
          <View style={styles.flatListStype}>
            <View style={{flexDirection: 'row'}}>

              <View style={{flex: 3, flexDirection: 'column'}}>
                <Text style={{marginTop:10,marginLeft:20,fontSize:15,color:'#000000'}}>Chào mừng</Text>
                <Text style={{marginTop:8,marginLeft:20,fontSize:18,fontWeight:'700',color:COLORS.textCOLORS}}>{dataInfo.FullName == '' ? dataInfo.Phone : dataInfo.FullName}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MemberUser')
                }}
                style={{
                  flex: 1,
                  width: 60,
                  marginHorizontal: 0,
                  alignSelf: 'center',
                  marginTop:10
                }}>
                <View
                  style={{
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 40,
                    height: 35,
                  }}>
                  <Image
                  source={images.member} 
                  style={{ width: 30, height: 35}}
                   ></Image>
                </View>
                <Text style={{alignSelf: 'center', color: '#000000',fontSize:14,marginTop:8}}>
                  Member
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MemberUser')
                }}
                style={{
                  flex: 1,
                  width: 60,
                  marginHorizontal: 0,
                  alignSelf: 'center',
                  marginLeft:15,
                  marginTop:10
                }}>
               <View style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      width: 20,
                      height: 35,
                      flexDirection: 'row',
                    }}>
                    <Text style={{ color: '#336699',fontSize:26, fontWeight:'800'}}>
                    {dataInfo.AccumulatedPoint}
                    </Text>
                  </View>

                 <Image source={images.coin} style={{ width: 23, height: 23,marginTop:5, marginLeft:8}}></Image>

                </View>
                <Text style={{color: '#000000', fontSize:14, marginTop:8}}>
                Xu
                </Text>

              </TouchableOpacity>
            </View>

            <View
              style={[
                {
                  height: 1.2,
                  overflow: 'hidden',
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 10,
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
        
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CheckQR')
                }}
                
                style={styles.categoryBtn}>
                  <Image
                   source={images.doimuong} 
                   style={styles.categoryIcon}
                   ></Image>
                <Text style={styles.categoryBtnTxt}>Đổi muỗng</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GiftExchange')
                }}
                style={styles.categoryBtn}>
                 <Image
                   source={images.doiqua} 
                   style={styles.categoryIcon}
                   ></Image>
                <Text style={styles.categoryBtnTxt}>Đổi quà</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MyGift')
                  setShowProcess(false)
                }}
                style={styles.categoryBtn}>
                 <Image
                   source={images.quacuatoi} 
                   style={styles.categoryIcon}
                   ></Image>
                <Text style={styles.categoryBtnTxt}>Quà của tôi</Text>
              </TouchableOpacity>
            </View>
          </View>


          <TouchableOpacity style={{
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              height:190,}}>
            <Image
           
              source={images.imageKM6}
               style={{ position: 'relative', flex:1,
               width: '100%',
               borderRadius: 8,
               resizeMode: 'cover',
               alignSelf: 'center',}}
            /> 
          </TouchableOpacity>
        </Swiper>

        <View  style={{backgroundColor:'#ffff'}}>

        <FlatList
          style={{marginRight: 20, marginLeft: 20,marginTop:10}}
          data={menu}
          numColumns={3}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log('ok');
                }}
                style={styles.categoryBtnV2}>
                {/* <View style={styles.categoryIconV2}>
                  <Feather name={item.icon} size={30} color="#336699" />
                </View> */}
                <Image
                   source={item.icon} 
                   style={styles.categoryIconV2}
                   ></Image>
                <Text style={styles.categoryBtnTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
          

        <View style={{flex: 1}}>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              horizontal={true}
              height={200}
              activeDotColor="#FF6347"
              >
              <View style={styles.slide}>
                <Image
                  source={images.imageKM1}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>

              <View style={styles.slide}>
                <Image
                  source={images.imageKM2}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={images.imageKM3}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={images.imageKM4}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
          </View>
        </View>
        <Text
          style={{
            flex: 1,
            marginTop: 20,
            marginLeft: 10,
            fontWeight: 'bold',
            color: '#0099FF',
          }}>
          Đổi xu nhận ưu đãi
        </Text>


        <FlatList
          style={{flex: 1}}
          data={dataItems1 || []}
          horizontal
          renderItem={({item, index}) => {
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
                source={{ uri:item.Images}}
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
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#808080',
            height: 0.8,
          }}></View>



        <FlatList
          style={{flex: 1, marginTop: 10}}
          data={dataItems2 || []}
          horizontal
          renderItem={({item, index}) => {
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
                source={{ uri:item.Images}}
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
      </ScrollView>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  toolBar: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#3399FF',
  },

  textToolbar: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginTop: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
    marginTop: 20,
  },

  categoryBtnV2: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
    marginTop: 10,
  },
  
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 55,
  },
  categoryIconV2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000000',
    fontSize:13,
  },
  flatListStype: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    marginTop: 10,
    backgroundColor: '#ffff',
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
    // paddingBottom: 10,
    height:190,
  },

  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 30,
  
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },

  sliderContainerV2: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 30,
  },
  slideV2: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop: 20,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logoView: {
    // width: '30%',
    height: 40,
    marginLeft:10,
    marginTop:20,
    flex:6
  },
  logo: {
    position: 'relative',
    // width: '90%',
    width: 100,
    height: 60,
    resizeMode: 'contain',
    // alignSelf: 'center',
  },
});