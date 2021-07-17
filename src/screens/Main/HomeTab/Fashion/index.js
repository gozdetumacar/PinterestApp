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

//!!Ana sayfada yer alan Fashion butonundaki fotoğraflar
const Fashion = () => {
    
    return (
        
        <View style={styles.view1}>
            
            <FlatList
                data={[
                    { src: 'https://i.pinimg.com/736x/36/f2/41/36f241d7a8e8e80bd3593f58f6f62162.jpg' },
                    { src: 'https://i.pinimg.com/736x/36/f2/41/36f241d7a8e8e80bd3593f58f6f62162.jpg' },
                    { src: 'https://i.pinimg.com/736x/36/f2/41/36f241d7a8e8e80bd3593f58f6f62162.jpg' }
            
                    
                ]}
                renderItem={({ item, index }) =>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.img} />} />
                
            </View>
            
    );
};

export { Fashion };