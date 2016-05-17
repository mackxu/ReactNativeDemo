'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import styles from './Styles';

export default class AlbumDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Album详情</Text>
            </View>
        );
    }
}
