
import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const Search=()=>{
    return(
        <View style={styles.search}>
            <View style={{flexDirection:'row'}}>
                <Ionicons name="search-sharp" size={24} color="gray" />
                <TextInput autoCapitalize='words' style={styles.searchText} multiline={false} maxLength={35}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    search:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:20,
        paddingLeft:20,
        marginHorizontal:20,
        marginTop:20,
        alignItems:'flex-start',
        justifyContent:'center',
        marginBottom:10,

    },
    searchText:{
      marginLeft:10,
        color: 'gray',
    },





})

export default Search;

