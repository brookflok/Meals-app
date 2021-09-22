import React from 'react'
import { View, StyleSheet } from 'react-native';
import BodyText from './BodyText';

const ListItemComponent = props => {
    return (
        <View style={{...styles.listItem, ...props.style}}>
         <BodyText>{props.children}</BodyText>   
        </View>
    );
}

const styles = StyleSheet.create({
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default ListItemComponent;