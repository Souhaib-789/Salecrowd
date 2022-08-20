import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';


export default function PersonalInfo({ navigation }) {

    const [gender, setgender] = useState();
    const [phone, setphone] = useState();
    const [name, setname] = useState();

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>  Personal Information</Text>
                    <View style={styles.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={styles.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.containerx}>
                <Text style={styles.txtx}>Name :</Text>
                <View style={styles.inp1}>
                    <TextInput style={styles.inputtxt}
                        value={name}
                        onChangeText={(e) => setname(e)}
                    />
                </View>
                <Text style={styles.txtx}>Gender :</Text>
                <View style={styles.inp1}>
                    <TextInput style={styles.inputtxt}
                        value={gender}
                        onChangeText={(e) => setgender(e)}
                    />
                </View>
                <Text style={styles.txtx}>Phone :</Text>
                <View style={styles.inp1}>
                    <TextInput style={styles.inputtxt}
                        value={phone}
                        onChangeText={(e) => setphone(e)}
                    />
                </View>
                <View style={styles.containerXY}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Thankyou')} >
                        <Text style={styles.btntxt}> Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerx: {
        height: 450,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: '8%',
        marginHorizontal: '3%',
        padding: 20
    },
    txtx: {
        fontWeight: "bold",
        fontSize: 15,
        margin: 2,
        color: 'black'
    },
    btn: {
        backgroundColor: COLORS.Gradient1,
        borderRadius: 5,
        marginTop: '5%',
        height: 60,
        width: '90%',
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        color: '#fff'
    },
    headview: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: SIZES.h3,
        color: 'white',
        marginLeft: '8%'
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
        borderRadius: 10,
        width: '100%',
        marginVertical: '3%',
        flexDirection: 'row',
        backgroundColor: COLORS.lightGray2,
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
    containerXY:{
        alignItems: 'center',
        marginTop: '5%'
    }
});


