import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('PostCreate'); // Use navigate instead of replace
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  const handleRegisterNavigate = () => {
    // Logic for navigating to the Register screen
    // e.g., navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="User name *"
          placeholderTextColor="#fff"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password *"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.createAccountLinkTouchable} onPress={handleRegisterNavigate}>
          <Text style={styles.createAccountLink}>Don’t have an account? Create it.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A22',
    padding: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginTitle: {
    color: 'green',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    marginBottom: 20,
    paddingVertical: 5,
  },
  createAccountLinkTouchable: {
    marginBottom: 20,
  },
  createAccountLink: {
    color: 'green',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
