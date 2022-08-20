import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





export default function Signin({ navigation }) {


    const [phone, setphone] = React.useState('');
    const [password, setpassword] = React.useState('');

    return (
        <LinearGradient colors={[COLORS.Gradient2, COLORS.Gradient1]} style={styles.linearGradient}>
            <View style={styles.qauntum}>
                <Image source={require('../../assets/Images/ser.png')} style={styles.img} />

                <View style={styles.inputs}>
                    <View style={styles.inp1}>
                        <FontAwesome name='phone' size={30} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter phone no." style={styles.inputtxt}
                            value={phone}
                            onChangeText={(e) => setphone(e)} />
                    </View>
                    <View style={styles.inp1}>
                        <FontAwesome5 name='lock' size={25} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter password" style={styles.inputtxt}
                            value={password}
                            onChangeText={(e) => setpassword(e)} />
                    </View>

                    <TouchableOpacity>
                        <Text style={[styles.btntxt, { fontSize: SIZES.h5 }]}>Forgot password?</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Shopping Cart')} >
                    <Text style={styles.btntxt}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={styles.OR}>OR</Text>
                <TouchableOpacity style={styles.btnx} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.btntxt}>SIGN UP</Text>
                </TouchableOpacity>

            </View>

        </LinearGradient>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1
    },
    linearGradient: {
        height: '8%',
        padding: 15,
        flex: 1
    },

    img: {
        width: '60%',
        height: 120,
        resizeMode: 'stretch',
        marginVertical: '10%'
    },
    inputs: {
        alignItems: 'center',
        marginTop: 50
    },
    inp1: {
        height: 55,
        borderRadius: 10,
        width: '95%',
        margin: '3%',
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        textAlign: 'center'
    },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10,
        width: '80%'
    },
    txt: {
        fontWeight: "bold",
        fontSize: 20
    },
    btn: {
        backgroundColor: COLORS.black,
        borderRadius: 5,
        marginTop: '8%',
        height: 50,
        width: '90%',
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: SIZES.h3,
        padding: 5,
        color: '#fff'
    },
    btnx: {
        backgroundColor: COLORS.black,
        borderRadius: 5,
        marginTop: '3%',
        height: 50,
        width: '90%',
        justifyContent: 'center'
    },
    OR: {
        fontSize: 20,
        margin: '5%',
        fontWeight: 'bold',
        color: COLORS.white
    },
    icon: {
        margin: 10
    }
    ,
    qauntum: {
        alignItems: 'center'
    }


});



