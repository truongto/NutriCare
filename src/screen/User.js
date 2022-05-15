import React, {useState} from "react";
import { View, StyleSheet,Text,SafeAreaView,ScrollView,Image,Dimensions,TouchableOpacity } from "react-native";
import { Avatar, Icon, Button } from 'react-native-elements';
import { COLORS, images } from '../components/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DEVICE_WIDTH = Dimensions.get('window').width;
const User=({navigation})=>{  
  return(
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
    <View style={styles.toolBar}>
      <Text style={styles.textToolbar}>Trang cá nhân</Text>
    </View>
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSectionv2}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Avatar
                    activeOpacity={0.2}
                    containerStyle={{ backgroundColor: '#0061a8' }}
                    rounded
                    size="large"
                    title={'T'}
                />

                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={[
                            styles.title,
                            {
                                marginTop: 10,
                                marginBottom: 5,
                            },
                        ]}>
                        Trường Tô
                    </Text>

                    <View style={styles.row}>
                        {/* <Icon
                            type="Ionicons"
                            name="call"
                            style={{ fontSize: 20, color: '#777777' }}
                        /> */}
                        <Text style={styles.caption}>totruong52@gmail.com</Text>
                    </View>

                </View>
            </View>
        </View>



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
          </View>

    </SafeAreaView>
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
userInfoSectionv2: {
    paddingHorizontal: 20,
    marginBottom: 15,
},
userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    marginLeft: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
caption: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
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
 
});