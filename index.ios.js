/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Home from './animate/Home';
// import Playground from './animate/Playground';
// import ReactSubject from './test/ReactSubject';

class MyProject extends Component {
  renderScene = (route, navigator) => {
    console.log(11);
    let MyComponent = route.component;
    return <MyComponent
      {...route.params}
      {...route}
      navigator={navigator}
      />
  };
  render() {
    return (
      <Navigator
        initialRoute={{
          component: Home,
          title: '演示',
        }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          let gestureType = Navigator.SceneConfigs.HorizontalSwipeJump;
          gestureType.gestures.jumpForward = null;
          return gestureType;
        }}
      />
    );
  }
}


AppRegistry.registerComponent('MyProject', () => MyProject);