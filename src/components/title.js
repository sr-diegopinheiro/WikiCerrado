import React from "react";
import { ImageBackground, StyleSheet, TextInput, Button , Text, View , Image} from "react-native";

export default class Title extends React.Component{

    constructor(props) {
        super(props);       
    }

    render(){

        const {item} = this.props;
    
        return(          
            <View >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.scientificName}>{item.scientificName}</Text>
            </View>        
        )
    }
}

const styles = StyleSheet.create({ 
  name : {
    color: "#FF8C00",
    fontSize: 20,
    fontFamily :"fantasy",
    fontWeight: "bold",
    marginLeft : 15,
    marginTop : 15,
  },
  scientificName : {
    color: "#FF8C00",
    fontSize: 14,
    fontStyle : "italic",
    fontFamily :"fantasy", 
    marginLeft : 15,
    marginBottom : 30,
  }
});



