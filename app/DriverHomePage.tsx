import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise install react-native-vector-icons
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      {/* Active Requests Section */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Active Requests</Text>

        {/* Request Cards */}
        <View style={styles.requestCard}>
          <Text style={styles.requestText}>Request 1</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/DriverRequestPage')}>
            <Text style={styles.buttonText}>Check</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.requestCard}>
          <Text style={styles.requestText}>Request 2</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#FFA726',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  requestCard: {
    backgroundColor: '#d3d3d3', // Light grey color
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  requestText: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FFA500', // Orange color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
