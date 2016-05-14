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

export default class SequenceAnimation extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        anim: [1, 2, 3].map( () => new Animated.Value(0) ),
      };
    }
    componentDidMount() {
        let timing = Animated.timing;
        let animtions = (toValue) => this.state.anim.map((left) => timing(left, { toValue: toValue }));
        
        Animated.sequence([
            Animated.stagger(200, animtions(1).concat(animtions(0))),
            Animated.delay(400),
            timing(this.state.anim[0], { toValue: 1 }),     // 按顺序依次执行
            timing(this.state.anim[1], { toValue: -1 }),
            timing(this.state.anim[2], { toValue: 0.5 }),
            Animated.delay(400),
            Animated.parallel(animtions(0)),                // 回到原来位置
        ]).start();
    }
    render() {
        let AnimatedViews = this.state.anim.map((animator, index) => {
            return (
                <Animated.View
                    key={index}
                    style={[styles.baseAnim, styles['anim' + index], {
                        transform:[{
                            translateX: animator.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 200],
                            }),
                        }]
                    }]}
                    >
                    <Text style={styles.animText}>我是第{ index + 1 }个View</Text>
                </Animated.View>
            );
        });
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                {AnimatedViews}
            </View>
        );
    }
}
