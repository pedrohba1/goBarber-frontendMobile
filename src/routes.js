// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

function Routes() {
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
                <Stack.Screen name="signIn" component={SignIn} />
                <Stack.Screen name="signUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
