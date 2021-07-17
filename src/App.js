import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Navigation } from './Navigation';

const App = () => {

    return (
        <>
        <StatusBar backgroundColor={'#999999'}/>
        <View style={{
            flex:1
            
        }}>
            <Navigation />
        </View>
        </>
    );
};

export { App };