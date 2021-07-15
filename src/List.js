import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TODO from './TODO'


export default function List(props) {
    return (
        <ScrollView style={styles.List}>
            {props.items.map(item => { return <TODO>{item}</TODO> })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    List: {
        position: 'absolute',
        top: '5%',
        height: '80%',
        width: '100%'
    }
})