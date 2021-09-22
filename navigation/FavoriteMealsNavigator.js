import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { enableScreens } from 'react-native-screens'

import Colors from '../constants/Colors'
import FavoriteScreen from '../screens/FavoriteScreen'
import MealDetailScreen from '../screens/MealDetailScreen'


enableScreens()


const FavoriteMealsNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator
            screenOptions={{
                
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
                headerTitleStyle: {
                    fontFamily: 'open-sans-bold',
                    fontWeight:undefined,
                }
            }}
        >
            <Stack.Screen name="Favorites" component={FavoriteScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Navigator>
    );
}

export default FavoriteMealsNavigator