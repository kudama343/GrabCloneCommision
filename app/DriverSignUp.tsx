import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { supabase } from './SupaBaseConfig';

export default function DriverSignUp() {
  const router = useRouter(); // Initialize the router

  // State variables for the form inputs
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the Sign Up button click
  const handleSignUp = async () => {
    if (fullname && username && password) {
      try {
        const { data, error } = await supabase
          .from('grab_driver') // Table name
          .insert([
            { fullname, username, password } // Column names in your Supabase table
          ]);

        if (error) {
          throw error;
        }

        // If successful, show an alert and navigate or reset the form
        Alert.alert('Success', 'Account created successfully!');
        router.push('/DriverLogin'); // Navigate to the next screen if necessary
      } catch (error) {
        
      }
    } else {
      Alert.alert('Validation Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url-here.com/cart-logo.png' }} // replace with your logo URL or import locally
        style={styles.logo}
      />
      <Text style={styles.logoText}>Sign Up as Driver</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={fullname}
        onChangeText={setFullname} // Update the state
      />

      {/* Username Input */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername} // Update the state
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword} // Update the state
      />


      {/* Sign Up Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
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
