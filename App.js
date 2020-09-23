import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./Screens/HomeScreens"; 
import PopularFood from "./Screens/PopularFood";
import BestFood from "./Screens/BestFood";

export default function App() {
  return (
    <View>
      <Homescreen />
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

          <PopularFood />
          <View styles={styles.blocPopularFood}>
              <View styles={styles.image1}>
                  <img source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                      style = {{ width: 200, height: 200 }}/>
              </View>             
          
              <View styles = {styles.image2}>
                  <img source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                  style = {{ width: 200, height: 200 }}
                  />
              </View>
          </View>
          <BestFood />
          <View styles={styles.blocBestFood}>
              <View styles={styles.image3}>
                  <img source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                      style = {{ width: 400, height: 300 }}/>
              </View>             
          </View>
         
      </View>     
    </View>
       );
      }

const Stack = createStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="HomeScreen" Screens={HomeScreen} />
				<Stack.Screen name="PopularFood" Screens={PopularFood} />				
			</Stack.Navigator>

		</NavigationContainer>
  )}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barreDeRecherche: {
    position: 'center',
     width: 900,
     borderRadius: 30,
      height: 200},

  formulaire:               {
        display:'inlineblock'},

  champ:       {
        width:600, height:35},

  bouton:       {
        // background: url(images/searchbar_button.png),
        width: 35,
        height: 35,
        padding: 0 },

  blocPopularFood: {
    display:'inlineblock',
  },

})
