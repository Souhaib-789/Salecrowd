import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { DATAx } from '../../assets/Data';

export default function AllCategories({ navigation }) {

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={style.linearGradient}>
                <View style={style.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={style.heading}>All Categories</Text>
                    <View style={style.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={style.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <>
                <View style={style.menuopt}>
                    <Text style={style.txt}>ALL CATEGORIES</Text>
                </View>
                <View style={style.containerx}>
                    <FlatList
                        data={DATAx}
                        keyExtractor={({ id }) => id}
                        numColumns={3}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => navigation.navigate(item.nextScreen)}>
                                <LinearGradient colors={['#3BB78F', '#0BAB64']} style={style.pay}>
                                    <Image source={item.img} style={style.img} />
                                    <Text style={style.middletxt}>
                                        {item.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </>
        </View>

    );
}

const style = StyleSheet.create({

    containerx: {
        height: 550,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: '2%',
        padding: 10
    },
    img: {
        height: 50,
        width: 60,
        resizeMode: 'contain'
    },
    headview: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: SIZES.h3,
        color: 'white',
        marginLeft: '3%'
    },
    miniview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '40%',
        alignItems: 'center'

    },
    headericon: {
        marginLeft: '10%'
    },
    linearGradient: {
        height: '8%',
        padding: 15,
    },
    menuopt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: '10%',
        marginVertical: '10%',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 3,
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: '3%',
        color: 'black'
    },
    pay: {
        width: 100,
        height: 90,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 5,
        padding: 10
    },
    middletxt: {
        fontSize: SIZES.h5,
        color: COLORS.white,
        textAlign: 'center',
    },
});


