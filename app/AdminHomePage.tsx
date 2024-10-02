import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Pressable} from 'react-native';
import  Slider  from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AdminHomePage ()  {
  const router = useRouter();
  const [ratePerDistance, setRatePerDistance] = useState(50);
  const [companyShares, setCompanyShares] = useState(10);
  const [modalVisible, setModalVisible] = useState(false);

  const increaseRate = () => {
    setRatePerDistance(ratePerDistance + 1);
  };

  const decreaseRate = () => {
    if (ratePerDistance > 0) {
      setRatePerDistance(ratePerDistance - 1);
    }
  };

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
    setModalVisible(false);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Logout Icon */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <AntDesign name="logout" size={24} color="black" />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>Admin</Text>

      {/* Rate per distance input */}
      <Text style={styles.label}>Rate per distance (in pesos)</Text>
      <View style={styles.rateContainer}>
        <Pressable onPress={decreaseRate} style={styles.arrowButton}>
          <AntDesign name="down" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.textInput}
          value={ratePerDistance.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setRatePerDistance(Number(text))}
        />
        <Pressable onPress={increaseRate} style={styles.arrowButton}>
          <AntDesign name="up" size={24} color="black" />
        </Pressable>
      </View>

      {/* Company shares slider */}
      <Text style={styles.label}>Rates of company shares</Text>
      <Text style={styles.sharesText}>{companyShares}%</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={companyShares}
        onValueChange={(value) => setCompanyShares(Math.round(value))}
        minimumTrackTintColor="#F7941D"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor="#F7941D"
      />

      {/* Apply button */}
      <Pressable style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </Pressable>

      {/* Logout confirmation modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={() => router.push('/AdminLoginPage')}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={cancelLogout}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  logoutButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#F7941D',
    textAlign: 'center',
    padding: 50,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  sharesText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  applyButton: {
    backgroundColor: '#F7941D',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#F7941D',
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});


