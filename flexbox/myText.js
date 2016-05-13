'use strict';
import React, { Component } from 'react';
import {
    View,
    Text, 
} from 'react-native';

import styles from './styles';

export default class MyText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>文本元素</Text>
                <View style={{ backgroundColor: '#333', padding: 10, }}>
                    <Text style={styles.baseText} numberOfLines={5}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>文本元素{'\n'}</Text>
                        <Text>
                            {'\n'}In this example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines, numberOfLines is Used to truncate the text with an elipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.
                        </Text>
                    </Text>
                </View>

                <Text style={[styles.text, styles.header]}>文本样式继承</Text>
                <View style={{ backgroundColor: '#333', padding: 10, }}>
                    <Text style={{color: '#fff'}}>
                        <Text style={{color: 'red'}}>
                            文本元素{'\n'}
                            <Text>我是white还是red呢？{'\n'} </Text>
                        </Text>
                        <Text>white white!!</Text>
                    </Text>
                </View>

            </View>
        );
    }
}
