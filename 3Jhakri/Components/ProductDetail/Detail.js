
import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Color from "../../Constants/Color";

import {useRoute} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/native'
import {CATEGORY, DATA} from "../../Constants/Recipe";

const Detail=()=>{
    const route=useRoute();
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params.title
        })
    })






    const product = DATA.find(data=>data.id===route.params.productId)
    const category = CATEGORY.find(category=>category.id===product.category)

    return(
        <View style={{marginTop: 15,alignItems:'center'}}>

            {/*-----------------------------------------------------------------*/}
            <View style={{marginTop: 15,alignItems:'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{...styles.title,fontSize:16, textAlign: 'center',paddingHorizontal: 10,}}>CATEGORY</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={{...styles.subtitle,fontSize:14,marginTop: 10}}>{category.category}</Text>
            </View>
            {/*----------------------------------------------------------------------*/}
            <View style={{marginTop: 15,alignItems:'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{...styles.title,fontSize:16, textAlign: 'center',paddingHorizontal: 10,}}>PRICE</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                <Text style={{...styles.subtitle,fontSize:14,marginTop: 10}}>{product.price}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontFamily:'ubuntu-bold',
        fontSize:30,
        color:Color.primary,
    },
    subtitle:{
        fontFamily:'ubuntu-regular',
        fontSize:15,
        color:Color.lightBlack,
    },
})

export default Detail;

