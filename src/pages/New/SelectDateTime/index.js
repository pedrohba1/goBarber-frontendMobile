import React, { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function SelectDateTime({ navigation }) {
    const [date, setDate] = useState(new Date());

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SelectProvider');
                    }}
                >
                    <Icon name="chevron-left" size={20} color="#fff" />
                </TouchableOpacity>
            ),
        });
    }, []);

    return (
        <Background>
            <Container>
                <DateInput date={date} onChange={setDate} />
            </Container>
        </Background>
    );
}
