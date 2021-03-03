

import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {useRoute} from '@react-navigation/native'
import {DATA} from "../../Constants/Recipe";



const Rating=()=>{
    const route=useRoute();
    const product = DATA.find(product=>product.id===route.params.productId)
    // const reviews = product.reviews;
    let rate=product.reviews.rating;
    console.log(product.reviews.rating);


    const totalRating=new Array(5).fill(1);
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
            {/*{*/}
            {/*    totalRating.map(()=>{*/}

            {/*        totalRating.map((rat,i)=>{*/}
            {/*            if (Math.floor(reviews.rating)>=i+1){*/}
            {/*                return <Ionicons name="star" size={14} color="green" />*/}

            {/*            }*/}
            {/*        })*/}

            {/*        return(*/}
            {/*            <Ionicons name="star" size={14} color="black" />*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </View>
    )



}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    }
})

export default Rating;

