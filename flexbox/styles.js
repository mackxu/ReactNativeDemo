'use strict'

import React from 'react';

import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderBottomWidth: 1 / PixelRatio.get(),            //set to min boder
        borderBottomColor: '#ddd',
    },
    btnText: {
        fontSize: 16,
    },
    text: {
        fontSize: 20,
    },
    header: {                   // 文本居中
        textAlign: 'center',
        marginVertical: 6,
    },
    circle: {
        backgroundColor: '#fefefe', 
        width: 30, 
        height: 30, 
        borderRadius: 15,
    },
    centerShow: {
        height: 100,
        backgroundColor: '#333',
    },
    baseText: {
        color: '#fff'
    }
});