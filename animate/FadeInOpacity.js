'use strict';
import React, { Component } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import styles from './styles';

export default class FadeInOpacity extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        fadeInOpacity: new Animated.Value(0),
      };
    }

    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
        }).start();
    }
    render() {
        return (
            <Animated.View style={[styles.flexCenter, {
                opacity: this.state.fadeInOpacity,
            }]}>
                <Text style={{fontSize: 30}}>悄悄的, 我出现了</Text>
            </Animated.View>
        );
    }
}
