'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseAnim: {
    paddingVertical: 4,
    marginBottom: 10,
    width: 160,
    alignItems: 'center'    
  },
  anim0: {
    backgroundColor: 'red',
  },
  anim1: {
    backgroundColor: 'blue',
  },
  anim2: {
    backgroundColor: 'green',
  },
  animText: {
    fontSize: 20,
    color: '#fff',
  }
});