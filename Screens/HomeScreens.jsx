
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View,Button } from "react-native"



const HomeScreen = (props) => {
	const [prenom, setPrenom] = useState("")

	const updatePrenom = text => {
		setPrenom(text)
	}

	return (
		<>
			<View
				style={{
					backgroundColor: "#000",
				}}
			>
				<Text style={styles.colorRed}>Welcome {prenom} !</Text>
			</View>
			<View>
				<Text>Renseigne ton prénom:</Text>
				<TextInput onChangeText={updatePrenom} value={prenom} />
			</View>
            <View>
                <Button title="Voir mon profil"
                onPress={() => props.navigation.
                navigate("Profile")} />
            </View>
			
			
            
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	colorRed: {
		color: "#F00",
		fontSize: 32,
	}
})

export default HomeScreen