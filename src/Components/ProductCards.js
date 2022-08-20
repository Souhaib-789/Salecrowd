import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../assets/Theme';

export default function ProductCards(props) {

    const navigation= useNavigation();
    return (
        <View style={{ backgroundColor: '#F0FFFF', padding: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.subheading}>{props.heading}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntxt}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: '5%' }}>
                <FlatList
                    data={props.item}
                    keyExtractor={({ id }) => id}
                    numColumns={2}

                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} style={styles.card} onPress={()=> {navigation.navigate('Details', item)}}>
                            <Image source={item.img} style={styles.cardImg} />
                            <Text style={[styles.middletxt, { color: COLORS.black }]}>{item.name}</Text>
                            <Text style={[styles.middletxt, { color: COLORS.black }]}> Rs : {item.price} /-</Text>

                        </TouchableOpacity>
                    )}
                />
            </View>
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

   
    middletxt: {
        fontSize: SIZES.h5,
        color: COLORS.white,
        textAlign: 'center',
    },
  
    btn: {
        backgroundColor: '#0047AB',
        width: '25%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    btntxt: {
        padding: 10,
        color: COLORS.white,
        fontSize: SIZES.h5,
    },
    card: {
        backgroundColor: COLORS.white,
        width: '50%',
        height: 200,
        padding: 5,
        borderColor: 'grey',
        borderWidth: 0.3,
    },
    cardImg: {
        width: '90%',
        height: '70%',
        margin: '2%',
        resizeMode: 'stretch'
    },
   




});


