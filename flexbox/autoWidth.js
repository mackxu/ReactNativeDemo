import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
} from 'react-native';
import styles from './styles';

export default class AutoWidth extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>根节点上放一个元素，不设置宽度</Text>
                <View style={{ height: 30, backgroundColor: '#333' }}></View>
                <Text style={[styles.text, styles.header]}>在固定宽度上放一个view</Text>
                <View style={{width: 100}}>
                    <View style={{ height: 30, backgroundColor: '#333' }}></View>
                </View>

                <Text style={[styles.text, styles.header]}>flex的元素上放一个View，不设置宽度</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flex: 1}}>
                        <View style={{ height: 30, backgroundColor: '#333' }}></View>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
                <Text>结果可以看到flex的元素如果不设置宽度， 都会百分之百的占满父容器。</Text>
            </View>
        );
    }
}
