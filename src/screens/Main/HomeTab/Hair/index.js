import React from 'react';
import { View, Image, Text, FlatList, StyleSheet} from 'react-native';

//!!style
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 350,
        height: 450,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 20
    }
})

//!!Ana sayfada yer alan Hair butonundaki fotoğraflar
const Hair = () => {

    return (

        <View style={styles.view1}>

            <FlatList
                data={[
                    { src: 'https://cdn.shopify.com/s/files/1/0434/1661/articles/Large_JPG-Frank_Fini_hairbyfrank_fini_800x.jpg?v=1620947491' },
                    { src: 'https://cdn.shopify.com/s/files/1/0434/1661/articles/Large_JPG-Frank_Fini_hairbyfrank_fini_800x.jpg?v=1620947491' },
                    { src: 'https://cdn.shopify.com/s/files/1/0434/1661/articles/Large_JPG-Frank_Fini_hairbyfrank_fini_800x.jpg?v=1620947491' }


                ]}
                renderItem={({ item, index }) =>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.img} />} />

        </View>

    );
};

export { Hair };