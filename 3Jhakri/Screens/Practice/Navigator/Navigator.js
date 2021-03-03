

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from "../Home";
import SettingScreen from "../SettingScreen";
import ProductsScreen from "../ProductsScreen";
import {MaterialIcons} from "@expo/vector-icons";
import CustomDrawer from "../CustomDrawer";


const HomeStack=createStackNavigator();
const SettingStack=createStackNavigator();
const Drawer = createDrawerNavigator();




const Navigation=(props)=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator

                drawerContent={(props)=><CustomDrawer {...props}/>}
            >
                <Drawer.Screen name='Home' component={HomeStackNavigation}/>
                <Drawer.Screen name='Settings' component={SettingStackNavigation}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const HomeStackNavigation=()=>{
    return(
        <HomeStack.Navigator initialRouteName='Home' >
            <HomeStack.Screen name="Home" component={HomeScreen} options={(props)=>({
                headerLeft:()=><MaterialIcons name='menu' size={30} onPress={()=>props.navigation.openDrawer()}/>
            })}/>
            <HomeStack.Screen name="Prodcts" component={ProductsScreen}/>
        </HomeStack.Navigator>
    )
}
const SettingStackNavigation=()=>{
    return(
        <SettingStack.Navigator initialRouteName='Home'>
            <SettingStack.Screen name="Setting" component={SettingScreen}/>
        </SettingStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Navigation;

