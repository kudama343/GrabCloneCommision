import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBackbtn}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/CustomerOptionPage')}>
            <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
        </View>

      {/* Pickup Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Select Pickup Location"
        placeholderTextColor="#7D7D7D"
      />

      {/* Destination Input */}
      <TextInput
        style={styles.input}
        placeholder="Select Destination"
        placeholderTextColor="#7D7D7D"
      />

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 14.5995,
          longitude: 120.9842,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/CustomerDriverAvailablePage')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  input: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  map: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
  },
  nextButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerBackbtn: {
    
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
