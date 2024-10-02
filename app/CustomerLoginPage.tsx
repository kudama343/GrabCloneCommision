import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { supabase } from './SupaBaseConfig';

export default function CustomerLoginPage() {
  const router = useRouter(); // Initialize the router
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [inputError, setInputError] = useState(false); // State for input error

  // Function to handle the login button click
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Validation Error', 'Please fill in both username and password.');
      setInputError(true); // Show red border on empty input
      return;
    }

    try {
      // Query the Supabase table for the admin data
      const { data, error } = await supabase
        .from('grab_customer') // The table name
        .select('*')
        .eq('username', username)
        .eq('password', password) // Make sure both username and password match
        .single(); // We expect only one result

      if (error || !data) {
        // If no matching record is found
        Alert.alert('Login Failed', 'Username or password is incorrect');
        setUsername(''); // Clear the input fields
        setPassword('');
        setInputError(true); // Show red border on incorrect login
      } else {
        // If login is successful
        Alert.alert('Login Success', `Welcome, ${data.username}!`);
        router.push('/CustomerHomePage');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again later.');
    }
  };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url-here.com/cart-logo.png' }} // replace with your logo URL or import locally
        style={styles.logo}
      />
      <Text style={styles.logoText}>CUYO DASHCART</Text>

    
     {/* Username Input */}
     <Text style={styles.label}>Username</Text>
      <TextInput
        style={[styles.input, inputError && !username ? styles.errorInput : null]} // Conditional error styling
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          setInputError(false); // Reset error state when typing
        }}
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, inputError && !password ? styles.errorInput : null]} // Conditional error styling
          placeholder="Enter Password"
          secureTextEntry={!showPassword} // Show or hide password based on state
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setInputError(false); // Reset error state when typing
          }}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
        >
          <Text style={styles.showPasswordText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up and Login as Driver links */}
      <TouchableOpacity onPress={() => router.push('/CustomerSignUp')}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity onPress={() => router.push('/DriverLogin')}>
        <Text style={styles.linkText}>Login as Driver</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity onPress={() => router.push('/AdminLoginPage')}>
        <Text style={styles.linkText}>Login as Admin</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
  },
  showPasswordText: {
    fontSize: 14,
    color: '#FFA726',
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
});

