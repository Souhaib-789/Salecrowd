import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import ImagesCarousel from '../../Components/Carousel';
import InputFeild from '../../Components/InputFeild';
import ProductCards from '../../Components/ProductCards';
import Brands from '../../Components/Brands';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { DATA, DATA2, DATA3, DATA4, DATA5, DATA6, DATA7 } from '../../assets/Data';




export default function Home({ navigation }) {

    const listViewRef = React.useRef();

    const goToTop = () => {
        alert('Scrolling to top is under construction')
        // listViewRef.current.scrollToOffset({ offset: 0, animated: true });
    }
    return (
        <View style={styles.container}>
            {/* Header */}
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Entypo name="menu" size={30} color={COLORS.white} onPress={()=>{navigation.navigate('Menu')}} />
                    <Text style={styles.heading}>Salecrowd</Text>
                    <View style={styles.miniview}>
                        <AntDesign name="shoppingcart" size={30} color={COLORS.white} onPress={()=>{navigation.navigate('Signin')}}/>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Countries')}>
                            <Entypo name="dots-three-vertical" size={25} color={COLORS.white} style={styles.headericon}  />
                        </TouchableOpacity> */}
                    </View>
                </View>
            </LinearGradient>

            {/* Input Bar */}
            <View style={{ padding: SIZES.padding3 }}>
                <InputFeild />
            </View>

            {/* Body */}
            <ScrollView
                ref={listViewRef}
            >
                <ImagesCarousel
                url1={require('../../assets/Images/ecomm1.jpg')}
                url2={require('../../assets/Images/ecomm2.jpg')}
                url3={require('../../assets/Images/ecomm3.jpg')}
                 />

                <View style={{ padding: SIZES.padding2, marginBottom: '5%' }}>
                    <Text style={styles.subheading}>Popular Categories</Text>
                    <FlatList
                        data={DATA}
                        keyExtractor={({ id }) => id}
                        numColumns={3}
                        ref={listViewRef}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={()=> navigation.navigate(item.nextScreen)}>
                                <LinearGradient colors={['#3BB78F', '#0BAB64']} style={styles.pay}>
                                    <Image source={item.img} style={styles.img} />
                                    <Text style={styles.middletxt}>
                                        {item.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <ProductCards
                    item={DATA2}
                    heading={'Deal of the day'}
                />

                <Brands
                    item={DATA3}
                    heading={'Trending brands'}
                />

                <ProductCards
                    item={DATA4}
                    heading={'Make Up'}
                />

                <ProductCards
                    item={DATA5}
                    heading={'Skin Care'}
                />


                <Brands
                    item={DATA6}
                    heading={'Featured brands'}
                />

                <ProductCards
                    item={DATA7}
                    heading={'Kitchen Appliances'}
                />




                <TouchableOpacity
                    style={styles.footer}
                    onPress={goToTop}
                >
                    <Feather name="arrow-up-circle" size={45} color={COLORS.Gradient1} />
                </TouchableOpacity>

            

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
        justifyContent: 'space-around'
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
    }



});



