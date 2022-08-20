import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { DATA4 } from '../../../assets/Data';

export default function MyWishlist({ navigation }) {


    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={style.linearGradient}>
                <View style={style.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={style.heading}>My Wishlist</Text>
                    <View style={style.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={style.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <FlatList
                data={DATA4}
                keyExtractor={({ id }) => id}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={style.productCard} onPress={() => navigation.navigate('Details', item)}>
                        <Image source={item.img} style={style.productCardimg} />
                        <Text style={style.productCardtxt}>{item.name} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="price-tag" size={25} color={COLORS.Gradient1} style={style.headericon} />
                            <Text style={style.productCardtxt}> {item.price} /- </Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>

    );
}

const style = StyleSheet.create({
    productCard: {
        height: 200,
        width: '45%',
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: '2%',
        marginVertical: '5%',
        padding: 10,
        alignItems: 'center'
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: '2%',
        color: 'black'
    },
    productCardimg: {
        height: 80,
        width: '90%',
        margin: '5%',
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
    productCardtxt: {
        fontWeight: "bold",
        fontSize: SIZES.h4,
        margin: '5%',
        color: 'black'
    },
});


