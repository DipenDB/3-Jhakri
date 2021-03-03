

import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import ImageCard from "../Components/ImageCard/ImageCard";

import {useRoute} from '@react-navigation/native';
import { DATA} from "../Constants/Recipe";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Review from "../Components/Reviews/Review";


const ProductDetailScreen=()=>{

    const route=useRoute();
    // console.log(route);
    const product = DATA.find(data=>data.id===route.params.productId)

    return(
        <ScrollView>
            <ImageCard img={product.img}/>

                <ProductDetail product={product}/>
                <Review/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        height:300,
        width:'100%',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
    }
})

export default ProductDetailScreen;

