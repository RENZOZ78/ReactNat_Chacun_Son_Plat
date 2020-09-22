import React from 'react'
import { View, text, Stylesheet, Image}  from "react-native"

const Image = () => {
    return (
        <View style={styles.image1}>
            <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
  style = {{ width: 200, height: 200 }}
  />
        </View>
    )
}