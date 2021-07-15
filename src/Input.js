import { StyleSheet, View, Button, TextInput } from 'react-native';
import React from 'react';

export default function Input(props) {
    const [items, setItems] = props.items;

    return (
        <View style={styles.parent}>
            <TextInput style={styles.input} placeholder="Enter a Todo" placeholderTextColor='white'></TextInput>
            <Button style={styles.button} title='Test' onPress={press.bind(this, setItems)} />
        </View>
    )
}

function press(setItems) {
    setItems("tt")
    alert();
}

const styles = StyleSheet.create({
    input: {
        height: '100%',
        width: '100%',
        color: 'white',
        flex: 4,
        fontSize: 20,
        backgroundColor: '#333a',
        borderRadius: 5
    },
    button: {
        borderRadius: 30,
        flex: 1,
        justifyContent: 'center',
    },
    parent: {
        position: 'relative',
        bottom: 15,
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        height: '7%',
        paddingHorizontal: 10,
    }
});