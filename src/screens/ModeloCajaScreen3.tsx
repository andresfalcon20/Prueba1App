import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ModeloCajaScreen3 = () => {
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
    justifyContent: "center",
    },
    boxBlue: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderWidth: 10,
        borderColor: "white",
        alignSelf: "flex-end"
    },
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: "#eea211",
        borderWidth: 10,
        borderColor: "white",
    },
    boxRed: {
        width: 100,
        height: 100,
        backgroundColor: "red",  
        borderWidth: 10,
        borderColor: "white",
        left: "40%"
    }
})