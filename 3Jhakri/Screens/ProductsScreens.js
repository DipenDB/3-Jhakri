
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageCard from "../Components/ImageCard/ImageCard";
import ProductsCard from "../Components/ImageCard/ProductsCard";

import {useRoute} from '@react-navigation/native';
import {CATEGORY} from "../Constants/Recipe";

const ProductsScreen=(props)=>{
    const route=useRoute();
    const category = CATEGORY.find(category=>category.category===route.params.category)

    return(
        <View>
            <ImageCard img={category.img}/>

            <ProductsCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default ProductsScreen;

