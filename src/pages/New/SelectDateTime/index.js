import React, { useLayoutEffect, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Title, Hour } from './styles';

export default function SelectDateTime({ navigation, route }) {
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState([]);
    const { provider } = route.params;

    useEffect(() => {
        async function loadAvailable() {
            const response = await api.get(
                `providers/${provider.id}/available`,
                {
                    params: {
                        date: date.getTime(),
                    },
                }
            );
            setHours(response.data);
        }
        loadAvailable();
    }, [date, provider.id]);

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

    function handleSelectHour(time) {
        navigation.navigate('Confirm', { provider, time });
    }

    return (
        <Background>
            <Container>
                <DateInput date={date} onChange={setDate} />

                <HourList
                    data={hours}
                    keyExtractor={item => item.time}
                    renderItem={({ item }) => (
                        <Hour
                            onPress={() => {
                                handleSelectHour(item.value);
                            }}
                            enabled={item.available}
                        >
                            <Title>{item.time}</Title>
                        </Hour>
                    )}
                />
            </Container>
        </Background>
    );
}
