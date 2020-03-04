// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
    return (
        <>
            <StatusBar hidden barStyle="light-content" />
            <Routes />
        </>
    );
}

export default App;
