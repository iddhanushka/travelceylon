import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

export default function Wild() {
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.cardAll}>
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require('../images/sigiriya.png')}
              />
              <LinearGradient
                colors={['transparent', 'transparent', '#091702']}
                style={styles.cardOverlay}
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Sigiriya</Text>
                <Text style={styles.cardTag}>Dambulla in Sri Lanka</Text>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require('../images/sigiriya.png')}
              />
              <LinearGradient
                colors={['transparent', 'transparent', '#091702']}
                style={styles.cardOverlay}
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Sigiriya</Text>
                <Text style={styles.cardTag}>Dambulla in Sri Lanka</Text>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require('../images/sigiriya.png')}
              />
              <LinearGradient
                colors={['transparent', 'transparent', '#091702']}
                style={styles.cardOverlay}
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Sigiriya</Text>
                <Text style={styles.cardTag}>Dambulla in Sri Lanka</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  cardAll: {
    rowGap: 20,
  },
  card: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 7,
  },
  cardOverlay: {
    width: '100%',
    height: 200,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 7,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 3,
  },
  cardTag: {
    color: '#fff',
    fontSize: 14,
  },
});
