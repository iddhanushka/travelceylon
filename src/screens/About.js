import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View styles={styles.about}>
          <View style={styles.aboutUs}>
            <Text style={styles.title}>Ayubowan!</Text>
            <Text
              style={[styles.aboutContent, styles.aboutContentFirstParagraph]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, 
            </Text>
            <Text style={styles.aboutContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, 
            </Text>
          </View>

          <View style={styles.mission}>
            <Text style={styles.missionTitle}>Our Mission</Text>
            <Text style={styles.missionContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </View>

          <View style={styles.vission}>
            <Text style={styles.vissionTitle}>Our Mission</Text>
            <Text style={styles.vissionContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#080A22',
    height: '100%',
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 15,
  },
  title: {
    color: '#25BB18',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  aboutContent: {
    color: '#fff',
    textAlign: 'justify',
  },
  aboutContentFirstParagraph: {
    marginBottom: 20,
  },
  missionTitle: {
    color: '#A3A6F8',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  missionContent: {
    color: '#fff',
    textAlign: 'center',
  },
  vissionTitle: {
    color: '#A3A6F8',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  },
  vissionContent: {
    color: '#fff',
    textAlign: 'center',
  },
  aboutUs: {
    marginBottom: 50,
  },
  mission: {
    marginBottom: 20,
  },
});
