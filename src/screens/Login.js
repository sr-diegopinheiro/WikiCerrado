import React from "react";
import { ImageBackground, StyleSheet, TextInput, Button , Text, View } from "react-native";

const imageBackground = { uri: "https://cdn.pixabay.com/photo/2016/10/31/02/17/tree-1784750_1280.jpg" };


export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.loginBox}>
                        <Text style={styles.text}>WikiCerrado</Text>
                        <TextInput style={styles.textInput} keyboardType="email-address" placeholder={'E-Mail'} />
                        <TextInput style={styles.textInput} secureTextEntry={true} placeholder={'Senha'} />
                        <View style={styles.accessButton}>
                            <Button
                                title="Acessar" 
                                color = "#FF8C00"  
                                onPress={() => this.props.navigation.navigate("List", {screen: "List"})}                          
                            />
                        </View>                        
                    </View>               
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  loginBox:{
    backgroundColor: "#000000c0"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  accessButton:{
      marginHorizontal: 20,
      height : 60,
      marginVertical: 8,
      fontWeight: 700
  },
  text: {
    color: "white",
    fontSize: 42,
    fontFamily : "fantasy",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom : 10    
  },
  textInput: {
    borderColor: '#777777',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,1)',
  }
});



