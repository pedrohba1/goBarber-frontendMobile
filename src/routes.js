// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoginTabs() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="signIn" component={SignIn} />
            <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255,0.6)',
                style: {
                    backgroundColor: '#8d41a8',
                },
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const RootStack = createStackNavigator();

function Routes() {
    const signed = useSelector(state => state.auth.signed);

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {signed ? (
                    <RootStack.Screen
                        name="Home"
                        component={HomeTabs}
                    ></RootStack.Screen>
                ) : (
                    <RootStack.Screen
                        name="Login"
                        component={LoginTabs}
                    ></RootStack.Screen>
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
