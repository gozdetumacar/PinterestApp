import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Fashion } from '~/screens/Main/HomeTab/Fashion';
import { All } from '~/screens/Main/HomeTab/All';
import { Creative } from '~/screens/Main/HomeTab/Creative';
import { Hair } from '~/screens/Main/HomeTab/Hair';
import { TabBar } from '~/screens/Main/HomeTab/TabBar';


const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
    return (
        <View style={{
            flex: 1
            
        }}>
            <Tab.Navigator
                
                tabBar={TabBar}
                
            >
                <Tab.Screen name={'All'} component={All} />
                <Tab.Screen name={'Fashion'} component={Fashion} />
                <Tab.Screen name={'Hair'} component={Hair} />
                <Tab.Screen name={'Creative'} component={Creative} />
               
            
            </Tab.Navigator>
        </View>
    );
}

export { HomeTab };