import React, {useState} from "react";
import { View, StyleSheet,Text,SafeAreaView,ScrollView,Image,Dimensions,TouchableOpacity,Alert } from "react-native";
import { Avatar, Icon, Button } from 'react-native-elements';
import { COLORS, images } from '../components/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const DEVICE_WIDTH = Dimensions.get('window').width;
const User=({navigation})=>{  
  return(
    <View style={{flex: 1, backgroundColor: '#03a9f408'}}>
    <View style={styles.toolBar}>
      <Text style={styles.textToolbar}>Trang cá nhân</Text>
    </View>
    <ScrollView>
    {/* <SafeAreaView style={styles.container}> */}

        <View style={styles.userInfoSectionv2}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Avatar
                    activeOpacity={0.2}
                    containerStyle={{ backgroundColor: '#33CCFF' }}
                    rounded
                    size="medium"
                    title={'T'}
                />

                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={[
                            styles.title,
                            {
                                marginTop:5,
                                marginBottom: 5,
                            },
                        ]}>
                        Trường Tô
                    </Text>

                    <View style={styles.row}>
                        
                        <Text style={styles.caption}>totruong52@gmail.com</Text>
                    </View>

                </View>

            </View>
         </View>


         <View style={{backgroundColor: '#fff',height:180,marginTop:10,justifyContent:'center'}}>
           
           <View style={{flexDirection:'row',alignItems:'center',marginBottom:6,marginLeft:20}}>
             <Image source={images.quacuatoi} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Xu tích lũy
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>

           <View style={{backgroundColor:'#C0C0C0',height:1,width:'100%'}}></View>

           <View style={{flexDirection:'row',alignItems:'center',marginTop:6,marginLeft:20,marginBottom:6,}}>
             <Image source={images.doiqua} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Địa chỉ của tôi
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>

           <View style={{backgroundColor:'#C0C0C0',height:1,width:'100%'}}></View>

           <View style={{flexDirection:'row',alignItems:'center',marginTop:6,marginLeft:20}}>
             <Image source={images.doiqua} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Bốc thăm trúng thưởng
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>
       </View>


       <View style={{backgroundColor: '#fff',height:180,marginTop:13,justifyContent:'center'}}>
           
           <View style={{flexDirection:'row',alignItems:'center',marginBottom:6,marginLeft:20}}>
             <Image source={images.quacuatoi} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Chính sách thành viên
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>

           <View style={{backgroundColor:'#C0C0C0',height:1,width:'100%'}}></View>

           <View style={{flexDirection:'row',alignItems:'center',marginTop:6,marginLeft:20,marginBottom:6,}}>
             <Image source={images.doiqua} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Điều khoản sử dụng
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>

           <View style={{backgroundColor:'#C0C0C0',height:1,width:'100%'}}></View>

           <View style={{flexDirection:'row',alignItems:'center',marginTop:6,marginLeft:20}}>
             <Image source={images.doiqua} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Câu hỏi thường gặp
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>
       </View>


       <View style={{backgroundColor: '#fff',height:60,marginTop:13,justifyContent:'center'}}>
           
           <View style={{flexDirection:'row',alignItems:'center',marginBottom:6,marginLeft:20}}>
             <Image source={images.quacuatoi} style={styles.categoryIcon}></Image>
             <Text style={{fontSize:15,color:'#000',flex:5,marginLeft:10}}>
               Liên hệ ngay với NutriCare
             </Text>
             
             <Feather name="chevron-right" color="#C0C0C0" size={24} style={{flex:1}} />
           </View>

       </View>
       <TouchableOpacity style={styles.loginButtonV2} onPress={() => {
          Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn đăng xuất',
            [
                {
                    text: 'Không',
                    onPress: () => {
                    },
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý', 
                    onPress: () => {
                      navigation.navigate('Login')
                    },
                },
            ],
            { cancelable: false }
          ); 
       }}>
          <Text style={styles.loginButtonTextV2}>ĐĂNG XUẤT</Text>
        </TouchableOpacity>

{/* 
          <View style={styles.infoBoxWrapper}>
              <View style={styles.menuWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}>
                        <View style={styles.menuItem}>
                            <FontAwesome
                                name="bank"
                                size={25}
                            />
                            <Text style={styles.menuItemText}>Xu tích lũy</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            // Alert.alert(
                            //     'Thông báo',
                            //     'Bạn có chắc chắn muốn đăng xuất ?',
                            //     [
                            //         {
                            //             text: 'Thoát',
                            //             onPress: () => console.log('Cancel Pressed'),
                            //             style: 'cancel',
                            //         },
                            //         {
                            //             text: 'Đồng ý',
                            //             onPress: () => handleLogout(),
                            //         },
                            //     ],
                            //     { cancelable: false },
                            // );
                        }}>
                        <View style={styles.menuItem}>
                            <FontAwesome
                                name="map-signs"
                                size={25}
                            /> 
                            <Text style={styles.menuItemText}>Địa chỉ của tôi</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View>

           <View style={styles.infoBoxWrapperV2}>
              <View style={styles.menuWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}>
                        <View style={styles.menuItem}>
                            <Icon
                                type="Entypo"
                                name="lock"
                                style={{ fontSize: 25, color: '#FF6347' }}
                            />
                            <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            // Alert.alert(
                            //     'Thông báo',
                            //     'Bạn có chắc chắn muốn đăng xuất ?',
                            //     [
                            //         {
                            //             text: 'Thoát',
                            //             onPress: () => console.log('Cancel Pressed'),
                            //             style: 'cancel',
                            //         },
                            //         {
                            //             text: 'Đồng ý',
                            //             onPress: () => handleLogout(),
                            //         },
                            //     ],
                            //     { cancelable: false },
                            // );
                        }}>
                        <View style={styles.menuItem}>
                            <Icon
                                type="MaterialCommunityIcons"
                                name="exit-to-app"
                                style={{ fontSize: 25, color: '#FF6347' }}
                            />
                            <Text style={styles.menuItemText}>Đăng xuất</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View> */}

    {/* </SafeAreaView> */}
  </ScrollView>
 </View>
  )
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
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
userInfoSectionv2: {
    paddingHorizontal: 20,
    marginBottom: 15,
    paddingBottom:10,
    backgroundColor:'#fff',
    marginTop:20,
    alignContent:'center'
},
userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    marginLeft: 20,
},
title: {
    fontSize: 16,
    fontWeight: '600',
},
caption: {
    fontSize: 15,
    fontWeight: '400',
    justifyContent: 'center',
},
row: {
    flexDirection: 'row',
    marginBottom: 5,
},
rowv2: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5
},
infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
},
infoBoxWrapperV2: {
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
  flexDirection: 'row',
  marginRight: 15,
  marginLeft: 15,
},

infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
},
menuWrapper: {
    marginTop: 10,
},
menuItem: {
    flexDirection: 'row',
    width: DEVICE_WIDTH,
    paddingVertical: 15,
    paddingHorizontal: 30,
},
menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
},
text_ten: {
    color: '#1976d2',
    marginLeft: 15,
    fontSize: 15,
},
text_diachi: {
    color: '#1976d2',
    marginLeft: 15,
    fontSize: 15,
    marginTop: 5,
},

text: {
    marginBottom: 5,
    fontFamily: 'Avenir Next',
    color: '#3366CC',

},
link: {
    alignItems: 'center',
    justifyContent: 'center'

},



categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 45,
    height: 45,
  },
  loginButtonV2: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginLeft:40,
    marginRight:40,
    marginBottom:20,
    marginTop:20
  },
 
  loginButtonTextV2: {
    color: COLORS.button,
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 17,
    marginLeft:10
  },

});