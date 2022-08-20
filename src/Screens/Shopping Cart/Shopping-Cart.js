import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DATA } from "../../assets/Data";
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';


export default function ShoppingCart({ navigation }) {


  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
        <View style={styles.headview}>
        <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={()=>{ navigation.goBack()}} />
          <Text style={styles.heading}>Shopping Cart</Text>
          <View style={styles.miniview}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={styles.headericon} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {DATA.length == 0 ? (
        <View style={styles.kl}>
          <Image source={require('../../assets/Images/empty.png')} />
          <Text style={styles.otxt}> Shopping Cart is empty !</Text>
        </View>
      ) :
        (
          <>
            <FlatList
              data={DATA}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.container}>
                  <Image source={require('../../assets/Images/grocery.png')} style={styles.img} />
                  <View style={styles.subView}>
                    <Text style={styles.txt}>{item.name}</Text>
                    <Text style={styles.txt}> Rs. {item.price} 1000</Text>
                  </View>
                  <View style={styles.subView2}>
                    <Text style={styles.txt}>1</Text>
                    <View style={styles.incdec}>
                      <TouchableOpacity>
                        <FontAwesome5 name='minus' size={15} color={'white'} solid style={styles.icon} />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        <FontAwesome5 name='plus' size={15} color={'white'} solid style={styles.icon} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity  >
                    <FontAwesome5 name='trash-alt' size={17} color={COLORS.darkgray} solid style={styles.trash} />
                  </TouchableOpacity>
                </View>
              )}
            />

            <View style={styles.containerXY}>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Checkout')} >
                <Text style={styles.btntxt}>CHECK OUT </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

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
    height: 100,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: '3%',
    marginHorizontal: '2%',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row'

  },
  img: {
    height: 55,
    width: 95,
    resizeMode: 'contain'
  },
  subView: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
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

});


