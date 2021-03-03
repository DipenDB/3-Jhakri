
import React from 'react';
import {View, Text, StyleSheet,ImageBackground, Image,TouchableOpacity} from 'react-native';
import Color from "../../Constants/Color";
import { Entypo } from '@expo/vector-icons';
import {FlatList} from "react-native";




const SpecialCard=({product})=>{


    return(

        <TouchableOpacity  style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{
                    uri: product.img
                    // uri: 'https://i.pinimg.com/originals/20/79/03/2079033abc8314be554f9d24f562a199.jpg',
                }}
            />
            <Entypo style={styles.love} name="heart" size={24} color="white" />

            <View style={styles.textContainer}>
                <Text style={styles.font}>{product.name}</Text>
                <Text numberOfLines={1} style={styles.subheading}>{product.description}</Text>

                <Text numberOfLines={1} style={{...styles.subheading,color: Color.primary,fontWeight:'bold'}}>{product.price}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:Color.lightWhite,
        height:250,
        width:300,
        borderRadius:20,
        overflow:'hidden',
        marginRight:20,
    },
    font:{
        fontFamily:'ubuntu-bold',
        fontSize:19,
    },
    image:{
        width: '100%',
        height: 180,
    },
    love:{
        position:'absolute',
        right:20,
        paddingTop: 10,
        // justifyContent:'flex-end',
    },
    subheading:{
        fontFamily: 'ubuntu-regular',
        color:Color.lightBlack,
    },
    textContainer:{
        paddingLeft:20,
        paddingTop:5,
        paddingRight:5,
    },
})

export default SpecialCard;

