import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Comp(props) {
    return (
        <View style={styles.Todo}>
            <Text style={styles.Text}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Todo: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#333a',
    },
    Text: {
        color: 'white',
        fontSize: 20,
    }
});