/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import { AppRegistry } from 'react-native';
// import Default  from './default_index';
// import SimpleNavigator  from './test/simple_navigator';
import uniformNavigator  from './test/uniform_navigator';
import Game  from './test/gridGame';

AppRegistry.registerComponent('MyProject', () => Game);
