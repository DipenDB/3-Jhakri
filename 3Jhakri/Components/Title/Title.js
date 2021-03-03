
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import COLOR from '../../Constants/Color'

const Title=(props)=>{
    return(
        <View>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'ubuntu-bold',
        fontSize:23,
        color:COLOR.primary,
    },
})

export default Title;

