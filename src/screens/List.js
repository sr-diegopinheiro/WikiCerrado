import React, { Component } from "react";
import {Pressable, StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    title: "Fauna",
    data: [{name:"Cachorro-do-mato-vinagre",
            scientificName:"Speothos venaticus",
            description: "O cachorro-do-mato-vinagre ou apenas cachorro-vinagre é uma espécie de pequeno porte que possui corpo compacto e pernas e cauda curtas. Esses animais, que podem ser encontrados sozinhos ou em grupo, possuem uma dieta exclusivamente carnívora.",
            img: {uri: 'https://s3.static.brasilescola.uol.com.br/img/2019/01/cachorro-do-mato-vinagre.jpg'},
            caption : "O cachorro-do-mato-vinagre é uma espécie carnívora que pode ser encontrada em grupos."
          },           

            {name:"Ema",
            scientificName:"Rhea americana",
            description: "A ema é considerada a maior e mais pesada ave brasileira. É um animal onívoro que se alimenta de frutos, sementes, folhas, insetos e animais de pequeno porte, como rãs. Apesar de serem classificadas como aves, as emas não voam.",
            img: {uri: 'https://s2.static.brasilescola.uol.com.br/img/2019/01/ema.jpg'},
            caption : "A ema é uma ave que não voa"
          },
           
            
            {name:"Lobo-guará",
            scientificName:"Chrysocyon brachyurus",
            description: "O lobo-guará é um canídeo bastante típico do Cerrado, sendo considerado o maior canídeo da América do Sul. Apesar de grande, é um animal pouco agressivo. Entre os participantes de sua dieta, podemos citar alguns pequenos animais e frutos típicos do Cerrado, como a lobeira.",
            img: {uri: "https://s3.static.brasilescola.uol.com.br/img/2019/01/lobo-guara.jpg"},
            caption : "O lobo-guará é um animal pouco agressivo." 
          },

          {name:"Queixada",
            scientificName:"Tayassu pecari",
            description: "Queixada é um animal encontrado em grupos. Esses animais são mais ativos no começo da manhã e no fim da tarde. Sua alimentação é composta, principalmente, de frutos, apesar de se alimentarem também de insetos e minhocas.",
            img: {uri: "https://s5.static.brasilescola.uol.com.br/img/2019/01/queixada.jpg"},
            caption : "Queixada é um animal que se alimenta de frutos e de pequenos animais."
          },
          {name:"Seriema",
            scientificName:"Cariama cristata)",
            description: "A seriema é uma ave territorial de médio porte. Alimenta-se de insetos e pequenos vertebrados. Uma característica marcante da seriema é que ela prefere correr em vez de voar.",
            img: {uri: "https://s1.static.brasilescola.uol.com.br/img/2019/01/seriema.jpg"},
            caption : "A seriema é uma ave que prefere correr em vez de voar"
          },
          {name:"Suçuarana",
            scientificName:"Puma concolor",
            description: "A suçuarana é um animal que se destaca pelo seu tamanho, sendo classificado como o segundo maior felino das Américas, perdendo apenas para a onça-pintada. Esse animal, também conhecido como onça-parda, é carnívoro e apresenta hábito solitário, formando pares apenas no período de reprodução.",
            img: {uri: "https://s3.static.brasilescola.uol.com.br/img/2019/01/sucuarana.jpg"},
            caption : "A suçuarana é o segundo maior felino das Américas."
          },
          {name:"Tamanduá-bandeira",
            scientificName:"Myrmecophaga tridactyla",
            description: "O tamanduá-bandeira é um animal que apresenta longos pelos, membros fortes e focinho longo. Essa espécie é, geralmente, encontrada sozinha. Sua alimentação é constituída, principalmente, de cupins e formigas.",
            img: {uri: "https://s4.static.brasilescola.uol.com.br/img/2019/01/tamandua-bandeira(1).jpg"},
            caption : "O tamanduá-bandeira alimenta-se, principalmente, de formigas e cupins."
          },
          {name:"Veado-campeiro",
            scientificName:"Ozotoceros bezoarticus",
            description: "O veado-campeiro é um animal que vive, geralmente, em pequenos grupos. Alimenta-se de folhas, arbustos e flores, preferindo sempre aquelas porções mais fáceis de digerir.",
            img: {uri: "https://s3.static.brasilescola.uol.com.br/img/2019/01/veado-campeiro.jpg"},
            caption : "O veado campeiro é encontrado em pequenos grupos."
          }   
          ]
  },
  {
    title: "Flora",
    data: [{name:"Araticum",
            scientificName:"Annona crassiflora",
            description: "Essa planta possui frutos com alto valor nutritivo, que podem ser comidos in natura ou utilizados para fazer geleias, sorvetes e sucos. O fruto do araticum possui ótimo sabor e aroma.",
            img: {uri: 'https://s5.static.brasilescola.uol.com.br/img/2019/01/araticum.jpg'},
            caption : "O araticum apresenta um fruto muito apreciado." 
          },

            {name:"Baru",
            scientificName:"Dypteryx alata",
            description: "O baru é uma árvore frutífera nativa do Cerrado que apresenta grande importância na alimentação. Tanto a polpa quanto a amêndoa do baru podem ser consumidas, sendo essa última ingerida in natura ou torrada.",
            img: {uri: 'https://s3.static.brasilescola.uol.com.br/img/2019/01/baru.jpg'},
            caption : "A polpa e a amêndoa do baru são utilizadas na alimentação." 
          },

            {name:"Buriti",
            scientificName:"Mauritia flexuosa",
            description: "O buriti é uma espécie de palmeira que apresenta grande aplicação econômica. Suas folhas são usadas para artesanato, e seus frutos podem ser utilizados na alimentação e na fabricação do óleo de buriti, que possui valor medicinal.",
            img: {uri: 'https://s5.static.brasilescola.uol.com.br/img/2019/01/buriti.jpg'},
            caption : "Praticamente todas as partes do buriti podem ser utilizadas." 
          },
          {name:"Cajuzinho-do-cerrado",
            scientificName:"Anacardium humile",
            description: "Essa planta é nativa do Cerrado brasileiro e caracteriza-se pela presença de um pseudofruto (parte carnosa), que pode ser comido in natura ou ser usado para fazer doces, sorvetes e bebidas.",
            img: {uri: 'https://s2.static.brasilescola.uol.com.br/img/2019/01/cajuzinho-do-cerrado.jpg'},
            caption : "O cajuzinho pode ser utilizado na alimentação."
          },

            {name:"Ipê-amarelo-do-cerrado",
            scientificName:"Tabebuia aurea",
            description: "Os ipês são plantas características do Cerrado. Destacam-se pela beleza de suas flores, sendo, por isso, muito usadas no paisagismo. Além disso, apresentam uma madeira resistente, que pode ser usada na marcenaria.",
            img: {uri: 'https://s4.static.brasilescola.uol.com.br/img/2019/01/ipe-amarelo-do-cerrado.jpg'},
            caption : "O ipê é bastante utilizado no paisagismo." 
          },

            {name:"Jatobá",
            scientificName:"Hymenaea courbaril",
            description: "O jatobá é uma árvore que apresenta frutos em forma de vagens, cujas sementes são envoltas por uma espécie de farinha comestível.",
            img: {uri: 'https://s3.static.brasilescola.uol.com.br/img/2019/01/jatoba.jpg'},
            caption : "A farinha de jatobá é utilizada na alimentação." 
          },
          {name:"Lobeira",
            scientificName:"Solanum lycocarpuma",
            description: "A lobeira, uma planta bastante encontrada no Cerrado, apresenta frutos que servem de alimento para vários animais, como o lobo-guará.",
            img: {uri:'https://s5.static.brasilescola.uol.com.br/img/2019/01/lobeira.jpg'},
            caption : "Os frutos da lobeira servem de alimento para o lobo-guará." 
          },

          {name:"Mangabeira",
            scientificName:"Hancornia speciosa",
            description: "A palavra “mangaba” tem origem indígena e significa “coisa boa de comer”. Diante desse nome, fica claro que se trata de uma planta com frutos saborosos e muito consumidos.",
            img: {uri: 'https://s3.static.brasilescola.uol.com.br/img/2019/01/mangaba.jpg'},
            caption : "A mangaba é um fruto muito saboroso." 
          },

            {name:"Pequizeiro",
            scientificName:"Caryocar brasiliensis",
            description: "O pequizeiro é uma árvore que produz frutos conhecidos como pequi, utilizados na culinária. O óleo da polpa de pequi tem aplicações medicinais, além de ser utilizado na fabricação de cosméticos.",
            img: {uri: 'https://s4.static.brasilescola.uol.com.br/img/2019/01/pequi.jpg'},
            caption : "O fruto do pequizeiro pode utilizado na culinária e na fabricação de cosméticos." 
          }                  
          ]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {

  renderItem = ({item}) => {
    return (
      <Pressable onPress={() => this.props.navigation.navigate("Details", {screen: "Details", item: item})}>
           <Item title={item.name} />    
      </Pressable>      
    )
  };


  render() {
    return (
      <SafeAreaView style={styles.container}>
       
        <SectionList
          style={styles.sectionList}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={(item) => this.renderItem(item)}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}          
        />

        <View style={styles.accessButton}>
          <Button
            title="Voltar" 
            color = "#FF8C00"  
            onPress={() => this.props.navigation.navigate("Login", {screen: "Login"})}                          
          />
        </View>       
                  
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#FEB48B",
    borderRadius: 50,
    padding: 20,
    marginVertical: 8,
  
  },
  header: {
    fontSize: 32,
    fontWeight : "bold",
    fontFamily: "fantasy",
    backgroundColor: "none",
    marginBottom : 20,
  },
  title: {
    fontSize: 24
  },
  accessButton:{
    marginHorizontal: 10,
    height : 60,
    marginVertical: 3,
    fontWeight: 500
  },
  sectionList : {
    backgroundColor : "none",
    fontSize : 10,
  },

});

export default App;
