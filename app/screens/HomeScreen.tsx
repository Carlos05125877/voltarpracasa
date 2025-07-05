
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
        <Header title="Dentro da Zona Segura"/>
        <View style={styles.areaMapa}>
        <Mapa />
        </View>
        <View style={styles.areaSelect}>
          <Select />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    marginTop: 40,
    flexDirection: 'column',
  },
  areaMapa: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaSelect: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});