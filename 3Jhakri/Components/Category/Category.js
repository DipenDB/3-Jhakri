
import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Title from "../Title/Title";
import {ImageBackground} from "react-native";
import Card from "./Card";
import {FlatList} from "react-native";
import {CATEGORY, DATA} from "../../Constants/Recipe";

const Category=()=>{

    const renderCategory=({item})=>{
        return(
            <Card title={item.category} img={item.img}/>
        )
    }


    return(
        <View style={styles.container}>
            <Title>Category</Title>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={CATEGORY}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />




        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        marginLeft:20,
    },


})

export default Category;

