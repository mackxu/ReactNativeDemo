'use strict';
import React, { Component, PropTypes } from 'react';
import { 
    StyleSheet,
    View,
    Text, 
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';

export default class DetailView extends Component {

    constructor(props) {
      super(props);
    }

    static propTypes = {
      targetComponent: PropTypes.object.isRequired,
    };
    render() {
        let { title, navigator, targetComponent } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar 
                    title={ title }
                    backFunc={ () => { navigator.pop } }
                    />
                <View style={{ flex: 1 }}>
                    { this.props.targetComponent } 
                </View>
            </View>
        );
    }
}
