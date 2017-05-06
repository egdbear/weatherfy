import { AppRegistry } from 'react-native';
import AndroidApp from './src/android';
import connection from './app';

AppRegistry.registerComponent('Weatherfy', () => connection(AndroidApp));
