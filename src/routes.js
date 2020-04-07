// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

const Stack = createStackNavigator();

function Routes() {
    const signed = useSelector(state => state.auth.signed);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}

                /*       screenOptions={{
                    header: () => <ShoesHeader />,
                }} */
            >
                {signed ? (
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                ) : (
                    <>
                        <Stack.Screen name="signIn" component={SignIn} />
                        <Stack.Screen name="signUp" component={SignUp} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
