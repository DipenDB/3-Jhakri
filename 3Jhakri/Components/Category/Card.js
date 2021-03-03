
import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Title from "../Title/Title";
import {ImageBackground} from "react-native";
import Color from "../../Constants/Color";
import {TouchableOpacity} from "react-native";

import {useNavigation} from '@react-navigation/native'




const Card=({title,img})=>{

    const navigation=useNavigation();

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Products',{category:title})} style={styles.cardContainer}>
                    <View>
                        <Image source={{uri:img}} style={styles.card}/>
                    </View>
                    <View>
                        <Text numberOfLines={2} style={styles.font}>{title}</Text>
                    </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        height:150,
        width:120,
        // backgroundColor:'gray',
        alignItems: 'center',
        marginTop:8,
        marginRight:20,
        elevation:5,
    },


    card:{
        height:120,
        width:120,
        // backgroundColor:'gray',
        borderRadius:10,
        overflow:'hidden',
        marginBottom:8,


    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    font:{
        fontFamily:'ubuntu-bold',
        fontSize:12,
        color:Color.lightBlack,
    }
})

export default Card;

