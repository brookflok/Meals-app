import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import BodyText from './BodyText';

const MealItemComponent = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                       <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <BodyText>{props.duration}m</BodyText>
                        <BodyText>{props.complexity.toUpperCase()}</BodyText>
                        <BodyText>{props.affordability.toUpperCase()}</BodyText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: "#ccc",
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10,
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        height:'15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'#fff',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }

})

export default MealItemComponent;