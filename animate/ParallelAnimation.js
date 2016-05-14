'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Easing,
} from 'react-native';

import styles from './styles';

export default class ParallelAnimation extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        animate: new Animated.Value(0),
      };
    }

    componentDidMount() {
        Animated.timing(this.state.animate, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        /*
         * opacity: [0, 1]
         * rotateZ: [0, 360deg]
         * fontSize: [12, 26]
         */
        return (
            <Animated.View style={styles.flexCenter}>
                <Animated.Text style={{
                    opacity: this.state.animate,
                    fontSize: this.state.animate.interpolate({
                        inputRange: [0, 1], 
                        outputRange: [10, 30]
                    }),
                    transform: [{ 
                        rotateZ: this.state.animate.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        }), 
                    }]
                }}>
                    welcome to react native!
                </Animated.Text>
            </Animated.View>
        );
    }
}
