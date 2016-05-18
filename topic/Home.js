'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Image,
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';             // 头部导航条

import styles from './Styles';
import AlbumList from './AlbumList';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id }),
      loaded: false,
    };
  }

  componentDidMount() {
    let topicList = [{
      id: 406007302,
      name: '周冬雨余文乐CP造型盘点',
      imageUrl: 'http://pic5.ptqy.gitv.tv/image/20160517/7f/83/c_202613439_l_601_480_270.jpg',
    }, {
      id: 404230902,
      name: '这些剧带你重返“青春期”',
      imageUrl: 'http://pic4.ptqy.gitv.tv/image/20160406/1c/0c/c_202450013_l_601_480_270.jpg',
    }];
    this.setState({
      topicList: this.state.topicList.cloneWithRows(topicList),
      loaded: true,
    });
  }
  render() {
    if(!this.state.loaded) return this.renderLoadingView();
    return (
      <View style={styles.container}>
        <NavigationBar
          backHidden={true}
          title={this.props.title}
          accessible={true}
          />
        <ListView
          dataSource = {this.state.topicList}
          renderRow = {this.renderTopic.bind(this)}
          style = {styles.topicList} />
      </View>
    );
  }

  renderLoadingView = () => {
    return(
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  };

  onPress = (topicId, topicName) => {
    this.props.navigator.push({
      component: AlbumList,
      title: topicName,
      topicId,
    });
  };

  renderTopic = (rowData, sectionID, rowID) => {
    return (
      <TouchableHighlight
        underlayColor='#ddd'
        style={styles.topicContainer}
        onPress={this.onPress.bind(this, rowData.id, rowData.name)}
        key={rowData.id}
        >
        <View style={styles.topicItem}>
          <Image
            style={styles.topicCover}
            source={{uri: rowData.imageUrl}} />
          <View style={styles.topicName}>
            <Text style={styles.topicText}>{rowData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
}
export default Home;
