import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ModeloCajaScreen1 = () => {
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
        marginTop: 50
    },
    boxBlue: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        alignSelf: "flex-end",
        borderWidth: 10,
        borderColor: "white",
        position: "relative",
        flex: 1,
    },
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: "#eea211",
        borderWidth: 10,
        borderColor: "white",
        flex: 9,
        alignSelf: "flex-end"
    },
    boxRed: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderWidth: 10,
        borderColor: "white",
        flex: 1,
        alignSelf: "flex-end",
    }
})