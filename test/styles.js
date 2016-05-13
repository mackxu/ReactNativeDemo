/* @flow */
'use strict';

import { 
    StyleSheet,
    Image,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subjectCover: {
    resizeMode: 'stretch',
  },
  albumContainer: {
    position: 'absolute',
    top: 300,
    left: 0,
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