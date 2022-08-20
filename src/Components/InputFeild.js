import * as React from 'react';
import { View,StyleSheet, TextInput, Image } from 'react-native';




export default function InputFeild({ navigation }) {
    return (
        
           
                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../assets/Images/search.png')}
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{ flex: 1, fontSize: 18 }}

                        placeholder="Search your favorite item"
                        underlineColorAndroid="transparent"
                    />
                </View>
          
    );
}

const styles = StyleSheet.create({
 SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        height: 50,
        width: '100%',
        borderRadius: 10
    },
    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

});



