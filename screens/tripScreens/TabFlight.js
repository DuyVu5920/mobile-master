import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function TabFlight() {
    return (<View style={styles.container}><TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Thêm chuyến bay</Text>
    </TouchableOpacity></View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    button: {
        backgroundColor: '#24BAEC',
        padding: 10,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})

export default TabFlight;