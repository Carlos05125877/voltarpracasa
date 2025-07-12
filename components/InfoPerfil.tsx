import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";



const InfoPerfil = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/profile.jpg')} style={styles.Perfil}/>
            <View style={{ marginLeft: 10, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Dona Maria</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Alzheimer</Text>
            </View>
            <View style={styles.battery}>
                <View style={styles.batteryIcon}>
                    <Ionicons name="battery-full" size={40} color="black" />
                </View>
                <View style={styles.batteryText}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>100%</Text>
                    <Text style={{ fontSize: 12, color: '#666' }}>Bateria</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 350,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,  
        marginLeft: 'auto',
        marginRight: 'auto',  
        gap: 15,

    },
    Perfil: {
        padding: 5,
        width: 70,
        height: 70,
        borderRadius: 50 
    },
    battery: {
        marginLeft: 'auto',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",   
        gap: 5,
    },
    batteryIcon: {
        padding: 5,
    },
    batteryText: {  
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },

});

export default InfoPerfil;