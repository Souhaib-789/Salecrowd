import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './Signin';


export default function Signup({ navigation }) {

    const [name, setname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [password, setpassword] = React.useState('');

    return (
        <LinearGradient colors={[COLORS.Gradient2, COLORS.Gradient1]} style={styles.linearGradient}>
            <View style={styles.qauntum}>
                <Image source={require('../../assets/Images/ser.png')} style={styles.img} />

                <View style={styles.inputs}>
                <View style={styles.inp1}>
                        <FontAwesome name='user' size={30} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter your name" style={styles.inputtxt}
                            value={name}
                            onChangeText={(e) => setname(e)} />
                    </View>
                   
                    <View style={styles.inp1}>
                        <FontAwesome name='phone' size={30} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter phone no." style={styles.inputtxt}
                            value={phone}
                            onChangeText={(e) => setphone(e)} />
                    </View>
                    <View style={styles.inp1}>
                        <FontAwesome5 name='envelope' size={25} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter email" style={styles.inputtxt}
                            value={password}
                            onChangeText={(e) => setpassword(e)} />
                    </View>

                    <View style={styles.inp1}>
                        <FontAwesome5 name='lock' size={25} color={COLORS.Gradient1} solid style={styles.icon} />
                        <TextInput placeholder="Enter password" style={styles.inputtxt}
                            value={password}
                            onChangeText={(e) => setpassword(e)} />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btntxt}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

 


