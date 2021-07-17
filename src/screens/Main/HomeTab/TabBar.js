import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';



const tabs = [
    { title: 'All', name: 'All' },
    { title: 'Fashion', name: 'Fashion' },
    { title: 'Hair', name: 'Hair' },
    { title: 'Creative', name: 'Creative' }
    
];

const TabBar = ({ state: { index }, navigation: { jumpTo } }) => {
    const item = ({ title, name, i }) => (
        <TouchableOpacity style={{
            paddingVertical: 10,
            paddingHorizontal: 10
        }}
            onPress={() => jumpTo(name)}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: index === i ? 'black' : '#f4f4f4',
                color: index === i ? 'white' : 'black',
                padding: 10,
                borderRadius:24
            }}>{title}</Text>
        </TouchableOpacity>
    )
    return (
        <View style={{
            flexDirection: 'row',
            
        }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {tabs.map((d, i) => item({ ...d, i }))}
            </ScrollView>

        </View>
    );
}




export { TabBar };