import React from "react";
import { ImageBackground, StyleSheet, TextInput, Button , Text, View , Image} from "react-native";

export default class Description extends React.Component{

    constructor(props) {
        super(props);       
    }

    render(){

        const {item} = this.props;
    
        return(          
            <View >
              <Text style={styles.description}>{item.description}</Text>
            </View>        
        )
    }
}

const styles = StyleSheet.create({ 
    description : {
        fontSize: 15,   
        fontFamily :"fantasy",    
        marginHorizontal : 18,
      },
});



