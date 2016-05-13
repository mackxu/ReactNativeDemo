import React, { Component } from 'react';
import { View } from 'react-native';

import NavigationBar from 'react-native-navigationbar';             // 头部导航条
import ListItem from '../lib/listItem';
import DetailView from '../lib/detailView';

import FadeInOpacity from './FadeInOpacity';
import Playground from './Playground';
import ParallelAnimation from './ParallelAnimation';
import SequenceAnimation from './SequenceAnimation';

export default class Home extends Component {
    constructor(props) {
      super(props);
    }

    onPress = (Component, title) => {
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
                    accessible={true}
                    />
                <ListItem 
                    title={'FadeInOpacity'}
                    onPress={this.onPress.bind(this, FadeInOpacity, '演示FadeInOpacity')} />
                <ListItem 
                    title={'Playground'}
                    onPress={this.onPress.bind(this, Playground, '演示FadeInOpacity')} />
                <ListItem 
                    title={'ParallelAnimation'}
                    onPress={this.onPress.bind(this, ParallelAnimation, '演示FadeInOpacity')} />
                <ListItem 
                    title={'SequenceAnimation'}
                    onPress={this.onPress.bind(this, SequenceAnimation, '演示FadeInOpacity')} />
            </View>
        );
    }
}