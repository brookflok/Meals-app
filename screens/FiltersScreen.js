import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FilterSwitchComponent from '../components/FilterSwitchComponent';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    const {navigation} = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch();


    //Save Filters function and useCallback to prevent recreation of a 
    const saveFilters = () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters))
        console.log(appliedFilters)
    }

        useLayoutEffect(() => {
            navigation.setOptions({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Menu' iconName='menu-sharp' onPress={() => {
                            navigation.openDrawer();
                        }} />
                    </HeaderButtons>
                ),
                //Creating a save button that saves all of filters
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Save' iconName='ios-save' onPress={() => {
                           navigation.setParams(saveFilters())
                        }} />
                    </HeaderButtons>
                )
            })
        })

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitchComponent
                name='Gluten-free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitchComponent
                name='Lactose-free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitchComponent
                name='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitchComponent
                name='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)} />
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
})

export default FiltersScreen;