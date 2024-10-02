import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CustomerConfirmationPage() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Confirmation</Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Transaction Details</Text>
        <Text style={styles.amount}>₱ 100.00</Text>
        <Text style={styles.date}>Date and time</Text>
        <View style={styles.details}>
          <Text style={styles.label}>Your Full Name</Text>
          <Text style={styles.label}>Rider’s Full Name</Text>
          <Text style={styles.label}>Payment Mode</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/CustomerHomePage')}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    
    alignItems: 'center',
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A9A9A9',
    marginBottom: 20,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: '#A9A9A9',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  confirmButton: {
    position: 'absolute',  // Make it absolute positioned
    bottom: 20,            // Set it 20 pixels above the bottom
    left: 20,              // Align to left with a margin
    right: 20,             // Align to right with a margin
    height: 45,
    borderRadius: 5,
    backgroundColor: '#FFA726',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    alignItems: 'flex-start',
  },
});
