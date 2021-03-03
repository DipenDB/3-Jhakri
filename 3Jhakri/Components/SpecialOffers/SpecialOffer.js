
import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Title from "../Title/Title";
import SpecialCard from "./SpecialCard";
import {DATA} from "../../Constants/Recipe";

const SpecialOffer=()=>{
    const renderSpecialFood=({item})=>{
        return(
            <SpecialCard product={item}/>
        )
    }



    return(
        <View style={styles.container}>
            <Title>Special Offer</Title>


            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={(item)=>item.id}
                renderItem={
                    renderSpecialFood
                }
            />


            {/*<SpecialCard/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    }
})

export default SpecialOffer;

