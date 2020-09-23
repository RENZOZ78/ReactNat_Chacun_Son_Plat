
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View,Button } from "react-native"



const HomeScreens =() => {
    return (
		<View style={{backgroundColor: "red"}}>
			<View styles={styles.container}>
				<View styles={styles.titre1}>
					<h1>A chacun son plat</h1>
				</View>
			<View styles={styles.barreDeRecherche}>
					
				<form action="" styles= {styles.formulaire} >
					<input styles={styles.champ} type="text" value="Faites votre recherche.)"/>
					<input styles={styles.bouton} type="button" value=" " />
						
				</form>
			</View>
			<View>
				<Text>
				<h2>Manger ce que vous</h2>
				</Text>
				<StatusBar style="auto" />
			</View>

			<View styles={styles.themes}>
			</View>
		  </View>

    )
}

export default HomeScreen