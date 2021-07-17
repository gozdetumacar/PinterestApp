import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash = () => {
    return (
        <View View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <MaterialCommunityIcons
                name={'alpha-p-circle'}
                color={'red'}
                size={120}
            />
        </View>
    );
}

export { Splash };