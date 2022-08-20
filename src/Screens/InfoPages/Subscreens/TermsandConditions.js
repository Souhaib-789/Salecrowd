import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { COLORS } from '../../../assets/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './CSS';




export default function TermsAndConditions({ navigation }) {

    return (
        <View style={styles.container}>
            <LinearGradient colors={[COLORS.Gradient1, COLORS.Gradient2]} style={styles.linearGradient}>
                <View style={styles.headview}>
                    <Ionicons name="chevron-back-sharp" size={30} color={COLORS.white} onPress={() => { navigation.goBack() }} />
                    <Text style={styles.heading}>Terms and conditions</Text>
                </View>
            </LinearGradient>

            <ScrollView >
                <TouchableOpacity onPress={() => navigation.navigate('ClientsOrder')}>
                    <View style={styles.menuopt}>
                        <Text style={styles.txt}>Salecrowd Terms And Conditions</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.subdiv}>
                    <Text style={styles.txtx}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>
                </View>
            </ScrollView>
        </View>

    );
}



