/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StoreProvider from './src/config/redux/provider';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => <StoreProvider>{App}</StoreProvider>);
