import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={ styles.text }>Hi, there</Text>
      <Button 
        style={styles.button}
        title="Go to components demo"
        onPress={ () => navigation.navigate('Components')}/>
        <TouchableOpacity style={styles.div} onPress={ () => navigation.navigate('List')}>
          <Text>Go to list demo</Text>
          <Text>Go to list demo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('Images')}>
          <Text>Go to image demo</Text>
        </TouchableOpacity>
        <Button title="Go to color demo"  
                style={styles.button}
                onPress={ () => navigation.navigate('Color')}/>
        <Button title="Go to square scren demo"  style={styles.button}
                onPress={ () => navigation.navigate('Square')}/>
        <Button title="Go to Textinput screen demo" style={styles.button}
                onPress={ () => navigation.navigate('Text')}/>


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  div: {
    backgroundColor: "yellow",
    textAlign: "center",
  },
  
});

export default HomeScreen;
