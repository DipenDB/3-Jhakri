
import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Image} from "react-native";
import Color from "../../Constants/Color";
import {CATEGORY, DATA} from "../../Constants/Recipe";
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'





const ProductsCard=()=>{
    const route=useRoute();
    const navigation=useNavigation();

    const category = CATEGORY.find(category=>category.category===route.params.category)

    const products = DATA.filter(product=>product.category===category.id)


    const renderProducts=({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail',{productId:item.id,title:item.name})} style={styles.productsCardContainer}>

                <View style={{...styles.card,flexDirection:'row'}}>
                    <Image
                        style={styles.image}
                        source={{
                            uri:item.img,
                        }}
                    />
                    <View style={{marginTop: 10}}>
                        <View style={styles.description}>
                            <Text maxLength={20} style={{fontFamily:'ubuntu-bold',fontSize:20,}}>{item.name}</Text>
                            <Text numberOfLines={2} style={styles.subtitle}>{item.description}</Text>
                        </View>

                        <View style={{paddingBottom:5,marginTop: 10,}}>
                            <Text style={{fontFamily:'ubuntu-bold',fontSize:20,color: Color.primary}}>
                                {item.price}
                            </Text>
                        </View>
                    </View>

                </View>



            </TouchableOpacity>
        )
    }


    return(

        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={
                renderProducts


                // <View style={styles.productsCardContainer}>
                //
                //     <View style={{...styles.card,flexDirection:'row'}}>
                //         <Image
                //             style={styles.image}
                //             source={{
                //                 uri:item.img,
                //                 // uri: 'https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg',
                //             }}
                //         />
                //         <View style={{marginTop: 10}}>
                //             <View style={styles.description}>
                //                 <Text maxLength={20} style={{fontFamily:'ubuntu-bold',fontSize:20,}}>Title</Text>
                //                 <Text numberOfLines={2} style={styles.subtitle}>My android emulator was freezing for good when the single line text was going out of bonds. It was a terrible bug to find and to fix (this not-so related SO</Text>
                //             </View>
                //
                //             <View style={{paddingBottom:5,marginTop: 10,}}>
                //                 <Text style={{fontFamily:'ubuntu-bold',fontSize:20,color: Color.primary}}>
                //                     Rs.400
                //                 </Text>
                //             </View>
                //         </View>
                //
                //     </View>
                //
                //
                //
                // </View>

            }
        />
    )
}

const styles = StyleSheet.create({
    productsCardContainer:{
        marginTop:5,
        padding:20,
    },
    card:{
        width:'100%',
        height:120,
        // backgroundColor:'gray',
    },
    description:{
        width:200,
    },
    image:{
        height: 120,
        width:120,
        borderRadius:10,
        marginRight:15,
    },
    subtitle:{
        fontFamily:'ubuntu-regular',
        fontSize:15,
        color:Color.lightBlack,
    },
})

export default ProductsCard;

