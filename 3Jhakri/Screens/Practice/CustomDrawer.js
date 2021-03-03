


import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import {Ionicons} from '@expo/vector-icons'

const CustomDrawer=(props)=>{
    return(
        <DrawerContentScrollView {...props}>
            <View style={{padding:10,flexDirection:'row',alignItems:'center',marginBottom:10,}}>
                <View style={{alignItems:'center',justifyContent:'center',width:60,height:60,borderRadius:30, borderWidth:1, borderColor:'grey'}}>
                    <Ionicons name='person' size={50}/>
                </View>

                <View style={{marginLeft:10}}>
                    <Text>Dipen DB</Text>
                    <Text>testemail@gmail .com</Text>
                </View>
            </View>

            <DrawerItemList {...props}/>

            <DrawerItem label='Logout' onPress={null} icon={(props)=><Ionicons size={props.size}  name='log-ot'/>}/>



        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default CustomDrawer;

