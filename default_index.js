'use strict';
import React, { Component } from 'react';
import { Navigator, View, Text } from 'react-native';

// import Home from './animate/Home';
import Home from './topic/Home';
// import Playground from './animate/Playground';
// import ReactSubject from './test/ReactSubject';

export default class DefaultIndex extends Component {
  renderScene = (route, navigator) => {
    let MyComponent = route.component;
    return (
      <MyComponent 
        {...route.params}
        {...route}
        navigator={navigator}
        />
    );  
  };

  render() {
    return (
      <Navigator
        initialRoute={{
          component: Home,
          title: '专题回顾',
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
