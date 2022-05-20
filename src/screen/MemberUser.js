import React, {useState} from "react";
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,Image, ScrollView,ImageBackground } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/Foundation';
import { COLORS, images } from '../components/constants';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import * as Progress from "react-native-progress";
const data = [
  {
    name: 'Sũa bò NEW Anh em đã sẵn sàng ',
    thoigian: '120,000',
  },
  {
    name: 'Sữa chua',
    thoigian: '120,000',
  },
  {
    name: 'Vinamilk',
    thoigian: '120,000',
  },
  {
    name: 'Sũa hộp',
    thoigian: '120,000',
  },
  {
      name: 'Hoa quả',
      thoigian: '120,000',
  },

];
const MemberUser = ({navigation})=>{  
    return (
      <View style={{flex: 1, backgroundColor: '#03a9f408'}}>
        <View style={styles.toolBar}>
         <TouchableOpacity style={{marginLeft: 10,marginTop:15,alignSelf: 'center',}} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="#ffff" size={25} />
          </TouchableOpacity>
          <Text style={styles.textToolbar}>Xu tích lũy</Text>
        </View>
        <View style={styles.flatListStype}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.textmember}>Bạn hiện có</Text>
            <Text style={styles.textmemberV2}>Hạng tài khoản</Text>
          </View>

          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'row',flex:1}}>
                  <View style={{marginTop:5,marginLeft:15}}>
                  <Text style={{fontWeight:'800',fontSize:26,color:'#fff'}}>0</Text>
                  <Text style={{fontWeight:'400',fontSize:12,color:'#fff'}}>Xu</Text>
                  </View>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:5,marginTop:10}}></Image>
            </View>

            <View style={{flexDirection:'row'}}>
            <Image source={images.member} style={{ width:28, height: 36, marginRight:5,marginTop:5}}></Image>
             <Text style={{fontWeight:'600',fontSize:16,color:'#fff',marginTop:8,marginRight:15}}>Member</Text>
            </View>
         
          </View>
          <Progress.Bar progress={0.4} width={350} unfilledColor={'#444444'} borderWidth={0.0} color={'#99FFFF'} style={{marginTop:10,alignSelf: 'center',opacity:0.8,shadowOpacity: 0.5,}} />
         
          <View style={{flexDirection:'row',alignItems:'center'}}>
             <Text style={{fontWeight:'400',fontSize:13,color:'#fff',marginTop:20,marginLeft:15}}>
               Xu cần để lên hạng Titan:
             </Text>
             <Text style={{fontWeight:'700',fontSize:17,color:'#fff',marginTop:20,marginLeft:5}}>0</Text>
             <Image source={images.coin} style={{ width: 18, height: 18, marginLeft:5,marginTop:20}}></Image>
          </View>


           <TouchableOpacity style={styles.btnText}>  
          <Text style={{fontWeight:'700',fontSize:14,color:'#FFFFFF',marginLeft:7,marginRight:5}}>
               Đổi muỗng hàng ngày 
          </Text>
          <Feather name="arrow-right" color="#ffff" size={11} />
          </TouchableOpacity>

        </View>
        <View style={{backgroundColor: '#fff',height:120,marginTop:35,justifyContent:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={images.quacuatoi} style={styles.categoryIcon}></Image>
              <Text style={{fontSize:16,color:'#000',flex:4}}>
                Quà của tôi
              </Text>
              
              <Feather name="chevron-right" color="#C0C0C0" size={31} style={{flex:1}} />
            </View>

            
            <View style={{backgroundColor:'#C0C0C0',height:1,width:'100%'}}></View>
              <View style={{flexDirection:'row'}}>
              <Image source={images.doiqua} style={styles.categoryIcon}></Image>
            </View>
        </View>



        <FlatList
          style={{flex: 1,marginTop:20}}
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

                <View style={{width: '40%', flexDirection: 'row',alignItems: 'center',}}>
                  <Text style={{fontSize: 11,fontWeight: 'bold',}}>Xu:</Text>
                  <Text style={{fontSize: 14,fontWeight: '800',marginLeft:3,color: COLORS.textCOLORS}}>20</Text>
                  <Image source={images.coin} style={{ width: 20, height: 20, marginLeft:2}}></Image>
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
export default MemberUser;

const styles = StyleSheet.create({
  toolBar: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: COLORS.bgTheme,
},


textToolbar: {
    // textAlign: 'center',
    fontSize: 20,
    color: 'white',
    flex: 1,
    marginTop: 15,
    alignSelf: 'center',
    fontWeight: '800',
    marginLeft:'5%',
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
  backgroundColor: COLORS.bgTheme,
  borderRadius: 12,
  marginLeft: 20,
  marginRight: 20,
  // paddingBottom: 10,
  height:195,
},
textmember: {
color:'#ffff',
fontWeight:'400',
fontSize:13,
flex:1,
marginLeft:15,
marginTop:17
},
textmemberV2: {
  color:'#ffff',
  fontWeight:'400',
  fontSize:13,
  marginRight:15,
  marginTop:17
  },

btnText:{
  alignItems:'center',
  alignSelf:'flex-end',
   marginTop:15,
   backgroundColor: 'rgba(00, 00, 00, 0.3)',
   flexDirection:'row',
   borderRadius:10,
   paddingTop:5,
   paddingBottom:5,
   paddingRight:7,
   marginRight:20
  },
 
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 45,
    height: 45,
  },
});