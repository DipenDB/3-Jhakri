
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Image} from "react-native";

const Logo=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../../Constants/Images/logo.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,

    },
    logo:{
        height:90,
        width:200
    },
    logocontainer:{
        alignItems:'center',
    },
})

export default Logo;

