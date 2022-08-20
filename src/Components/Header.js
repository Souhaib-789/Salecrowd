import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';



export default function Headerx({ navigation }) {

    return (
        <View style={styles.container}>

            <LinearGradient colors={['#0BAB64', '#3BB78F']} style={styles.linearGradient}>
                <View >
                    <Text style={styles.heading}>Salecrowd</Text>
                    <View style={styles.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Countries')}>
                        </TouchableOpacity></View>
                </View>
            </LinearGradient>
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
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    heading: {
        fontSize: 20,
        color: 'white',
        marginLeft: '5%'
    },

});



