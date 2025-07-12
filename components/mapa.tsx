import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Mapbox from '@rnmapbox/maps';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <Image source={require('../assets/images/profile.jpg')} style={styles.pin}/>
          </Mapbox.PointAnnotation>
        </Mapbox.MapView>
        <TouchableOpacity style={styles.Rota}>
          <MaterialCommunityIcons name="navigation" size={24} color="#1056D9" />
          <Text style={styles.RotaTxt}>Iniciar rota até Dona Maria</Text>
        </TouchableOpacity>
          
      </View>
    </View>
  );
}

export default Mapa;

const styles = StyleSheet.create({
  page: {

    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',

    height: 420,
    width: 350,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

  },
  map: {
    height: 350,
    width: 350,
  },
  pin:{
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  Rota: {
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 300,
    padding: 2,
    backgroundColor: '#1056d929',
    borderRadius: 10,
  },
  RotaTxt: {
    fontSize: 16,
    fontFamily: 'Alumni Sans SC',
    color: '#1056D9',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});