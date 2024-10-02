import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise install react-native-vector-icons
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
        <View style={styles.headerBackbtn}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/CustomerDeliveryMapPage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        </View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Driver</Text>
      </View>

      {/* Orders Section */}
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersTitle}>Available</Text>

        <ScrollView>
          {/* Order Details */}
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Driver 1</Text>
          </View>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Driver 2</Text>
          </View>
         
        </ScrollView>
      </View>

    {/* Next Button */}
    <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/CustomerPaymentPage')}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  nextButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 15
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
