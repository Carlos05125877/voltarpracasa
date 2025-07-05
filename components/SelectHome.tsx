import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const Select = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <Feather name="clock" size={40} color="#1056D9" />
                    <Text style={styles.title}>Histórico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <FontAwesome5 name="user-alt" size={40} color="#1056D9" />
                    <Text style={styles.title}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <Entypo name="help-with-circle" size={40} color="#1056D9" />
                    <Text style={styles.title}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <AntDesign name="edit" size={40} color="#1056D9" />
                    <Text style={styles.title}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <Entypo name="map" size={40} color="#1056D9" />
                    <Text style={styles.title}>Rota</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    Header: {
        backgroundColor: "#1056D9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 50,
        paddingHorizontal: 16,
    },
    side: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    iconButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Alumni Sans SC',
        color: '#000000',
    },
});

export default Select;