import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

export default function DriverLogin() {
  const router = useRouter(); // Initialize the router
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url-here.com/cart-logo.png' }} // replace with your logo URL or import locally
        style={styles.logo}
      />
      <Text style={styles.logoText}>Login as Driver</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Enter Full Name" />

      {/* Username Input */}
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Enter Username" />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
      />

      {/* Sign Up and Login as Driver links */}
      <TouchableOpacity onPress={() => router.push('/DriverSignUp')}>
        <Text style={styles.linkText}>Sign Up as Driver</Text>
      </TouchableOpacity>
      

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/DriverHomePage')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9A825',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#d3d3d3',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  linkText: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  orText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 5,
  },
  loginButton: {
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#FFA726',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
