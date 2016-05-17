/* @flow */
'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1 },
  topicList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  topicContainer: {
    marginBottom: 20,
  },
  topicItem: {
    height: 300,
  },
  topicCover: {
    flex: 1,
  },
  topicName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  topicText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#ccc',
    fontSize: 20,
  },
});