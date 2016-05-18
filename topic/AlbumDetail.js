'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';             // 头部导航条
import styles from './Styles';

export default class AlbumDetail extends Component {
    
    render() {
        let { album, navigator } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                  title={this.props.title}
                  backFunc={navigator.pop}
                />
                <Text>Album详情</Text>
            </View>
        );
    }
}
