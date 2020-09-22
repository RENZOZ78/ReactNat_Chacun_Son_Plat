import React from 'react'
import { View, text, Stylesheet, Image}  from "react-native"



const PopularFood = () => {
    return (
        <View>
            <View style={styles.image1}>
                <img source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                    style = {{ width: 200, height: 200 }}
                    />
                
            </View>
            <View>
            <img source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
                    style = {{ width: 200, height: 200 }}
                    />
            </View>
        </View>
    )
}

export default PopularFood.jsx