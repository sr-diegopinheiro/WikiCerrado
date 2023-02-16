import React from "react";
import { ImageBackground, StyleSheet, TextInput, Button , Text, View , Image} from "react-native";
import Title from "../components/title";
import Description from "../components/description";
import Figure from "../components/figure";

export default class Details extends React.Component{
  
    render(){
      const {item} = this.props.route.params;

        return(
          <View>

            <Title item={item}></Title>
            <Description  item={item}></Description>                
            <Figure item={item}> </Figure>          
            <View style={styles.buttonBack}>
              <Button 
                title="Voltar" 
                color = "#FF8C00"  
                onPress={() => this.props.navigation.navigate("List", {screen: "List"})}                          
                />
            </View>           
           
          </View>           

        )
    }
}

const styles = StyleSheet.create({ 
  buttonBack : {
    marginVertical : 10,
  }
});



