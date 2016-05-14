/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';

import Home from './components/home';

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        translucent={true}
        itemWrapperStyle={{
          backgroundColor: '#ccc',
          marginTop: 70,
        }}
        initialRoute={{
          title: 'Home',
          component: Home,
          passProps: { id: 'index' }
        }} />
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
