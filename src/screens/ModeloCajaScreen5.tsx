import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ModeloCajaScreen5 = () => {
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
    marginTop:40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10
    

    },
    boxBlue: {

        width: "30%",
        height: "100%",
        backgroundColor: "blue",
        borderWidth: 10,
        borderColor: "white",
        
    },
    boxOrange: {
        width: "30%",       
        height: "100%",
        backgroundColor: "#eea211",
        borderWidth: 10,
        borderColor: "white",


        
    },
    boxRed: {


        width: "30%",        
        height: "100%",
        backgroundColor: "red",  
        borderWidth: 10,
        borderColor: "white",
        

       
    }
})