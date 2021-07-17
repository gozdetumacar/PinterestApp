import React from 'react';
import { View, Text,FlatList, Image, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

//!!style
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        flexDirection: 'column'
    },
    view2: {
        backgroundColor: '#f4f4f4',
        height: '10%',
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    view3: {
        backgroundColor: '#dddddd',
        height: '7%',
        width: '70%',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        marginLeft: 10,
        color: '#999999'
    },
    img1: {
        width: 250,
        height: 200,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 30,
    }
})

//!!profile bottom tab page
const ProfileTab = () => {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <EvilIcons
                    name={'user'}
                    color={'black'}
                    size={80}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight:'bold'
                }}>UserName</Text>

                <Ionicons
                    name={'settings'}
                    color={'black'}
                    size={30}
                />

            </View>
            <View style={styles.view3}>
                <FontAwesome
                    name={'search'}
                    color={'#999999'}
                    size={20}
                    style={{
                        marginLeft: 10
                    }}

                />
                <Text style={styles.text1}>Pinlerinizi arayın</Text>

                <Octicons
                    name={'settings'}
                    color={'black'}
                    size={30}
                    style={{
                        marginLeft:120
                    }}
                />
                <Entypo
                    name={'plus'}
                    color={'black'}
                    size={30}
                    style={{
                        marginLeft:10
                    }}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    data={[
                        {
                            src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-outfits-1612278290.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
                            title: 'Beğenilerin',
                            pinNo: '684 Pin'
                        },
                        {
                            src: 'https://lifewithjazz.com/wp-content/uploads/2020/02/545FE979-FD3E-4FEB-8B7B-79141A872408.jpg',
                            title: 'Moda',
                            pinNo: '153 Pin'    },
                        {
                            src: 'https://i.pinimg.com/originals/ab/25/7f/ab257f8884ce1eddfd22863a08ce4672.png',
                            title: 'Saç',
                            pinNo: '312 Pin'    }
                    ]}
                    renderItem={({ item, index }) =>
                        <View style={{ alignItems: 'center'}} >
                            <Image
                                source={{ uri: item.src }}
                                style={styles.img1} />
                            <Text style={{
                                
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>{item.title}</Text>
                            <Text style={{
                                
                                color: '#888888'
                            }}>{item.pinNo}</Text></View>} />
            </View>
            
        </View>
    );
}

export { ProfileTab };