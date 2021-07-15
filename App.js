import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Input from './src/Input'
import List from './src/List'


export default function App() {
	const [items, setItems] = useState([])
	const Todos = ["tt"]
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style={{ width: 'auto', height: '100%' }}>
				<List items={items}></List>
				<Input items={[items, setItems]}></Input>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%'
	},
});