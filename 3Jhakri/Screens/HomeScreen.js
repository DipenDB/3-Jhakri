
import React from 'react';
import {View,ScrollView,StyleSheet,StatusBar} from 'react-native';
import Logo from "../Components/Header/Logo";
import Search from "../Components/Header/Search";
import Title from "../Components/Title/Title";
import Category from "../Components/Category/Category";
import SpecialOffer from "../Components/SpecialOffers/SpecialOffer";
import {DATA} from "../Constants/Recipe";

const HomeScreen=(props)=>{

    // const poplar=DATA.filter(food=>food.rating>4);


    return(
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                hidden={false} />
            <Logo/>
            <Search/>
            <Category/>

            <SpecialOffer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default HomeScreen;

