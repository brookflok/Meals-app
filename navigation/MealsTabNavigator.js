import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors'
import MealsNavigator from './MealsNavigator';
import FavoriteMealsNavigator from './FavoriteMealsNavigator';


enableScreens()

const MealsTabNavigator = () => {
    const Tab =
        Platform.OS === 'android'
            ? createMaterialBottomTabNavigator()
            : createBottomTabNavigator()

    return (
        <Tab.Navigator
            shifting='true'
            activeColor={Colors.accentColor}
            inactiveColor={Colors.primaryColor}
            screenOptions={({ route }) => ({
                headerTitleStyle: {
                    fontFamily: 'open-sans-bold'
                },
                tabBarLabelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                tabBarLabel: <Text style={{ fontFamily: 'open-sans-bold' }}>{route.name}</Text>,
                tabBarColor: '#fff',
                tabBarIcon: ({ focused, color, size = 25 }) => {
                    let iconName;

                    if (route.name === "Category") {
                        iconName = focused
                            ? 'ios-pizza'
                            : 'ios-pizza-outline'
                    } else if (route.name === 'Favorite') {
                        iconName = focused
                            ? 'ios-heart'
                            : 'ios-heart-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: Colors.accentColor,
                tabBarInactiveTintColor: Colors.primaryColor,
            })}>
            <Tab.Screen name="Category" component={MealsNavigator} />
            <Tab.Screen name="Favorite" component={FavoriteMealsNavigator} />
        </Tab.Navigator>
    );
}

export default MealsTabNavigator;
