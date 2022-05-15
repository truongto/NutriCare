import React, {useState} from "react";
import { View, StyleSheet,Text,Image,FlatList } from "react-native";
import { COLORS, images } from '../components/constants';

const Notification=({navigation})=>{  
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

  return(
    <View style={{flex:1}}>
    <View style={styles.toolBar}>
      <Text style={styles.textToolbar}>Thông báo</Text>
    </View>

    <FlatList
          style={{marginRight: 10, marginLeft: 10,marginTop:10}}
          data={data}
          renderItem={({item, index}) => {
            return (
              
         <View style={styles.viewUser} > 
         <View style={{flexDirection:'row'}}>
             <Image 
               style={{ width: 60, height: 60, borderRadius: 10, marginTop:7 }}
               source={images.imageSP3}
             />
         
           <View style={{marginLeft:15}}>
             <View style={{flexDirection:'row'}}>
            
                 {/* <Text style={{ fontWeight: 'bold', marginTop: 6, color:'black' }}>
                   ten hang
                 </Text> */}
               <Text style={{ fontWeight: 'bold', marginTop: 6, color:'#0091ea' }}>
                Sữa giảm giá
               </Text>
             </View>
          
               <View style={{flexDirection:'row'}}>
                 <Text style={styles.textphone}>
                  don vi
                 </Text>
               </View>
             
               <Text style={styles.textphone}>
                 sdt
               </Text>
           </View>
         </View>
       </View>
            );
          }}></FlatList>

  </View>
  )
}

export default Notification;

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
    fontWeight: 'bold'
},

textphone:{
  fontSize: 12,
  color: '#666',
  marginTop: 4,
}, 
viewUser:{
  backgroundColor: '#fff',
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderRadius:8,
  borderColor: '#dfe4ea',
  marginBottom:5,
  marginLeft: 10,
  marginRight:10,
},
 
});