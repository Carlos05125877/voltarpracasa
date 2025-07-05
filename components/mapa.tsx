import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Mapbox from '@rnmapbox/maps';
import React from 'react';
import { StyleSheet, View } from 'react-native';

Mapbox.setAccessToken('pk.eyJ1IjoiY2FybG9zb3V6YTA1IiwiYSI6ImNtY2phZnl5NDAyNXoya3B6NGViaTI0MTAifQ.A1Yve7Y4anf6HhIC1sGdUQ');

const Mapa = () => {
  // Coordenadas de Sete Lagoas, MG
  const latitude = -19.47922020;
  const longitude = -44.2476992;

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[longitude, latitude]}
          />
          <Mapbox.PointAnnotation
            id="Pessoa"
            coordinate={[longitude, latitude]}
          >
            <MaterialIcons name="person-pin-circle" size={24} color="red" />
          </Mapbox.PointAnnotation>
        </Mapbox.MapView>
      </View>
    </View>
  );
}

export default Mapa;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 350,
    width: 350,
  },
  map: {
    height: 350,
    width: 350,
  },
  pin:{
    width: 10,
    height: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  }
});