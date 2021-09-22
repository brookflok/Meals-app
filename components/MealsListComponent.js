import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import MealItemComponent from './MealItemComponent'

const MealsListComponent = props => {

    const renderMealItem = itemData => {
        return (
            <MealItemComponent
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate(
                        'MealDetails',
                        {
                            mealId: itemData.item.id
                        }
                    )

                }} />)
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.flatList} data={props.listData} renderItem={renderMealItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        width: '100%',
    }
})

export default MealsListComponent;