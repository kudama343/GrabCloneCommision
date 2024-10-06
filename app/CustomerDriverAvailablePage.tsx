import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from './SupaBaseConfig'; // Import the initialized Supabase client

export default function CustomerDriverAvailablePage() {
  const router = useRouter(); 
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null); // Temporary state for storing selected driver

  useEffect(() => {
    // Fetch the driver names from Supabase
    const fetchDrivers = async () => {
      try {
        const { data, error } = await supabase
          .from('grab_driver')
          .select('fullname')
          .eq('status', 'active');

        if (error) {
          throw error;
        }

        setDrivers(data); // Set the fetched drivers in state
      } catch (error) {
        Alert.alert('Error', error.message); // Display error if fetch fails
      }
    };

    fetchDrivers();
  }, []);

  // Function to handle driver selection
  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver); // Store selected driver in state
    console.log('Selected driver:', driver); // Log for testing
    router.push('/CustomerPaymentPage'); 
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Driver</Text>
      </View>

      {/* Drivers Section */}
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersTitle}>Available Drivers</Text>

        <ScrollView>
          {/* Render the list of drivers */}
          {drivers.map((driver, index) => (
            <TouchableOpacity
              key={index}
              style={styles.orderCard}
              onPress={() => handleDriverSelect(driver.fullname)}
            >
              <Text style={styles.orderText}>{driver.fullname}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  ordersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  ordersTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  orderCard: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDriverContainer: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDriverText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
