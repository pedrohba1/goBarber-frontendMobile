import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

const data = [1, 2, 3, 4, 5, 6];

export default function Dashboard({ navigation }) {
    navigation.setOptions({
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
        ),
    });

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>

                <List
                    data={data}
                    renderItem={({ item }) => <Appointment data={item} />}
                    keyExtractor={item => String(item)}
                />
            </Container>
        </Background>
    );
}
