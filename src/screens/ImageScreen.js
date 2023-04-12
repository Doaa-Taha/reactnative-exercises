import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetails from "../components/ImageDetails"

const ImageScreen = () => {
    return (
    <View>
        <Text>Hello</Text>
        <ImageDetails title="Forest" imageSource={require('../images/forest.jpg')} score={9}/>
        <ImageDetails title="Beach" imageSource={require('../images/beach.jpg')} score={10}/>
        <ImageDetails title="Mountain" imageSource={require('../images/mountain.jpg')} score={8}/>
    </View>)
}

const styles = StyleSheet.create({

})

export default ImageScreen;