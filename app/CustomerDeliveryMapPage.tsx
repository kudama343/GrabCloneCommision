import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useRouter } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import haversine from 'haversine';

export default function CustomerDeliveryMapPage() {
  const router = useRouter(); 
  const [pickupLocation, setPickupLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const pickupRef = useRef();
  const destinationRef = useRef();
  const [distance, setDistance] = useState(null);

  const GOOGLE_MAPS_APIKEY = 'AIzaSyByDYhxfVF_nz5isBG_v5oYa08t45NK5VQ';
  const MAPS_DIRECTIONS_APIKEY = 'AIzaSyByDYhxfVF_nz5isBG_v5oYa08t45NK5VQ';

  // Function to calculate the distance between two points
  const calculateDistance = (pickup, destination) => {
    const start = { latitude: pickup.latitude, longitude: pickup.longitude };
    const end = { latitude: destination.latitude, longitude: destination.longitude };
    const dist = haversine(start, end, { unit: 'km' });
    setDistance(dist.toFixed(2)); // Display distance in km
  };

  const handleNext = () => {
    if (!pickupLocation || !destinationLocation) {
      Alert.alert('Error', 'Please select both pickup and destination locations.');
      return;
    }
    router.push('/CustomerDriverAvailablePage');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBackbtn}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/CustomerOptionPage')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.autocompleteContainer}>
        {/* Pickup Autocomplete Input */}
        <View style={styles.autocompleteWrapper}>
          <GooglePlacesAutocomplete
            ref={pickupRef}
            placeholder="Select Pickup Location"
            minLength={2}
            fetchDetails={true}
            onPress={(data, details = null) => {
              setPickupLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              if (destinationLocation) {
                calculateDistance(
                  { latitude: details.geometry.location.lat, longitude: details.geometry.location.lng },
                  destinationLocation
                );
              }
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
              location: `${10.8528936},${120.9970925}`, // Centering on a specific island
              radius: 500, // Limiting results to a 50km radius around the initial coordinates
            }}
            styles={{
              textInput: styles.input,
              description: {
                color: '#000',
              },
              listView: { zIndex: 1000 },
            }}
          />
          <TouchableOpacity style={styles.clearButton} onPress={() => pickupRef.current?.clear()}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.autocompleteContainer}>
        {/* Destination Autocomplete Input */}
        <View style={styles.autocompleteWrapper}>
          <GooglePlacesAutocomplete
            ref={destinationRef}
            placeholder="Select Destination"
            minLength={2}
            fetchDetails={true}
            onPress={(data, details = null) => {
              setDestinationLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              if (pickupLocation) {
                calculateDistance(pickupLocation, {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
              location: `${10.8528936},${120.9970925}`,
              radius: 500,
            }}
            styles={{
              textInput: styles.input,
              description: {
                color: '#000',
              },
              listView: { zIndex: 999 },
            }}
          />
          <TouchableOpacity style={styles.clearButton} onPress={() => destinationRef.current?.clear()}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.8528936,
          longitude: 120.9970925,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={
          pickupLocation
            ? {
                latitude: pickupLocation.latitude,
                longitude: pickupLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : destinationLocation
            ? {
                latitude: destinationLocation.latitude,
                longitude: destinationLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : undefined
        }
      >
        {pickupLocation && <Marker coordinate={pickupLocation} title="Pickup Location" />}
        {destinationLocation && <Marker coordinate={destinationLocation} title="Destination Location" />}
        {pickupLocation && destinationLocation && (
          <MapViewDirections
            origin={pickupLocation}
            destination={destinationLocation}
            apikey={MAPS_DIRECTIONS_APIKEY} // Your Google Maps Directions API Key
            strokeWidth={4}
            strokeColor="orange"
            onReady={(result) => setDistance(result.distance.toFixed(2))} // Set distance from API
            onError={(error) => console.log('Directions error:', error)}
          />
        )}
      </MapView>

      {/* Distance Text */}
      {distance && (
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>Distance: {distance} km</Text>
          <Text style={styles.distanceText}>Fair: {distance * 5}  pesos</Text>
        </View>
        
      )}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  headerBackbtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  input: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  map: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
  },
  distanceContainer: {
    marginVertical: 10,
  },
  distanceText: {
    fontSize: 18,
    color: '#000',
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
  autocompleteContainer: {
    zIndex: 1,
  },
  autocompleteWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 15,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 20,
    color: '#FF0000',
  },
});