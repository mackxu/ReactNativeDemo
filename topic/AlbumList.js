'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ListView,
  Image,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';             // 头部导航条

import styles from './Styles';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    console.log('topicId: ' + this.props.topicId);
  }
  render() {
    let { title, navigator } = this.props;
    
    return (
        <View style={styles.container}>
            <NavigationBar
              title={this.props.title}
              backFunc={navigator.pop}
            />
            <Text>专题页详情</Text>
        </View>
    );
  }
}
