'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableOpacity,
} from 'react-native';


class FirstPage extends Component {

  /**
   * 跳转页面
   * @param  {[type]} name [description]
   * @param  {String} type [description]
   * @return {[type]}      [description]
   */
  _navigate = (name, type='Normal') => {
    this.props.navigator.push({
      component: SecondPage,
      passProps: {
        name,
      },
      type,
    });
  };

  render() {
    return (
      <View style={[styles.container, { marginTop: 20 }]}>
        <View style={styles.heading}>
          <Text style={styles.headText}>第一页</Text>
        </View>
        <TouchableOpacity
          onPress={this._navigate.bind(this, 'Hello(From FirstPage: right)')}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>跳转至第二页(右出)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._navigate.bind(this ,'Hello(From FirstPage: Bottom)', 'Bottom')}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>跳转至第二页(底出)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class SecondPage extends Component {
  render() {
    let { name, navigator } = this.props;
    return (
      <View style={[styles.container, { marginTop: 20 }]}>
        <View style={styles.heading}>
          <Text style={styles.headText}>第二页: { name }</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={navigator.pop}
          >
          <Text style={styles.buttonText}>返回上一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class TestPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headText}>第二页</Text>
        </View>
      </View>
    );
  }
}

// 主模块
class SimpleView extends Component {

  configureScene = (route, routeStack) => {
    if(route.type === 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom;    // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight;        // 右侧弹出
  };
  
  renderScene = (route, navigator) => {
    return (
      <route.component
        navigator={navigator} 
        {...route.passProps} 
        />
    )
  };

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{component: FirstPage}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff1046',
    marginBottom: 10,
  },
  headText: {
    color: '#fff',
    fontSize: 22,
  },
  button: {
    height: 60,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  buttonText: {
    fontSize: 18,
  }
});


export default SimpleView;