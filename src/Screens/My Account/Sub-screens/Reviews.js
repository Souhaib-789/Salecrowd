import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';

export default function Reviews({ navigation }) {

  
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={style.linearGradient}>
                <View style={style.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={style.heading}>Reviews </Text>
                    <View style={style.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={style.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            

            <View style={{marginHorizontal: '15%', marginVertical: '70%'}}>
                <Text style={style.txt}>
                    You have not posted any review
                </Text>
            </View>
        </View>

    );
}

const style = StyleSheet.create({
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: '2%',
        color: 'black'
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
    linearGradient: {
        height: '8%',
        padding: 15,
    },
  
});


