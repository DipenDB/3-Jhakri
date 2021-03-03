
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from "react-native";

const HomeScreen=(props)=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title='Prodct' onPress={()=>{props.navigation.navigate('Prodcts')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default HomeScreen;

