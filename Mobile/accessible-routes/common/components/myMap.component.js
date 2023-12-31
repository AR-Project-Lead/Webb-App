import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

const MyMap = () => {
  const campus_center = [42.7294, -73.6797]


  return <View style={styles.container}>
            <MapView 
              initialRegion={{
                latitude: 42.729268, 
                longitude: -73.681227,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            
            style={styles.map} />

        </View>
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  
export default MyMap;