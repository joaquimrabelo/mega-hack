import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

export function TabBarIcon({icon}) {
  return (
    <Image style={styles.icon} source={icon} />
  );
}

export function TabBarIconMain({icon}) {
  return (
    <Image style={styles.iconMain} source={icon} />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  iconMain: {
    width: 40,
    height: 40,
  }
})