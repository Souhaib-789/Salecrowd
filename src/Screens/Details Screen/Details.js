import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import ImagesCarousel from '../../Components/Carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';







export default function Details({ navigation, route }) {

const item = route?.params;

const [nickname, setnickname] = React.useState();
const [summary, setsummary] = React.useState();
const [review, setreview] = React.useState();

    return (
        <View style={styles.container}>
            {/* Header */}
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>{item.name}</Text>
                    <View style={styles.miniview}>
                        <AntDesign name="shoppingcart" size={30} color={COLORS.white} onPress={() => { navigation.navigate('Shopping Cart') }} />
                        <TouchableOpacity onPress={() => navigation.navigate('Countries')}>
                            <Entypo name="dots-three-vertical" size={25} color={COLORS.white} style={styles.headericon} onPress={() => { navigation.navigate('Menu') }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>



            {/* Body */}
            <ScrollView
            >
                <ImagesCarousel
                url1={item.img}
                url2={item.img2}
                />

                <View style={styles.itemView}>
                    <Text style={styles.txt}>{item.name}</Text>
                    <Text style={styles.lead}>{item.desc}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.txt}>Price : {item.price} /-</Text>
                        <Feather name='heart' size={30} color={COLORS.darkgray} solid />
                        {/* <Entypo name='heart' size={35} color={COLORS.red} solid /> */}
                    </View>
                </View>
                <View style={{ marginTop: '15%' }}>
                    <View style={styles.btn} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Octicons name="stack" size={25} color={COLORS.darkgray} />
                            <Text style={styles.btntxt}> Stock :</Text>
                        </View>
                        <Text style={styles.btntxt}> In Stock</Text>
                    </View>
                    <View style={styles.btn} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="shipping-fast" size={25} color={COLORS.darkgray} />
                            <Text style={styles.btntxt}> Ship in :</Text>
                        </View>

                        <Text style={styles.btntxt}> 1-3 Days</Text>
                    </View>
                    <View style={styles.btn} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="shareable" size={25} color={COLORS.darkgray} />
                            <Text style={styles.btntxt}> Delivery Area :</Text>
                        </View>

                        <Text style={styles.btntxt}> Nationwide</Text>
                    </View>
                </View>
                <View style={{margin: '5%'}}>
                    <Text style={styles.txtx}>Rating : </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' , margin:'5%'}}>
                    <Feather name='star' size={30} color={COLORS.darkgray} style={styles.icon} solid />
                    <Feather name='star' size={30} color={COLORS.darkgray} style={styles.icon} solid />
                    <Feather name='star' size={30} color={COLORS.darkgray} style={styles.icon} solid />
                    <Feather name='star' size={30} color={COLORS.darkgray} style={styles.icon} solid />
                    <Feather name='star' size={30} color={COLORS.darkgray} style={styles.icon} solid />
                    </View>

                    <Text style={styles.txtx}>Nickname :</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={nickname}
                            onChangeText={(e) => setnickname(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>Summary :</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={summary}
                            onChangeText={(e) => setsummary(e)}
                        />
                    </View>
                    <Text style={styles.txtx}>Review :</Text>
                    <View style={styles.inp1}>
                        <TextInput style={styles.inputtxt}
                            value={review}
                            onChangeText={(e) => setreview(e)}
                        />
                    </View>
                    <View style={styles.containerXY}>
              <TouchableOpacity style={styles.reviewbutton} onPress={() => alert('Added to cart!')} >
                <Text style={styles.reviewbuttontxt}>Submit Review</Text>
              </TouchableOpacity>
            </View>
                </View>

            </ScrollView>
            <View style={styles.containerXY}>
              <TouchableOpacity style={styles.button} onPress={() => alert('Added to cart!')} >
                <Text style={styles.buttontxt}>ADD TO CART </Text>
              </TouchableOpacity>
            </View>
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
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: SIZES.h3,
        color: 'white',
        marginLeft: '3%'
    },
    itemView: {
        padding: 20,
        marginVertical: '1%',
        marginHorizontal: '5%',
        borderColor: 'grey',
        borderWidth: 1,
        width: '90%',
        height: 190,
        borderRadius: 10
    },
    txt: {
        fontSize: SIZES.h3,
        color: COLORS.black,
        fontWeight: 'bold',
        margin: '2%'
    },
    lead: {
        fontSize: SIZES.h4,
    },
    subView: {
        height: 100,
        marginLeft: 10,
        padding: 20,
        flexDirection: "row",
    }, btn: {
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderColor: COLORS.darkgray,
        borderWidth: 0.5
    },
    btntxt: {
        fontSize: SIZES.h5,
        padding: 5,
        color: COLORS.darkgray,

    },
    containerXY: {
        marginBottom: '5%',
        alignItems: 'center'
      },
      button: {
        backgroundColor: COLORS.black,
        borderRadius: 5,
        marginTop: '5%',
        height: 60,
        width: '90%',
        justifyContent: 'center'
      },
      buttontxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
        color: '#fff'
      },
      icon:{
        marginLeft: '2%'
      },
      txtx: {
        fontWeight: "bold",
        fontSize: 15,
        margin: 2,
        color: 'black'
    },
    inp1: {
        height: 45,
        borderRadius: 3,
        width: '100%',
        marginVertical: '3%',
        flexDirection: 'row',
        backgroundColor: COLORS.lightGray3,
        textAlign: 'center',
        alignItems: 'center',

    },
    inputtxt: {
        fontSize: 18,
        padding: 6,
        marginLeft: 10,
        width: '90%'
    },
    reviewbutton: {
        backgroundColor: COLORS.Gradient1,
        borderRadius: 5,
        marginTop: '5%',
        height: 50,
        width: '40%',
        justifyContent: 'center'
      },
      reviewbuttontxt: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: SIZES.h5,
        padding: 5,
        color: '#fff'
      },




});



