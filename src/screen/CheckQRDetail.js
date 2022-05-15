import React, {useState} from "react";
import { View, StyleSheet,Text,ScrollView,Dimensions,Image,TouchableOpacity,Alert} from "react-native";
import CustomTextDetail from '../../src/components/custom/CustomTextDetail';
import { COLORS, images} from '../components/constants';
const DEVICE_WIDTH = Dimensions.get('window').width;

const CheckQRDetail=({route,navigation})=>{  
    const {codeQR} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
    <View style={styles.toolBar}>
      <Text style={styles.textToolbar}>Thông tin sản phẩm</Text>
    </View>
      <ScrollView style={{flex: 1,marginBottom:20}}>
        <Image
          style={{
            width: DEVICE_WIDTH,
            height: 300,
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom:20,
          }}
          source={images.imageSP4}
        />
        <CustomTextDetail name={'CodeQR:'} itemName={codeQR} color={'black'} />
        <CustomTextDetail name={'Mã mặt hàng:'} itemName={'SH123'} color={'black'} />
        <CustomTextDetail name={'Tên mặt hàng:'} itemName={'Sữa hộp'}color={'black'}/>
        <CustomTextDetail name={'Giá bán:'} itemName={'10,000 Đ'} color={'black'} />
        <CustomTextDetail name={'Hạn sử dụng:'} itemName={'21/12/2022'} color={'black'} />
        <CustomTextDetail name={'Nơi sản xuất:'} itemName={'Hà Nội'} color={'black'} />
        <CustomTextDetail name={'Số xu:'} itemName={'10'} color={'black'} />
      </ScrollView>

    </View>
  );
}

export default CheckQRDetail;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: COLORS.button,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    marginLeft:40,
    marginRight:40,
    marginBottom:30
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
    marginLeft:10
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
});