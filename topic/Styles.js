/* @flow */
'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
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

  // Album List style
  albumContainer: {
    marginBottom: 10,
  },
  albumContent: {
    flex: 1,
    flexDirection: 'row',
  },
  albumCover: {
    resizeMode: 'contain',
    height: 100,
    width: 80,
  },
  albumMain: {
    flex: 1,
  },
  albumName: {
    fontSize: 20,
    color: '#333',
  },
  actor: {
    color: '#888',
  },
});