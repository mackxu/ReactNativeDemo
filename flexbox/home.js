import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';             // 头部导航条
import ListItem from '../lib/listItem';
import DetailView from '../lib/detailView';

import AutoWidth from './autoWidth';
import CenterView from './centerView';
import ImageLayout from './imageLayout';
import Position from './position';
import MarginPadding from './marginPadding';
import MyText from './myText';

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    onPress = (Component, title) => {
        console.log(title);
        this.props.navigator.push({
            component: DetailView,
            targetComponent: <Component {...this.props} />,
            title: title,
        });
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    backHidden={true}
                    title={this.props.title}
                    />
                <ListItem 
                    title={'默认宽度'}
                    onPress={this.onPress.bind(this, AutoWidth, '演示默认宽度')} />
                <ListItem 
                    title={'水平垂直居中'}
                    onPress={this.onPress.bind(this, CenterView, '演示水平垂直居中')} />
                <ListItem 
                    title={'图片布局'}
                    onPress={this.onPress.bind(this, ImageLayout, '演示图片布局')} />
                <ListItem 
                    title={'定位布局'}
                    onPress={this.onPress.bind(this, Position, '演示position布局')} />
                <ListItem 
                    title={'盒模型'}
                    onPress={this.onPress.bind(this, MarginPadding, '演示盒模型')} />
                <ListItem 
                    title={'文本元素'}
                    onPress={this.onPress.bind(this, MyText, '演示文本元素')} />

            </View>
        );
    }
}
