'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SIZE = 4;
const CELL_SIZE = Math.floor(width * .2);               // 每个单元格占1/5
const CELL_PADDING = Math.floor(CELL_SIZE * .05);       // 间距是单元格的1/20
const BORDER_RADIUS = CELL_PADDING * 2;                 // 圆角是单元格的1/10

const TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;         // 单元格的实际大小
const LETTER_SIZE = Math.floor(TILE_SIZE * .75);        // 字体大小是单元格的3/4

class GridGame extends Component {

  constructor(props) {
    super(props);
    let len = SIZE * SIZE;
    let tiles = [];
    for(let i = 0; i < len; i++) {
      tiles[i] = new Animated.Value(0);
    }
    this.state = { tiles };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.gridContainer}>
          {this.renderAllTiles()}
        </View>
      </View>
    );
  }

  renderAllTiles = () => {
    var t = [];

    // 计算每个tile的样式和内容
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        let key = row * SIZE + col;             // tile顺序

        // 翘起的变化差值
        let tile = this.state.tiles[key].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-45deg']
        });

        // tile的样式计算
        let style = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING,
          transform: [{ perspective: CELL_SIZE * 8 }, { rotateX: tile }],
        };

        let letter = String.fromCharCode(65 + key);

        t.push(this.renderTile(key, style, letter));
      }
    }

    return t;
  }

  renderTile = (id, tilePosition, text) => {
    return (
      <Animated.View 
        key={id}
        style={[styles.tileStyle, tilePosition]}
        onStartShouldSetResponder={this.onPressTile.bind(this, id)}
      >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    )
  }

  /**
   * onPress事件
   * @param  {[type]} tileId [description]
   * @return {[type]}        [description]
   */
  onPressTile = (tileId) => {
    let tile = this.state.tiles[tileId];
    tile.setValue(1);
    Animated.timing(tile, {
      toValue: 0,
      duration: 250,
      easing: Easing.quad,
    }).start();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridContainer: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
  },

  tileStyle: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,

    borderRadius: BORDER_RADIUS,
    backgroundColor: '#BEE1D2',

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#333',
    fontSize: LETTER_SIZE,
  } 
});

export default GridGame;
