import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Button, TextInput } from 'react-native';
import TODO from './TODO'


export default function List(props) {
	let text = '';
	const [items, setItems] = useState(["items"]);

	const press = () => {
		text = '';
	}

	return (
		<>
			<ScrollView style={styles.List}>
				{items.map(item => { return <TODO>{item}</TODO> })}
			</ScrollView>
			<View style={styles.parent}>
				<TextInput style={styles.input} placeholder="Enter a Todo" placeholderTextColor='white' onChangeText={(val) => text = val}></TextInput>
				<Button style={styles.button} title='Test' onPress={press.bind(this)} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	List: {
		position: 'absolute',
		top: '5%',
		height: '80%',
		width: '100%'
	},
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