import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise install react-native-vector-icons
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
        <View style={styles.headerBackbtn}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/CustomerHomePage')}>
            <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
        </View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Options</Text>
      </View>

      <TouchableOpacity style={styles.optionBtns} onPress={() => router.push('/CustomerDeliveryMapPage')}>
        <Text style={styles.optionBtnsText}>Delivery</Text>
        <View >
        <Text style={styles.optionBtnsTextContent}>for transportation of products from a supplier to a customer.</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionBtns} onPress={() => router.push('/CustomerDeliveryMapPage')}>
        <Text style={styles.optionBtnsText}>Back Ride</Text>
        <View >
        <Text style={styles.optionBtnsTextContent}>passenger sitting behind a driver on a motorcycle, being transported to their destination.</Text>
      </View>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  headerBackbtn: {
    backgroundColor: '#FFA726',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
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
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  optionBtns: {
    backgroundColor: '#FFA500',
    padding: 15,
    margin: 25,
    borderRadius: 8,
    alignItems: 'center',
   
  },
  optionBtnsText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  optionBtnsTextContent: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'medium',
    margin:15
  }
});
