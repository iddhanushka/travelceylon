import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
          </View>

          <TouchableOpacity style={styles.loginLinkTouchable}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    position: 'relative',
    left: '50%',
    transform: [{translateX: -50}],
  },
  loginLink: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  loginLinkTouchable: {
    flex: 1,
    alignItems: 'flex-end',
    width: 'auto',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
