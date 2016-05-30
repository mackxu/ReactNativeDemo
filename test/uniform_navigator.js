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
      title: 'SecondPage',
      passProps: {
        name,
      },
      type: type,
    });
  };

  render() {
    return (
      <View style={[styles.container, { marginTop: 80 }]}>
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
      <View style={[styles.container, { marginTop: 60 }]}>
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
let NavigationBarRouteMapper = {
  
  LeftButton(route, navigator, index, navState) {
    if(index === 0) return null;
    return (
      <TouchableOpacity
        onPress={navigator.pop}
        >
        <View style={styles.navLeft}>
          <View style={styles.backIcon}></View>
          <Text style={styles.buttonText}>返回</Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>{ route.title }</Text>
    );
  },
};

export default class uniformView extends Component {

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
        title={route.title}
        {...route.passProps}
        />
    )
  };

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{component: FirstPage, title: 'FirstPage'}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.navContainer }
            routeMapper={NavigationBarRouteMapper}
            />
        }
      />
    );
  }
}



/* ---------------------- styles --------------------- */

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
  },

  /* -------------- 头部bar样式 ------------ */
  navContainer: {
    backgroundColor: '#81c04d',
  },
  navBarText: {
    fontSize: 20,
    marginVertical: 10,
  },
  navBarTitleText: {
    flex: 1,
    marginTop: 12,
    textAlign: 'center',
  },
  navLeft: {
    marginTop: 14,
    flexDirection: 'row',
  },
  backIcon: {
    width: 14,
    height: 14,
    marginLeft: 12,
    marginTop: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{rotate: '45deg'}],

    borderColor: '#fff',
  }
});