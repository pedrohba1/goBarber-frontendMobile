import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function Dashboard({ navigation }) {
    navigation.setOptions({
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
        ),
    });

    return (
        <Background>
            <TextInput>testeee</TextInput>
        </Background>
    );
}
