/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import StoreProvider from './src/config/redux/provider';
import Navigation from './src';
import {name as appName} from './app.json';

const App = () => {
    return (
        <StoreProvider>
            <Navigation />
        </StoreProvider>
    );
}

AppRegistry.registerComponent(appName, () => App);
