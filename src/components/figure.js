import React from "react";
import { ImageBackground, StyleSheet, TextInput, Button , Text, View , Image} from "react-native";

export default class Figure extends React.Component{

    constructor(props) {
        super(props);       
    }

    render(){

        const {item} = this.props;
    
        return(          
            <View >
              <Image style={styles.img} resizeMode="cover" source={item.img}/>
              <Text style={styles.caption}>{item.caption}</Text>
            </View>        
        )
    }
}

const styles = StyleSheet.create({ 
      img : {
        width : 250,
        height : 250,
        borderRadius : 10,
        itemAlign: "center",
        marginTop : 20,
        marginLeft : 60,     
      },
      buttonBack : {
        marginVertical : 10,
      },
      caption : {
        textAlign : "center",
        fontSize: 10
      }
});



