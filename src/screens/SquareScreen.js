import React, {useState} from "react";
import { Text, StyleSheet , View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
     
    const ColorIncrement = 15;
    const setColor = (color, change) => {
        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
        }
    }
    return (
    <View> 
        <ColorCounter 
            color="Red" 
            onIncrease={()=> setColor("red" , ColorIncrement) } 
            onDecrease={()=> setColor("red" , -1*ColorIncrement) }
        />
        <ColorCounter 
            color="Green" 
            onIncrease={()=> setColor("green" , ColorIncrement) } 
            onDecrease={()=> setColor("green" , -1 * ColorIncrement) }
        />
        <ColorCounter 
            color="Blue" 
            onIncrease={()=> setColor("blue" , ColorIncrement) } 
            onDecrease={()=> setColor("blue" , -1 * ColorIncrement) }
        />
         <View style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red},${green},${blue})`
         }}/>
    </View>
    )   
}

const styles = StyleSheet.create({

})

export default SquareScreen;