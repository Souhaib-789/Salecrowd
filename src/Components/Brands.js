import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../assets/Theme';

export default function Brands(props) {

    return (
        <View style={{ padding: 15 }}>
        <Text style={styles.subheading}>{props.heading}</Text>
        <FlatList
            data={props.item}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <TouchableOpacity  style={styles.card2}>
                    <Image source={item.img} style={styles.cardImg2} />
                </TouchableOpacity>
            )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    
   
    subheading: {
        fontSize: SIZES.h3,
        color: COLORS.black,
        margin: '5%',
        fontWeight: 'bold'
    },
    card2: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: 150,
        padding: 5,
    },
    cardImg2: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 10

    },
});


