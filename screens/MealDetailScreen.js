import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import BodyText from '../components/BodyText';
import CustomHeaderButton from '../components/HeaderButton';
import ListItemComponent from '../components/ListItemComponent';
import { toggleFavorite } from '../store/actions/meals';


const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.route.params.mealId
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    const currentMealIsFavoriteMeals = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))



    //create Dispatch to be used in app
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='Favorite' iconName={currentMealIsFavoriteMeals ? 'ios-star' : 'ios-star-outline'} onPress={() => {
                        //Using dispatch to use the action to use the reducer and parsing the meals id
                        dispatch(toggleFavorite(selectedMeal.id));
                    }} />
                </HeaderButtons>
            )
        })
    })


    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.mealDetails}>
                <BodyText>{selectedMeal.duration}m</BodyText>
                <BodyText>{selectedMeal.complexity.toUpperCase()}</BodyText>
                <BodyText>{selectedMeal.affordability.toUpperCase()}</BodyText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItemComponent key={ingredient}>{ingredient}</ListItemComponent>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItemComponent key={step}>{step}</ListItemComponent>)}
        </ScrollView>
    );

}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').height / 4
    },
    mealDetails: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default MealDetailScreen;