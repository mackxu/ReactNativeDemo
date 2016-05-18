'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ListView,
  Image,
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';             // 头部导航条

import styles from './Styles';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    console.log('topicId: ' + this.props.topicId);
    this.state = {
      albumsList: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id }),
      loaded: false,
    };
  }

  componentDidMount() {
    let albumsList = [{
      id: 406007302,
      name: '爱在深秋',
      imageUrl: 'http://pic8.ptqy.gitv.tv/image/20160325/1a/24/v_110198534_m_600_m1_354_490.jpg',
      contributors: [{name: '周润发', id : 202712805}, {name : '刘德华', id : 200002105}],
      desc: "正在忙于拍摄电影的梦霖为了和家辉庆祝结婚十周年，并给他一个意外惊喜，特别向剧组请假从香港飞往上海与家辉庆祝。十年前，梦霖和家辉曾经背包旅游桂林，并在千年瑶寨不远之处，情定终身，立下爱的誓言。梦霖希望在结婚十周年的这一天可以和家辉重游旧地。但当梦霖来到上海，却发现家辉不但忘记了十年前刻骨铭心的桂林和瑶寨之旅，以至结婚十周年的重要日子，更目睹他和秘书Cindy有亲密关系。妒忌和怒气交加，喝得酩酊大醉的梦霖，决定立刻出走，并随手乘搭上一辆计程车，叫司机载她到桂林。司机叫韩磊，他本来极不情愿，但结果经过一番折腾，还是乖乖的陪梦霖上路。生活在完全不同的世界，不可能在一起的两个人，从此就开始了一段无法预料的公路之旅。当他们到达桂林，梦霖和韩磊已经互生情愫。在韩磊的陪同下，梦霖终于来到十年前和家辉立下山盟海誓的地方。面对面目全非的景色，梦霖不胜希嘘。当他们离开时，却没想到家辉竟然也飞来了桂林。千山万水，在命运的安排下，为了寻求真爱的三人就这样聚集在桂林。"
    }, {
      id: 404230902,
      name: '极盗者',
      imageUrl: 'http://pic9.ptqy.gitv.tv/image/20160330/4d/7b/v_110189487_m_600_m2_354_490.jpg',
      contributors: [{name: '周润发', id : 202712805}, {name : '刘德华', id : 200002105}],
      desc: "石一坚在女儿的婚礼上，因误用兄弟小马的“催眠治疗”加上机器人炸弹袭击而变得精神错乱。神秘人物易天行一心想要置石一坚于死地，幸亏龙五带领儿子龙十五及时营救。“赌侠”刀仔与赌神表妹高菲也一起来帮助石一坚恢复记忆，众人终于知道易天行就是幕后黑手，为了调查清楚真相，石一坚与“赌神”联手，最后大战一触即发。"
    }];
    this.setState({
      albumsList: this.state.albumsList.cloneWithRows(albumsList),
      loaded: true,
    });
  }
  render() {
    let { title, navigator } = this.props;
    if(!this.state.loaded) return this.renderLoadingView();
    return (
      <View style={styles.container}>
        <NavigationBar
          title={this.props.title}
          backFunc={navigator.pop}
        />
        <ListView
          dataSource = {this.state.albumsList}
          renderRow = {this.renderAlbumItem.bind(this)}
          style = {styles.listContainer} />
      </View>
    );
  }

  renderLoadingView() {
    return(
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  renderAlbumItem(rowData, sectionID, rowID) {
    // 构建演员表
    let actors = rowData.contributors.map((actor, i) => {
      let actorName = i ? ', ' + actor.name : actor.name;
      return (
        <Text key={actor.id}>{actorName}</Text>
      );
    });
    return (
      <TouchableHighlight
        underlayColor='#ddd'
        style={styles.albumContainer}
        onPress={this.onPress.bind(this, rowData)}
        key={rowData.id}
        >
        <View style={styles.albumContent}>
          <Image
            style={styles.albumCover}
            source={{uri: rowData.imageUrl}} />
          <View style={styles.albumMain}>
            <Text style={styles.albumName}>{rowData.name}</Text>
            <Text style={styles.actor}>{actors}</Text>
            <Text style={styles.desc} numberOfLines={3}>{rowData.desc}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  onPress(albumData) {
    this.props.navigator.push({
      component: AlbumDetail,
      title: albumData.name,
      album: albumData,
    });
  }
}
