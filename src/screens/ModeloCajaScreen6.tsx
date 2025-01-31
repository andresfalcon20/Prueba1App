import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ModeloCajaScreen6 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}> </View>
            <View style={styles.boxOrange}> </View>
            <View style={styles.boxRed}> </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bbc3ed",
        marginTop: 40,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingVertical: 10


    },
    boxBlue: {
        flex: 1,
        width: "100%",
        height: 100,
        backgroundColor: "blue",
        borderWidth: 10,
        borderColor: "white",

    },
    boxOrange: {
        flex: 1,
        width: "100%",
        height: 100,
        backgroundColor: "#eea211",
        borderWidth: 10,
        borderColor: "white",



    },
    boxRed: {
        flex: 2,
        width: "100%",
        height: 100,
        backgroundColor: "red",
        borderWidth: 10,
        borderColor: "white",



    }
})