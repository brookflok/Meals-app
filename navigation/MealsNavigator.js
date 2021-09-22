import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { enableScreens } from 'react-native-screens'

import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'


enableScreens()


const MealsNavigator = () => {

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
        },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigator