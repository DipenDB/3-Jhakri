import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {CATEGORY, DATA} from "../../Constants/Recipe";




const ImageCard=({img})=>{






    return(

            <View>

                <Image
                    style={styles.image}
                    source={{
                        uri: img
                        // uri: 'https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg',
                    }}
                />
            </View>

    )
}

const styles = StyleSheet.create({

    image:{
        height:300,
        width:'100%',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
    }

})

export default ImageCard;

