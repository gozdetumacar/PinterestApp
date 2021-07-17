import { tsParenthesizedType } from '@babel/types';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


//!!style
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        flexDirection: 'column'
    },
    text1: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'black',
        padding: 20,
        fontSize: 25,
        borderRadius: 30,
        marginTop: 10
    },
    text2: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'red',
        padding: 15,
        fontSize: 25,
        borderRadius: 150,
        marginTop: 30,
        width: '15%',
        marginLeft: 20,
    },
    text3: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20
    },
    img1: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 30,
        marginTop: 15,
        marginLeft: 20
    },
    text4: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text5: {
        marginTop: 50,
        marginLeft: -50,
        color: '#888888'
    }

})

//!!notification-message bottom tab page
const NotifyTab = () => {
    return (
        <View style={styles.view1}>
            <View style={{ alignItems: 'center'}}>
                <Text style={styles.text1}>Mesajlar</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text2}><Entypo
                        name={'new-message'}
                        color={'white'}
                        size={30}
                    />
                </Text>
                <Text style={styles.text3}>Yeni Mesaj</Text>
                
            </View>
            <View>
            <FlatList
                data={[
                        {
                            src: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
                            username: 'user1',
                            message: 'Siz: Mesaj denemesi1'},
                        {
                            src: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
                            username: 'user2',
                            message: 'Siz: Mesaj denemesi2'},
                        {
                            src: 'https://quboxtechnologies.com/wp-content/uploads/2018/11/website_-_female_user-512.png',
                            username: 'user3',
                            message: 'Siz: Mesaj denemesi3'        },
                        {
                            src: 'https://6gkb-bel.ru/images/reviews/man.jpg',
                            username: 'user4',
                            message: 'Siz: Mesaj denemesi4'        }

                ]}
                    renderItem={({ item, index }) =>
                    <View style={{flexDirection:'row'}}>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.img1} />
                            <Text style={styles.text4}>{item.username}</Text>
                            <Text style={styles.text5}>{item.message}</Text></View>} />
            </View>
        </View>
    );
}

export { NotifyTab };