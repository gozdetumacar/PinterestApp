import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, SearchTab, NotifyTab, ProfileTab } from '~/screens';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const Main = () => {

    const tabBar = ({ state: { index }, navigation: { jumpTo } }) => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'white'
            }}>
                <TouchableOpacity style={{
                    paddingVertical: 10,
                }}
                    onPress={() => jumpTo('HomeTab')}>
                    <MaterialCommunityIcons
                        name={'home'}
                        color={index === 0 ? 'black' : '#888888'}
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    paddingVertical: 10
                }}
                    onPress={() => jumpTo('SearchTab')}>
                    <FontAwesome
                        name={'search'}
                        color={index === 1 ? 'black' : '#888888'}
                        size={28}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    paddingVertical: 10
                }}
                    onPress={() => jumpTo('NotifyTab')}>
                    <AntDesign
                        name={'message1'}
                        color={index === 2 ? 'black' : '#888888'}
                        size={28}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    paddingVertical: 10
                }}
                    onPress={() => jumpTo('ProfileTab')}>
                    <EvilIcons
                        name={'user'}
                        color={index === 3 ? 'black' : '#888888'}
                        size={40}
                    />
                </TouchableOpacity>

            </View>
        );
    }
    return (
        <View style={{
            flex: 1
           
        }}>
            <Tab.Navigator
                
                tabBar = {tabBar}
                >
                <Tab.Screen name={'HomeTab'} component={HomeTab} />
                <Tab.Screen name={'SearchTab'} component={SearchTab} />
                <Tab.Screen name={'NotifyTab'} component={NotifyTab} />
                <Tab.Screen name={'ProfileTab'} component={ProfileTab} />
            </Tab.Navigator>
        </View>
    );
}

export { Main };