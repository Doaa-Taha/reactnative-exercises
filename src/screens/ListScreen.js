import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "friend #1", age: 20},
        {name: "friend #2", age: 21},
        {name: "friend #3", age: 22},
        {name: "friend #4", age: 23},
        {name: "friend #5", age: 24},
    ]
    return <FlatList data={friends} 
                    keyExtractor={f => f.name}
                    renderItem={({item})=>{
                        return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>
                    }}/>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
export default ListScreen;