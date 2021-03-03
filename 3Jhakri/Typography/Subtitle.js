

import React from 'react';
import {StyleSheet,View,Text} from "react-native";
import {useFonts} from "expo-font";


const SubTitle=(props)=>{
    let [fontLoaded]=useFonts({
        'ubuntu-regular':require('../../assets/Fonts/Ubuntu-Regular.ttf')
    })
    if (!fontLoaded){
        return <Text >Loading...</Text>
    }

    return(
        <Text style={{...styles.subtitle,fontSize:props.fontSize,color:props.color}}>{props.children}</Text>
    )
}

const styles=StyleSheet.create({
    subtitle:{
        fontFamily:'ubuntu-regular',
    },
})

export default SubTitle;
