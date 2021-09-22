import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'
import BodyText from '../components/BodyText';


import CustomHeaderButton from '../components/HeaderButton';
import MealsListComponent from '../components/MealsListComponent';


const FavoriteScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item title='Favorite' iconName='menu-sharp' onPress={() => {
                        props.navigation.openDrawer();
                    }} />
                </HeaderButtons>
            ),

        })
    }, [props.route])

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.content}>
                <BodyText>No favorite meals found. Start adding some!</BodyText>
            </View>
        )
    } else {

        return (
            <MealsListComponent listData={favoriteMeals} navigation={props.navigation} />
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoriteScreen;