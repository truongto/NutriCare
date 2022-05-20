import React, {useState} from "react";
import { View, StyleSheet,Text,ScrollView,Dimensions,Image,TouchableOpacity,Alert} from "react-native";
import CustomTextDetail from '../../src/components/custom/CustomTextDetail';
import { COLORS, images} from '../components/constants';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from "react-native/Libraries/NewAppScreen";

const GiftExchangeDetail=({navigation})=>{  
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
  
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
            source={images.imageKM4}
          />
          <TouchableOpacity style={{marginLeft: 20,marginTop:25}} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="#ffff" size={25} />
          </TouchableOpacity>
       </View>

        <Text style={{marginLeft: 15,marginTop:10,color: COLORS.textCOLORS , fontSize:16, fontWeight:'600'}} >Sũa bò NEW Anh em đã sẵn sàng</Text>

        <View style={{flexDirection:'row',marginTop:10, marginLeft: 15,}} >
          <View style={{flexDirection:'column',flex:1}}>
            <Text>Xu</Text>
            <View style={{flexDirection:'row'}}> 
            <Text style={{fontWeight:'600',marginTop:8}}>23</Text>
            <Image source={images.coin} style={{ width:20, height: 20, marginLeft:4, marginTop:6}}></Image>
          </View>
            
          </View>
          <View style={{flexDirection:'column',flex:3,}}>
            <Text>Giá trị</Text>
            <Text style={{fontWeight:'600',marginTop:8}}>23,000,000</Text>
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
        <Text style={{fontSize:13,marginTop:10, marginLeft: 15, marginRight: 15}}>Hoàng Đức luôn biết tìm “những khe rất nhỏ” để tìm đồng đội
           - Tạ Biên Cương Bất ngờ : Ukraine khóa van khí đốt Nga – châu Âu</Text>
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
                        onPress: () => {},
                    },
                ],
                { cancelable: false },
              );
            }
            
            }>
          <Text style={styles.loginButtonText}>Đổi quà</Text>
        </TouchableOpacity>

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