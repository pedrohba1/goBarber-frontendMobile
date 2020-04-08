import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function SelectProvider({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Dashboard');
                    }}
                >
                    <Icon name="chevron-left" size={20} color="#fff" />
                </TouchableOpacity>
            ),
        });
    }, []);

    return <Background />;
}
