import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.main}>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
