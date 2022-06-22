import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  Modal,
  Image,
  TouchableOpacity
} from 'react-native';
import { COLORS,images } from '../components/constants';

const PoupGiftExchangeFailed = ({visibles = false, onPressCalback}) => {
  const {width, height} = useWindowDimensions();
  
  return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibles}
            onRequestClose = {() => {
            }}>

          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
            style={{
              width: '50%',
              height: '35%',
              position: 'relative',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={images.member} 
          />
          <Text style={styles.modalText}>Bạn không đủ xu đổi quà</Text>
          <Text style={styles.textStyle}>Mua thêm sản phẩm hoặc tham gia khảo sát để đổi muỗng</Text>

          <TouchableOpacity style={styles.loginButton} onPress={onPressCalback}>
          <Text style={styles.loginButtonText}>XEM QUA CỦA TÔI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonV2} onPress={onPressCalback}>
          <Text style={styles.loginButtonTextV2}>QUAY LẠI</Text>
        </TouchableOpacity>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress = {onPressCalback}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>

        </Modal>
  
  );
};


const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
      },

      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'80%',
       height:'50%'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: COLORS.DARK_FIVE,
        fontWeight: "400",
        textAlign: "center",
        fontSize:16,
        marginTop:30
      },
      modalText: {
        marginTop:20,
        textAlign: "center",
        fontSize:18,
        color: COLORS.bgTheme,
        fontWeight:'700'
      },
      loginButton: {
        backgroundColor: COLORS.button,
        paddingVertical: 10,
        borderRadius: 8,
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        width:'85%'
        
      },
      loginButtonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 17,
        marginLeft:10,
        fontWeight:'700'
      },

      loginButtonV2: {
        backgroundColor: '#ffff',
        paddingVertical: 8,
        borderRadius: 20,
        width:'85%',
        marginBottom:10,
        marginTop:10
      },
      loginButtonTextV2: {
        color: COLORS.button,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 17,
        marginLeft:10
      },
});

export default PoupGiftExchangeFailed;