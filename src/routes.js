// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerTitle: props => <Header {...props} /> }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="User"
                    component={Cart}
                    options={{ title: 'Usuário' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
