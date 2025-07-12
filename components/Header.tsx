import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";



const Header = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.Header} >
            <View style={styles.side}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <Feather name="menu" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.side} />
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
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 40,
        backgroundColor: "#3BB985",
        marginHorizontal: 8,
    },
    iconButton: {
        padding: 8,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Alumni Sans SC',
        fontWeight: '700',
        color: '#ffffff',
    },
});

export default Header;