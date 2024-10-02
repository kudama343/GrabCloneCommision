import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useRouter } from 'expo-router';

export default function DriverStepOneMapPage() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/DriverRequestPage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleHeader}>
        <Text style={styles.detailsTitle}>Request 1</Text>
      </View>      

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
      <View style={styles.stepTitle}>
        <Text style={styles.stepTitle}>Step 1: Pickup</Text>
      </View>  
      <View style={styles.stepInstruction}>
        <Text style={styles.stepInstruction}>Press Done button if you already pickup the delivery/person</Text>
      </View>  
      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/DriverStepTwoMapPage')}>
        <Text style={styles.nextButtonText}>Done</Text>
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
  detailsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    
  },
  titleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTitle:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepInstruction:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 15
  }
});
