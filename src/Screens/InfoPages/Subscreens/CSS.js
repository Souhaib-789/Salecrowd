import {  StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../assets/Theme';

export const styles = StyleSheet.create({
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
    },
    heading: {
        fontSize: SIZES.h3,
        color: 'white',
        marginLeft: '3%'
    },
    menuopt: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: '10%',
        marginVertical: '10%',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 3,

    },

    txt: {
        fontWeight: "bold",
        fontSize: 18,
        margin: '5%',
        color: 'black'
    },
    txtx: {
        fontSize: 15,
        lineHeight: 25
    },
    subdiv: {
        padding: 20
    }
});