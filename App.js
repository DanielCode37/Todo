import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import List from './src/List'


export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style={{ width: 'auto', height: '100%' }}>
				<List></List>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%'
	},
});