// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import Routes from '~/routes';

import './config/ReactotronConfig';

function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
        </>
    );
}

export default App;
