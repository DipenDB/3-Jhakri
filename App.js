import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from "./3Jhakri/Navigations/StackNavigation";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from "./3Jhakri/Screens/Practice/Navigator/Navigator";




export default function App() {
    const [isReady,setIsReady]=React.useState(false);

    const FetchFonts =()=>{
        return(
            Font.loadAsync({
                'ubuntu-bold':require('./assets/Fonts/Ubuntu-Bold.ttf'),
                'ubuntu-regular':require('./assets/Fonts/Ubuntu-Regular.ttf'),
            })
        )
    }

    if (!isReady){
        return (
            <AppLoading onError={(err)=>console.log(err)} startAsync={FetchFonts} onFinish={()=>setIsReady(true)}/>
        )
    }
    else {
        return (

            // <Navigation/>

            <StackNavigation/>
        );
    }


}
