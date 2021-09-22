import React, { useLayoutEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridComponent from '../components/CategoryGridComponent';
import CustomHeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item title='Drawer' iconName='menu-sharp' onPress={() => {
                        props.navigation.openDrawer();
                    }} />
                </HeaderButtons>
            ),
        })
    })

    const renderItemGrid = (itemData) => {
        return (
            <CategoryGridComponent
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate(
                        'CategoryMeals',
                        {
                            categoryId: itemData.item.id,
                        }
                    )
                }}
            />
        )
    }

    return (
        <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItemGrid} />
    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CategoriesScreen;