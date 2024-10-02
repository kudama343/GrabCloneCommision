import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConfirmationScreen() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      <View style={styles.headerBackbtn}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/DriverStepTwoMapPage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Request 1</Text>
      </View>
    <View style={styles.stepTitleContainer}> 
      
        <Text style={styles.stepTitle}>Step 3: Confirmation</Text>
       
      
        <Text style={styles.stepInstruction}>Wait for the confirmation of the customer about the status of the request.</Text>
     
      </View>
      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/DriverHomePage')}>
        <Text style={styles.nextButtonText}>Go To Home</Text>
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
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  stepTitleContainer:{
    padding: 20
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
    
   
  },
  nextButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin:15
  },
  nextButtonText: {
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
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  headerBackbtn: {
    backgroundColor: '#FFA726',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
