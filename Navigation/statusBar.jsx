import React from 'react'
import { FlatList, View, TextInput, Button, StyleSheet,Text } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements';
// import data from '../Helpers/FarmersData.js'
// import FarmerItem from './FarmerItem'
import { registerRootComponent } from 'expo';

// return data.filter(function (e){return e.City == text}).map(element => <FarmerItem farmer={element} key={element.id} /> );

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          farmers: [],
          searchedText: "" ,
          data:[{
            name:'a',
            city:'ABC'
          },{
            name:'b',
            city:'WOW'
          }
          ],
          dataShown:[{
            name:'a',
            city:'ABC'
          },{
            name:'b',
            city:'WOW'
          }]
        }
    }

    _searchTextInputChanged = (text) => {

        let newDataF = [];
        this.state.data.map((e) => {
          if(e.city.toLowerCase() == text.toLowerCase())
          {
            newDataF.push(e)
          }
        })


        this.setState({ searchedText: text, dataShown:newDataF })
    }


    render() {

        return (
            <View style={{marginTop:100}} >
                <TextInput onChangeText={this._searchTextInputChanged} placeholder='Nom du maraicher'/>
                <Button title='Rechercher' onPress={() => {this._loadFarmer()}}/>
                {this.state.dataShown.map(element => <Text>{element.city}</Text> )} 

            </View>
        );
    }
}

export default statusBar