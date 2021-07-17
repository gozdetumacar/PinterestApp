import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';

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

//!!Ana sayfada yer alan Creative butonundaki fotoğraflar
const Creative = () => {

    return (

        <View style={styles.view1}>

            <FlatList
                data={[
                    { src: 'https://i.pinimg.com/originals/23/81/9b/23819b096c6b2e07e7d4cf4c673c022a.jpg' },
                    { src: 'https://i.pinimg.com/originals/23/81/9b/23819b096c6b2e07e7d4cf4c673c022a.jpg' },
                    { src: 'https://i.pinimg.com/originals/23/81/9b/23819b096c6b2e07e7d4cf4c673c022a.jpg' }


                ]}
                renderItem={({ item, index }) =>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.img} />} />

        </View>

    );
};

export { Creative };