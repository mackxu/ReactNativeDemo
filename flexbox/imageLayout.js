'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import styles from './styles';


export default class ImageLayout extends Component {
    render() {
        let imgUri = 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png';
        let resizeMode = Image.resizeMode;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={[styles.text, styles.header]}>100px height</Text>
                    <Image style={{height: 100}} source={{uri: imgUri}} />
                    <Text>100px 高度， 可以看到图片适应100高度和全屏宽度，背景居中适应未拉伸但是被截断</Text>
                    
                    <Text style={[styles.text, styles.header]}>100px height width resizeMode contain</Text>
                    <View style={{height: 110, backgroundColor: '#333'}}>
                        <Image 
                            style={{height: 100, resizeMode: resizeMode.contain}} 
                            source={{uri: imgUri}} />
                    </View>
                    <Text>contain 模式容器完全容纳图片，图片自适应宽高</Text>
                    
                    <Text style={[styles.text, styles.header]}>100px height with resizeMode cover</Text>
                    <View style={{height: 110, backgroundColor: '#333'}}>
                        <Image 
                            style={{height: 100, resizeMode: resizeMode.cover}} 
                            source={{uri: imgUri}} />
                    </View>

                    <Text style={[styles.text, styles.header]}>100px height with resizeMode stretch</Text>
                    <View style={{height: 110, backgroundColor: '#333'}}>
                        <Image 
                            style={{height: 100, resizeMode: resizeMode.stretch}} 
                            source={{uri: imgUri}} />
                    </View>
                    <Text>stretch模式图片被拉伸适应屏幕</Text>
                    <Text style={[styles.text, styles.header]}>set height to image container</Text>
                    <View style={{height: 100, backgroundColor: '#333'}}>
                        <Image style={{flex: 1}} source={{uri: imgUri}} />
                    </View>
                    <Text>效果与cover一样: 居中截断</Text>

                </ScrollView>
            </View>
        );
    }
}
