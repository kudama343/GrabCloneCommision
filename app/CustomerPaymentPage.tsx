import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise install react-native-vector-icons
import { useRouter } from 'expo-router';

export default function CustomerPaymentPage() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
        <View style={styles.headerBackbtn}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/CustomerConfirmationPage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        </View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Orders Section */}
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersTitle}>Choose your mode of payment</Text>

            
          <View>
            <TouchableOpacity style={styles.orderCard} >
                <Text style={styles.orderText}>Cash</Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity style={styles.orderCard} >
                <Text style={styles.orderText}>GCash</Text>
            </TouchableOpacity>
          </View>
         
       
      </View>

    {/* Next Button */}
    <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/CustomerConfirmationPage')}>
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
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
  },
  orderCard: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderText: {
    fontSize: 16,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
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
