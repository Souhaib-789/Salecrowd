import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from "react-native";




export default function ImagesCarousel(props) {

    const SLIDER_WIDTH = Dimensions.get('window').width
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.99)

    const data = [
        {
            // imgUrl: "https://www.vadesecure.com/hubfs/E-commerce-Security-Issues.jpg",
            imgUrl: props.url1,

        },
        {
            // imgUrl: "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
            imgUrl: props.url2,

        },
        {
            // imgUrl: "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000",
            imgUrl: props.url3,

        },
        {
            // imgUrl: "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000",
            imgUrl: props.url4,

        },

    ];


    const CarouselCardItem = ({ item, index }) => {
        return (
            <View style={styles.container} key={index}>
                <Image
                    // source={{ uri: item.imgUrl }}
                    source={item.imgUrl}
                    style={styles.image}
                />
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        )
    }
    return (



        <Carousel
            layout="tinder"
            layoutCardOffset={9}
            data={data}
            renderItem={
                CarouselCardItem
            }
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
        />



    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    }

});



