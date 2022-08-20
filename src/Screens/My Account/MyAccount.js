import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export default function MyAccount({ navigation }) {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>My Account</Text>
                    <View style={styles.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <AntDesign name="shoppingcart" size={30} color={COLORS.white} onPress={() => { navigation.navigate('Shopping Cart') }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>



            <View style={styles.container}>
                <View style={styles.subView}>
                    <AntDesign name="user" size={25} color={COLORS.black} onPress={() => { navigation.navigate('Shopping Cart') }} />
                    <Text style={styles.txt}> M . Souhaib</Text>
                </View>
            </View>
            <View style={styles.containerx}>
                <TouchableOpacity onPress={() => navigation.navigate('My Orders')}>
                    <LinearGradient colors={[COLORS.Gradient2, COLORS.Gradient1]} style={styles.pay}>
                        <Foundation name="clipboard-notes" size={45} color={COLORS.white} />
                        <Text style={styles.middletxt}>My Orders</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Wishlist')} >
                    <LinearGradient colors={['#3BB78F', '#0BAB64']} style={styles.pay}>
                        <Foundation name="heart" size={45} color={COLORS.white} />
                        <Text style={styles.middletxt}>My Wishlist</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>


            {/* <TouchableOpacity style={styles.btn} >
                        <FontAwesome name="address-book-o" size={25} color={COLORS.black} />
                        <Text style={styles.btntxt}> Address Book</Text>
                    </TouchableOpacity> */}

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Personal Info')}>
                <MaterialCommunityIcons name="folder-information-outline" size={25} color={COLORS.black} />
                <Text style={styles.btntxt}> Personal Information</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Reviews')}>
                <MaterialCommunityIcons name="star-box-multiple-outline" size={25} color={COLORS.black} />
                <Text style={styles.btntxt}> Reviews</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    maintxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    container: {
        height: 60,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: '3%',
        marginHorizontal: '2%',
        flexDirection: 'row'
    },
    containerx: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: '7%',
        marginHorizontal: '2%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    subView: {
        height: 100,
        marginLeft: 10,
        padding: 20,
        flexDirection: "row",
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: 2,
        color: 'black'
    },
    btn: {
        height: 70,
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: COLORS.darkgray,
        borderWidth: 0.5
    },
    btntxt: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        color: COLORS.black,

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
    inp1: {
        height: 45,
        borderRadius: 3,
        width: '100%',
        marginVertical: '3%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.darkgray

    },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10,
        width: '90%'
    },
    pay: {
        width: '90%',
        height: 120,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '7%',
        padding: 10
    },
    middletxt: {
        fontSize: SIZES.h3,
        color: COLORS.white,
        textAlign: 'center',
    },
});


