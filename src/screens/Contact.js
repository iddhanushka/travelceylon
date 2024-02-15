import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {WebView} from 'react-native-webview';

export default function Contact() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contact}>
          <Text style={styles.title}>Hi there..</Text>
          <View style={styles.contactInfo}>
            <View style={styles.phone}>
              <Text style={styles.phoneTitle}>Telephone</Text>
              <Text style={styles.phoneNumber}>011234567</Text>
            </View>

            <View style={styles.email}>
              <Text style={styles.emailTitle}>Telephone</Text>
              <Text style={styles.emailAddress}>011234567</Text>
            </View>
          </View>

          <View style={styles.location}></View>
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
  map: {
    borderWidth: 2,
  },
  title: {
    color: '#25BB18',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  phoneTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  phoneNumber: {
    color: '#fff',
  },
  emailTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emailAddress: {
    color: '#fff',
  },
  phone: {
    marginBottom: 30,
  },
});
