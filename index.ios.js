import { AppRegistry } from 'react-native';
import IosApp from './src/ios';
import connection from './app';

AppRegistry.registerComponent('Weatherfy', () => connection(IosApp));
