import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const CustomTextDetail=({name, itemName, color, onPress}) =>{
    return(
        <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={{ color:'black', fontSize:13, flex:1.1, marginLeft:10, marginTop:10}}>
                {name}
            </Text>
    
            <TouchableOpacity style={ {
                    flex:2.25,
                    height: 41,
                    marginLeft:16,
                    marginRight:12,
                    borderWidth: 0.3,
                    padding: 10,
                    borderRadius:3,
                    transform: [
                        { scaleX: 0.9 }, 
                        { scaleY: 0.9},
                    ],
                }} onPress={onPress}>
                <Text style={ {
                    color:color,
                }}>{itemName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTextDetail;