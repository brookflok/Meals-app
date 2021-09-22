import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

import MealsTabNavigator from './MealsTabNavigator'
import FilterScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'


enableScreens()

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: Colors.primaryColor,
                drawerLabelStyle: {
                    fontFamily: 'open-sans-bold'
                },

            }}
        >
            <Drawer.Screen
                options={{ title: 'Meals' }}
                name='MealsCategory' component={MealsTabNavigator} />
            <Drawer.Screen
                options={{ title: 'Filters' }}
                name='Filter' component={FilterStackNavigator} />
        </Drawer.Navigator>
    );
}

const FilterStackNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,

        }}>
            <Stack.Screen name='Filters' component={FilterScreen} />
        </Stack.Navigator>
    );
}




export default DrawerNavigation;
