'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import styles from './styles';

export default class MarginPadding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    <Text>padding</Text>
                    <Text style={[styles.text, styles.header]}>
                        在View控件上设置padding
                    </Text>
                    <View style={{padding: 30, backgroundColor: '#333'}}>
                        <Text style={[styles.text, {color: '#fefefe'}]}>
                            Text Element
                        </Text>
                        <Text style={[styles.text, {color: '#fefefe'}]}>
                            Text Element
                        </Text>
                    </View>

                    <Text style={[styles.text, styles.header]}>
                        在View控件上设置padding2
                    </Text>
                    <View style={{padding: 30, backgroundColor: '#333'}}>
                        <Text style={[styles.text, {color: '#fefefe'}]}>
                            <Text>Text Element</Text>
                            <Text> Text Element</Text>
                        </Text>
                    </View>

                    <Text style={[styles.text, styles.header]}>
                        在Text控件上设置padding
                    </Text>
                    <View style={{backgroundColor: '#333', height: 120}}>
                        <Text style={[styles.text, {padding: 30, color: '#fefefe', backgroundColor: 'red'}]}>
                            Text元素上设置padding
                        </Text>
                    </View>
                    <Text>padding在Text元素上下表现错误, 左右不起作用</Text>
                    <Text>margin</Text>
                    <Text style={[styles.text, styles.header]}>
                        在View控件上设置margin
                    </Text>
                    <View style={{ backgroundColor: '#333' }}>
                        <View style={{ margin: 30, backgroundColor: '#ddd', height: 50, }}></View>
                    </View>

                    <Text style={[styles.text, styles.header]}>
                        在Text控件上设置margin
                    </Text>
                    <View style={{ backgroundColor: '#333', height: 200 }}>
                        <Text style={{ backgroundColor: 'red', margin: 30 }}>
                            Text元素上设置margin
                        </Text>

                        <Text style={{ backgroundColor: 'red', margin: 30 }}>
                            { /* 内联Text的margin不起作用 */ }
                            <Text style={{margin: 10}}>Text元素上设置margin</Text>
                            <Text style={{margin: 10}}>Text元素上设置margin</Text>
                        </Text>
                    </View>
                    <Text>view的Text元素margin正常, Text包含的是内联text</Text>
                </ScrollView>
            </View>
        );
    }
}
