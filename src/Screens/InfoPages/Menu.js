import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';



export default function Menu({ navigation }) {


    const ContactUs = () => {
        let phone = '0300 0000000';
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        } else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>Menu</Text>
                </View>
            </LinearGradient>



            {/* Body */}
            <ScrollView >

                <View style={styles.subdiv}>


                    <TouchableOpacity onPress={() => navigation.navigate('Delivery Info')}>
                        <View style={styles.menuopt}>
                            <MaterialCommunityIcons name='truck-delivery' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Delivery Information</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Exchange Policy')}>
                        <View style={styles.menuopt}>
                            <FontAwesome name='exchange' size={27} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Exchange Policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
                        <View style={styles.menuopt}>
                            <MaterialIcons name='privacy-tip' size={27} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Privacy Policy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Terms and Conditions')}>
                        <View style={styles.menuopt}>
                            <MaterialIcons name='rule' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Terms and Conditions</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <View style={styles.menuopt}>
                            <Entypo name='login' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <View style={styles.menuopt}>
                            <FontAwesome name='user-plus' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Register</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ContactUs}>
                        <View style={styles.menuopt}>
                            <FontAwesome name='phone' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Contact Us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('My Account') }} >
                        <View style={styles.menuopt}>
                            <MaterialIcons name='account-box' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> My Account</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('My Wishlist') }} >
                        <View style={styles.menuopt}>
                            <Feather name='heart' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> My Wishlist</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        Alert.alert(
                            'Are you sure to Logout from Salecrowd?',
                            "",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => null,

                                },
                                { text: "OK", onPress: () => navigation.navigate('Home') }
                            ]
                        )} >
                        <View style={styles.menuopt}>
                            <SimpleLineIcons name='logout' size={25} color={COLORS.Gradient2} style={styles.icon} solid />
                            <Text style={styles.txt}> Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1
    },
    linearGradient: {
        height: '8%',
        padding: 15,
    },
    headericon: {
        marginLeft: '10%'
    },
    miniview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '40%',
        alignItems: 'center'

    },
    headview: {
        flexDirection: "row",
    },
    heading: {
        fontSize: SIZES.h3,
        color: 'white',
        marginLeft: '3%'
    },
    subheading: {
        fontSize: SIZES.h3,
        color: COLORS.black,
        margin: '5%',
        fontWeight: 'bold'
    },

    img: {
        height: 40,
        width: 40,
        marginLeft: '2%',
        resizeMode: 'stretch',
    },
    middletxt: {
        fontSize: SIZES.h5,
        color: COLORS.white,
        textAlign: 'center',
    },
    pay: {
        width: 100,
        height: 85,
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 5,
        padding: 10
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
        margin: '2%'
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
    footer: {
        marginVertical: '10%',
        marginHorizontal: '40%'
    },
    menuopt: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '7%',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 0.97,
    },
    subdiv: {
        marginVertical: '20%',
        marginRight: '30%'
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: '7%',
        color: 'black'
    },



});



