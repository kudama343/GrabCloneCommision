import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from './SupaBaseConfig'; // Import the initialized Supabase client

export default function CustomerSignUp() {
  const router = useRouter(); // Initialize the router

  // State variables for the form inputs
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [inputError, setInputError] = useState(false); // State for input error

  // Function to handle the Sign Up button click
  const handleSignUp = async () => {
    // Check if all fields are filled
    if (!fullname || !username || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      setInputError(true); // Highlight the empty fields if necessary
      return;
    }

    try {
      // Check if the username is already taken
      const { data: existingUser, error: checkError } = await supabase
        .from('grab_customer')
        .select('*')
        .eq('username', username)
        .single(); // We expect only one result

      if (checkError && checkError.code !== 'PGRST116') {
        // If a different error occurred while checking the username
        throw checkError;
      }

      if (existingUser) {
        // If the username already exists, show an alert
        Alert.alert('Username Error', 'The username is already taken. Please choose a different one.');
        return;
      }

      // If the username is unique, insert the new customer data
      const { data, error } = await supabase
        .from('grab_customer') // Table name
        .insert([
          { fullname, username, password } // Column names in your Supabase table
        ]);

      if (error) {
        throw error;
      }

      // If successful, show an alert and navigate or reset the form
      Alert.alert('Success', 'Account created successfully!');
      router.push('/CustomerLoginPage'); // Navigate to the next screen if necessary

    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url-here.com/cart-logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.logoText}>Sign Up as Customer</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={[styles.input, inputError && !fullname ? styles.errorInput : null]} // Error styling for empty input
        placeholder="Enter Full Name"
        value={fullname}
        onChangeText={setFullname} // Update the state
      />

      {/* Username Input */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={[styles.input, inputError && !username ? styles.errorInput : null]} // Error styling for empty input
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername} // Update the state
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[styles.input, inputError && !password ? styles.errorInput : null]} // Error styling for empty input
        placeholder="Enter Password"
        secureTextEntry={!showPassword} // Show or hide password
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
  errorInput: {
    borderColor: 'red',
    borderWidth: 2,
  },
});
