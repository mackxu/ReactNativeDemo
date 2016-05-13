'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import styles from './styles';

export default class Position extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 100, backgroundColor: '#333'}}>
                    <View style={[styles.circle, { position: 'absolute', left: 50, top: 50, marginTop: -10, }]}></View>
                </View>
                <Text>position 与 margin 搭配</Text>
            </View>
        );
    }
}
