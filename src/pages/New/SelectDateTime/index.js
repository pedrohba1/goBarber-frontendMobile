import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime({ navigation }) {
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

    return <Background />;
}
