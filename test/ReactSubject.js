'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    Animated,
    Easing,
} from 'react-native';

import styles from './styles';

let m = 1062;
let isFree = 0;
let apkVersion = '5.7.0.44414';
let src = '76f90cbd92f94a2e925d83e8ccd22cb';
let url = 'http://itv.video.ptqy.gitv.tv/itv/plst/394047702/7/?'
url += 'm=' + m + '&';
url += 'isFree=' + isFree + '&';
url += 'apkVersion=' + apkVersion + '&';
url += 'src=' + src;

export default class ReactSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          albums: null,
          scroll: new Animated.Value(0),
        };
    }

    componentDidMount() {
        // fetch(url, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // }).then((response) => response.json())
        //     .then((albums) => {
        //         this.setState({
        //             albums: albums.data,
        //         });
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        

        let toValue = 0;
        let timerId = null;
        let self = this;
        (function scrollFunc() {
            if(toValue >= 1000) {
                clearTimeout(timerId);
            }else {
                toValue += 250;
            }
            Animated.timing(self.state.scroll, {
                toValue: -toValue,
            }).start();

            timerId = setTimeout(scrollFunc, 4000);
        })()
        


    }
    render() {
        let { width, height } = Dimensions.get('window');
        let self = this;
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <Image
                  style={{ width: width, height: height, resizeMode: 'cover', opacity: 0.2 }}
                  source={{uri: 'http://pic5.ptqy.gitv.tv/common/lego/20150825/af215375b85847228a9587e6f73db89b.jpg'}} />
                <Animated.View style={[styles.albumContainer, {
                    left: self.state.scroll }]}>
                    <View style={{flex: 1}}>
                        <ScrollView 
                            horizontal={true}
                            >
                            <View style={styles.box}>
                                <Image
                                  style={styles.albumCover}
                                  source={{uri: 'http://pic7.ptqy.gitv.tv/image/20160509/e7/9a/a_100022122_m_600_m7_354_490.jpg'}} />
                                
                            </View>
                            <View style={styles.box}>
                                <Image
                                  style={styles.albumCover}
                                  source={{uri: 'http://pic7.ptqy.gitv.tv/image/20160414/17/9a/a_100014741_m_600_m7_354_490.jpg'}} />
                            </View>
                            <View style={styles.box}>
                                <Image
                                  style={styles.albumCover}
                                  source={{uri: 'http://pic4.ptqy.gitv.tv/image/20160405/d7/84/a_100010942_m_600_m3_354_490.jpg'}} />
                                
                            </View>
                            <View style={styles.box}>
                                <Image
                                  style={styles.albumCover}
                                  source={{uri: 'http://pic5.ptqy.gitv.tv/image/20160415/33/a8/a_100012929_m_600_m1_354_490.jpg'}} />
                            </View>
                            <View style={styles.box}>
                                <Image
                                  style={styles.albumCover}
                                  source={{uri: 'http://pic3.ptqy.gitv.tv/image/20160412/29/79/a_100015001_m_600_m1_354_490.jpg'}} />
                            </View>
                        </ScrollView>
                    </View>
                </Animated.View>
                
            </View>
        );
    }
}



