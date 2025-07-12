import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const Select = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <Feather name="clock" size={30} color="#1056D9" />
                    <Text style={styles.title}>Histórico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Screens/HomeScreen')}>
                    <Ionicons name="shield-checkmark-sharp" size={30} color="#1056D9" />
                    <Text style={styles.title}>Zona Segura</Text>
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