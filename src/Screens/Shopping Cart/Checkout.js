import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';


export default function Checkout({ navigation }) {

    const [address, setaddress] = useState();
    const [city, setcity] = useState();
    const [name, setname] = useState();
    const [province, setprovince] = useState();
    const [phone, setphone] = useState();
    const [delivery, setdelivery] = useState();


    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>Checkout</Text>
                    <View style={styles.miniview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={styles.headericon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>


            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.subView}>
                        <Text style={styles.txt}>TOTAL</Text>
                        <Text style={styles.txt}> Rs. 1000</Text>
                    </View>
                </View>
                <View style={styles.containerx}>
                <Text style={styles.txtx}>Name:</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={name}
                            onChangeText={(e) => setname(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>Address:</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={address}
                            onChangeText={(e) => setaddress(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>City:</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={city}
                            onChangeText={(e) => setcity(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>Province / State:</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={province}
                            onChangeText={(e) => setprovince(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>Phone #:</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={phone}
                            onChangeText={(e) => setphone(e)}
                        />
                    </View>
                    <Picker
                        selectedValue={delivery}
                        onValueChange={(val) =>
                            setdelivery(val)
                        }
                        style={{ margin: '3%', fontSize: '18' }}>
                        <Picker.Item label="Shipping Method" value="" />
                        <Picker.Item label="Standard Shipping Rs-0" value="Standard Shipping Rs-0" />
                    </Picker>
                </View> 
            </ScrollView>
            <View style={styles.containerXY}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Thankyou')} >
                        <Text style={styles.btntxt}> ORDER</Text>
                    </TouchableOpacity>
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        padding: 20
    },
    maintxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    container: {
        height: 60,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: '3%',
        marginHorizontal: '2%',
        flexDirection: 'row'
    },
    containerx: {
        height: 550,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: '3%',
        marginHorizontal: '2%',
        padding: 10
    },
    img: {
        height: 55,
        width: 95,
        resizeMode: 'contain'
    },
    subView: {
        height: 100,
        marginLeft: 10,
        padding: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: 2,
        color: 'black'
    },
    txtx: {
        fontWeight: "bold",
        fontSize: 15,
        margin: 2,
        color: 'black'
    },
    subView2: {
        marginRight: 20,
        alignItems: 'center'
    },
    incdec: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.Gradient2,
        paddingHorizontal: 5,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    icon: {
        margin: 5,
        fontWeight: 'bold',
    },
    trash: {
        margin: '3%'
    },
    containerX: {
        flexDirection: 'row',
        marginLeft: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    ttl: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    containerXY: {
        marginBottom: '5%',
        alignItems: 'center'
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
    address: {
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#fdd5b1',
        margin: '5%',
        borderRadius: 5
    },
    addressx: {
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#fdd5b1',
        margin: '5%',
        marginTop: 0,
        borderRadius: 5
    },
    kl: {
        marginHorizontal: '20%',
        marginVertical: '20%',
        alignItems: 'center'
    },
    otxt: {
        fontSize: 20,
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'center'
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
    inp1: {
        height: 45,
        borderRadius: 3,
        width: '100%',
        marginVertical: '3%',
        flexDirection: 'row',
        // backgroundColor: COLORS.darkgray,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.darkgray

    },
    // icon: {
    //     margin: '3%'
    // },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10,
        width: '90%'
    },
});


