'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated, 
} from 'react-native';

export default class Playground extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        bounceValue: new Animated.Value(0),
      };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);               // 设置一个较大的初始值
        Animated.spring(this.state.bounceValue, {           // 可选动画类型: spring, decay, timing
            toValue: 0.8,           // 以动画的形式改到一个较小值
            friction: 1,            // 摩擦力
        }).start();                 // 开始执行动画
    }

    render() {
        return (
            <Animated.Image
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                    flex: 1,
                    transform: [{ scale: this.state.bounceValue }]
                }}
            />
        );
    }
}
