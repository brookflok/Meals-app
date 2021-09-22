import React, { useLayoutEffect } from 'react';
import MealsListComponent from '../components/MealsListComponent';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';


const CategoryMealsScreen = props => {
 

    const categoryId = props.route.params.categoryId

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    //Filter Meals acording to category 
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedCategory.title,
        })
    })
    
    if(displayMeals.length === 0){
        return(
            <View style={styles.content}>
                <BodyText>
                    No meals founds, maybe check your filters?
                </BodyText>
            </View>
        )
    }

    return (
       <MealsListComponent listData={displayMeals} navigation={props.navigation} />
    );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default CategoryMealsScreen;