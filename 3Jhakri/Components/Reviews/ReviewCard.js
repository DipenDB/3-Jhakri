
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Color from "../../Constants/Color";
import Rating from "../Rating/Rating";

const ReviewCard=({review})=>{
    return(
        <View style={styles.card}>

            <Image
                style={styles.image}
                source={{
                    // uri: img
                    uri: 'https://hrhub.com.np/static/images/avatar-male.png',
                }}
            />
            <View style={{marginLeft:10,}}>
                <View style={{width:220}}>
                    <Text numberOfLines={1} style={styles.title}>{review.name}</Text>
                </View>
                <View style={{width:220}}>
                    <Text numberOfLines={3} flexWrap={true} style={styles.subTitle}>{review.comments}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {/*<Rating/>*/}
                    <Text style={styles.date}>{review.rating}</Text>
                    <Text style={{...styles.date,marginLeft:14}}>{review.date}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBottom:20,
        height:120,
        width:'100%',
        // backgroundColor:Color.primary,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image:{
        height:120,
        width:120,
        borderRadius:10,
    },
    title:{
        fontFamily:'ubuntu-bold',
        fontSize:20,

    },
    subTitle:{
        fontSize:14,
        fontFamily: 'ubuntu-regular',
        color:Color.lightBlack,
    },
    date:{
        fontFamily:'ubuntu-regular',
        fontSize:16,
        color: Color.primary,
    },
})

export default ReviewCard;

