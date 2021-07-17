import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

//!!style
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        alignItems: 'center'
    },
    view2: {
        backgroundColor: '#dddddd',
        height: '7%',
        width: '95%',
        marginTop: 10,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        marginLeft: 20,
        color: '#999999',
        fontWeight: 'bold'
    },
    text2: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },
    img1: {
        width: 350,
        height: 150,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 20
    }
})


//!!search bottom tab page
const SearchTab = () => {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <FontAwesome
                    name={'search'}
                    color={'black'}
                    size={28}
                    style={{
                        marginLeft:10
                    }}
                
                />
                <Text style={styles.text1}>Fikir arayın</Text>
                <Entypo
                    name={'camera'}
                    color={'black'}
                    size={28}
                    style={{
                        marginLeft: 190
                    }}
                />
                
            </View>
            <Text style={styles.text2}>Sizin için fikirler</Text>

            <FlatList
                data={[
                    { src: 'https://www.byrdie.com/thmb/JP8EnvdFfjLqjU7EdCpoYclAZNQ=/735x0/ScreenShot2020-03-23at3.03.04PM-688f9be31bf04dfd989b8a5a5dcb66cf.png' },
                    { src: 'https://www.voodou.co.uk/files/2020/08/xHAIR-EXTENSIONS-2020.jpg.pagespeed.gp+jp+pj+ws+js+rj+rp+ri+rm+cp+md+im=75.ic.BOxfSbnYMT.jpg' },
                    { src: 'https://images.squarespace-cdn.com/content/v1/508dd387e4b044ecf46b9bee/1577908745195-TNSYE09FL6NZGWXOH0FG/IMG_2564+2.JPG?format=1000w' },
                    { src: 'https://www.axishairsalons.com/media/Brunette.jpg' }

                ]}
                renderItem={({ item, index }) =>
                    <Image
                        source={{ uri: item.src }}
                        style={styles.img1} />} />
        </View>
    );
}

export { SearchTab };