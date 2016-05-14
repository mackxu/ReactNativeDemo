'use strict';
import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import styles from './styles';

export default class CenterView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>水平居中</Text>
                <View style={[styles.centerShow, { alignItems: 'center' }]}>
                    <View style={styles.circle}></View>
                </View>

                <Text style={[styles.text, styles.header]}>
                    垂直居中
                </Text>
                <View style={[styles.centerShow, { justifyContent: 'center' }]}>
                    <View style={styles.circle}></View>
                </View>

                <Text style={[styles.text, styles.header, { lineHeight: 40, }]}>
                    水平垂直居中
                </Text>
                <View style={[styles.centerShow, { justifyContent: 'center', alignItems: 'center', }]}>
                    <View style={styles.circle}></View>
                </View>
            </View>
        );
    }
}
