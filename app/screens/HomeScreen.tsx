
import InfoPerfil from '@/components/InfoPerfil';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Header from '../../components/Header';
import Mapa from '../../components/mapa';
import Select from '../../components/SelectHome';

export default function HomeScreen() {



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.areaMapa}>
        <Mapa />
        </View>
        <View style={styles.areaSelect}>
          <Select />
        </View>
        <View >
          <InfoPerfil />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    marginTop: 20,
    flexDirection: 'column',
  },
  areaMapa: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaSelect: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});