/* @flow */
'use strict';

import { 
    StyleSheet,
    Dimensions,
} from 'react-native';

let { width, height } = Dimensions.get('window');

console.log('width: ' + width);

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subjectCover: {
    resizeMode: 'stretch',
    flex: 1,
    opacity: 0.2,
  },
  albumContainer: {
    position: 'absolute',
    top: 360,
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: {
    width: 210,
    height: 280,
    marginHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  albumCover: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',

  }
});