import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DriverRequestPage() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      <View style={styles.headerBackbtn}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/DriverHomePage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Request 1</Text>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.declineButton}>
            <Text style={styles.declineButtonText}>Decline</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptButton} onPress={() => router.push('/DriverStepOneMapPage')}>
            <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
       </View>

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
  
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    alignItems: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Space buttons evenly (left and right)
    paddingHorizontal: 20, // Optional: Adjust the padding for side spacing
    marginTop: 20, // Optional: Adjust margin if necessary
  },
  declineButton: {
    backgroundColor: '#CECEC9', // Orange color
    margin: 15,
    borderRadius: 5,
    flex: 1, // Allows buttons to take available space evenly
    
  },
  declineButtonText: {
    color: '#323232',
    fontWeight: '600',
    textAlign: 'center',
    padding: 15,
  },

  acceptButton: {
    backgroundColor: '#FFA500', // Orange color
    borderRadius: 5,
    flex: 1, // Allows buttons to take available space evenly
    margin: 15,
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    padding: 15,
  },
  headerBackbtn: {
    backgroundColor: '#FFA726',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});
