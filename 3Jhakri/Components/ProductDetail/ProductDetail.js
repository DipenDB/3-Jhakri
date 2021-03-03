
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Color from "../../Constants/Color";
import Detail from "./Detail";

import {useRoute} from '@react-navigation/native'
import {DATA} from "../../Constants/Recipe";

const ProductDetail=()=>{
    const route= useRoute();

    const product =DATA.find(data=>data.id===route.params.productId);

    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Text numberOfLines={1} style={styles.title}>{product.name}</Text>
            </View>

            <View style={{alignItems:'center',marginTop: 20,}}>
                <Text  ellipsizeMode="tail" numberOfLines={3} style={styles.subtitle}>I have a large Text field and when i am displaying it in a card section i need to trim it at the end and show only up to a particular length.</Text>
            </View>

            {/**/}
            {/*</View>*/}

            <Detail/>





        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:20,
    },
    line:{
        height:20,
        width:'100%',
        backgroundColor:Color.lightBlack,

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

export default ProductDetail;

