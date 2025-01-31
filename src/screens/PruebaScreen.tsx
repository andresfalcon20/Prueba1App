import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const PruebaScreen = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const [pares, setPares] = useState("")
    
    const [impares, setImpares] = useState ("")

    const clasificarNumeros = () => {
        let paresString = "";
        let imparesString = "";

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                paresString += numeros[i] + ", ";
            } else {
                imparesString += numeros[i] + ", ";
            }
        }

        setPares(paresString);
        setImpares(imparesString);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BIENVENIDO</Text>
            <Text style={styles.vector}>Vector = {numeros}</Text>

            <TouchableOpacity style={styles.boton} onPress={clasificarNumeros}>
                <Text style={styles.botonText}>CLASIFICAR</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>Pares: {pares}</Text>
            <Text style={styles.resultados}>Impares: {impares}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20, 
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        color: "white",
        marginBottom: 10,
    },
    vector: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        marginBottom: 20,
    },
    boton: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    botonText: {
        fontSize: 20,
        color: "black",
    },
    resultados: {
        fontSize: 20,
        color: "white",
        marginTop: 10,
    },
})