
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreens";
import Color from "../Constants/Color";
import ProductDetailScreen from "../Screens/ProductDetailScreen";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "../Screens/ProfileScreen";
import General from "../Screens/Profile/General";
import Personal from "../Screens/Profile/Personal";
import Account from "../Screens/Drawer/Accont";
import Settings from "../Screens/Drawer/Settings";


const HomeStack = createStackNavigator();
const Profile = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileTab = createMaterialTopTabNavigator();
const Drawer =createDrawerNavigator();

const StackNavigation = ()=>{
    return(
        <NavigationContainer>
            <DrawerNavigator/>
            {/*<TabNavigator/>*/}
        </NavigationContainer>

    )
}



//---------------------------------------------------------------------------------------------------
const FoodStackNavigator=()=>{
    return(
        <HomeStack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerShown:true,
                             }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <HomeStack.Screen name="Products" component={ProductsScreen}
                              options={{
                                  title: 'Products',
                                  headerStyle: {
                                      backgroundColor: Color.primary,
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontFamily:'ubuntu-bold',
                                      fontSize:25,
                                      alignSelf:'center',

                                  },
                              }}/>

            <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen}
                              options={{
                                  title: 'Product Detail Screen',
                                  headerStyle: {
                                      backgroundColor: Color.primary,
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontFamily:'ubuntu-bold',
                                      fontSize:25,
                                      alignSelf:'center',

                                  },
                              }}/>

        </HomeStack.Navigator>
    )
}


//---------------------------------------------------------------------------------------------------------
const TabNavigator=()=>{
    return(
        <Tab.Navigator tabBarOptions={{
            activeBackgrondColor:Color.primary,
            activeTintColor:'red',
            showLabel:false,
        }}>
            <Tab.Screen name='Home' component={FoodStackNavigator}
                options={{
                    tabBarIcon:({ focused, color, size }) => {

                       if(focused){
                           return  <Ionicons name="ios-home-sharp" size={29} color={Color.primary} />
                       }
                        return <Ionicons name="ios-home-sharp" size={24} color={Color.lightBlack} />
                    }
                }}/>
            <Tab.Screen name='Search'  component={FoodStackNavigator} options={{
                tabBarIcon:({ focused, color, size }) => {

                    if(focused){
                        return  <Ionicons name="search" size={29} color={Color.primary} />
                    }
                    return <Ionicons name="search" size={24} color={Color.lightBlack} />
                }
            }}/>
            <Tab.Screen name='favorite'  component={FoodStackNavigator} options={{
                tabBarBadge:'22',
                tabBarBadgeStyle:{
                backgroundColor: 'green',
                fontSize:12,
            },
                tabBarIcon:({ focused, color, size }) => {

                    if(focused){
                        return  <Ionicons name="heart" size={29} color={Color.primary} />
                    }
                    return <Ionicons name="heart" size={24} color={Color.lightBlack} />
                }
            }}/>
            <Tab.Screen name='Profile'  component={ProfileNavigator}options={{
                tabBarIcon:({ focused, color, size }) => {

                    if(focused){
                        return  <Ionicons name="person" size={29} color={Color.primary} />
                    }
                    return <Ionicons name="person" size={24} color={Color.lightBlack} />
                }            }}/>
        </Tab.Navigator>
    )
}
//-------------------------------------------------------------------------------------------------------------
const ProfileNavigator=()=>{
    return(
        <Profile.Navigator>
            <Profile.Screen name="Profile" component={ProfileTabNavigator}/>
        </Profile.Navigator>
    )
}
//----------------------------------------------------------------------------------------------------------------
const ProfileTabNavigator=()=>{
    return(
        <ProfileTab.Navigator>
            <ProfileTab.Screen name="General" component={General}/>
            <ProfileTab.Screen name="Personal" component={Personal}/>
        </ProfileTab.Navigator>
    )
}

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator drawerType='slide' initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Account" component={Account}/>
            <Drawer.Screen name="Settings" component={Settings}/>
            <Drawer.Screen name="Profile" component={ProfileNavigator}/>

        </Drawer.Navigator>
    )
}



export default StackNavigation;

