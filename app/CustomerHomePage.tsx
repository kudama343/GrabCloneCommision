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

      {/* Orders Section */}
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersTitle}>Orders</Text>

        <ScrollView>
          {/* Order Details */}
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order details</Text>
          </View>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order details</Text>
          </View>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order details</Text>
          </View>
        </ScrollView>
      </View>

      {/* Floating Plus Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => router.push('/CustomerOptionPage')}>
        <MaterialIcons name="add" size={24} color="white" />
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
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#FFA726',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
});
