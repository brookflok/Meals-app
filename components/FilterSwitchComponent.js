import React from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native';

import Colors from '../constants/Colors';
import BodyText from './BodyText';

const FilterSwitchComponent = props => {
    return (
        <View style={styles.filterContainer}>
            <BodyText>{props.name}</BodyText>
            <Switch
                trackColor={{ true: Colors.primaryColor, false: 'gray' }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical:15
    }
})

export default FilterSwitchComponent;