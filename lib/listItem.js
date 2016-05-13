import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    PixelRatio,
} from 'react-native';

export default class ListItem extends Component {
    constructor(props) {
      super(props);
    }

    static defaultProps = {
        title: '',
        onPress: () => {},
        underlayColor: '#aaa',
    };

    render() {
        let {onPress, underlayColor, title} = this.props;
        return (
            <TouchableHighlight
                accessible={true}
                onPress={ onPress }
                underlayColor={ underlayColor }
                >
                <View style={styles.listItem}>
                    <Text style={styles.btnText}>
                        { title }
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({
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
});
