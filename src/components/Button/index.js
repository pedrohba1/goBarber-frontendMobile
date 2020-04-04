import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color="#fff">
                    {' '}
                </ActivityIndicator>
            ) : (
                <Text>{children}</Text>
            )}
        </Container>
    );
}

Button.defaultProps = {
    loading: false,
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};
