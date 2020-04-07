import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function Profile({ navigation }) {
    navigation.setOptions({
        tabBarLabel: 'Meu perfil',
        tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
        ),
    });
    return <Background />;
}
