
import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Color from "../../Constants/Color";
import ReviewCard from "./ReviewCard";

import {useRoute} from '@react-navigation/native'
import {DATA} from "../../Constants/Recipe";

const Review=()=>{

    // const renderProduct=({items})=>{
    //     return(
    //         <ReviewCard/>
    //     )
    // }


    const route=useRoute();

    const product= DATA.find(product=>product.id===route.params.productId)




    return(
        <View style={styles.container}>
            <View style={styles.reviewContainer}>
                <Text style={styles.title}>Reviews...</Text>
            </View>

            {product.reviews.map((item) => <ReviewCard review={item} key={item.key}/>)}


            {/*<FlatList*/}
            {/*    data={product.reviews}*/}
            {/*    keyExtractor={(item) => item.id}*/}
            {/*    renderItem={renderProduct}*/}
            {/*/>*/}



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
    reviewContainer:{
        paddingHorizontal:20,
        backgroundColor:Color.lightBlack,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:2,
    },
    title:{
        fontFamily:'ubuntu-bold',
        color:Color.white,
        fontSize:25,
    },
})

export default Review;

