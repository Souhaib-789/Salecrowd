import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';

export default function MyOrders({ navigation }) {

    const sand = [
        {
            name: 'Jacket',
            quantity: 2,
            img: require('../../../assets/Images/men.png')
        },
        {
            name: 'Garnier Facewash',
            quantity: 3,
            img: require('../../../assets/Images/garnier.jpg')
        },
        {
            name: 'Gaming PC',
            quantity: 1,
            img: require('../../../assets/Images/pc.png')
        },
        {
            name: 'Toaster',
            quantity: 1,
            img: require('../../../assets/Images/toaster.jpg')
        }
    ]
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={style.linearGradient}>
                <View style={style.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={style.heading}>My Orders</Text>
                    <View style={style.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={style.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            {/* <FlatList
                data={DATA4}
                keyExtractor={({ id }) => id}
                numColumns={2}
                renderItem={({ item, index }) => ( */}
            <View style={style.productCard} >
                <ScrollView>
                    <Text style={style.productCardtxt}>Order ID : 9765C-6545456D</Text>
                    <Text style={style.productCardtxt}>----------------------------</Text>
                    <FlatList
                        data={sand}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={item.img} style={style.productCardimg} />
                                    <Text style={style.productCardtxt}>{item.name}</Text>
                                </View>
                                <Text style={style.productCardtxt}>{item.quantity}</Text>
                            </View>
                        )} />
                    <Text style={style.productCardtxt}>----------------------------</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="price-tag" size={25} color={COLORS.Gradient1} style={style.headericon} />
                        <Text style={style.productCardtxt}>TOTAL : 8500/-</Text>
                    </View>
                    <Text style={style.productCardtxt}>Name : M.Souhaib</Text>
                    <Text style={style.productCardtxt}>Address : Karachi , Sindh Pakistan</Text>
                    <Text style={style.productCardtxt}>Phone # : 0300-0000000</Text>
                    <Text style={style.productCardtxt}>Shipping Method : Standard Shipping</Text>


                </ScrollView>
            </View>
            {/* )} /> */}
        </View>

    );
}

const style = StyleSheet.create({
    productCard: {
        height: 400,
        width: '90%',
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: '5%',
        marginVertical: '10%',
        padding: 5,
        // alignItems: 'center'
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: '2%',
        color: 'black'
    },
    productCardimg: {
        height: 50,
        width: 60,
        margin: '3%',
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


