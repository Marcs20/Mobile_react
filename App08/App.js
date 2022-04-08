/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>
        <ScrollView horizontal={true}>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://quadrinheiros.files.wordpress.com/2013/03/capabatmanocavaleirodastrevas.jpg?w=445&h=654'}}
          style={styles.imgBox}
        />
        <Text style={styles.tituloprod}>HQ Batman O Cavaleiro das Trevas</Text>
        <Text style={styles.priceBox}> R$ 60,00</Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://a-static.mlcdn.com.br/618x463/livro-o-cortico/livrariascuritiba1/lv339345/a4c7ca0548b6def149e25989333e37fe.jpg'}}
          style={styles.imgBox}
        />
        <Text style={styles.tituloprod}>Livro O cortiço</Text>
        <Text style={styles.priceBox}> R$ 50,00</Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/710xFWoaKML._AC_SL1500_.jpg'}}
          style={styles.imgBox}
        />
        <Text style={styles.tituloprod}>Relógio smartwatch</Text>
        <Text style={styles.priceBox}> R$ 350,00</Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/715CvlGhaLL._AC_SL1500_.jpg'}}
          style={styles.imgBox}
        />
        <Text style={styles.tituloprod}>Cartão de memória</Text>
        <Text style={styles.priceBox}> R$ 120,00</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
  },
  priceBox:{
    textAlign: 'center',
    fontSize: 30,
    color: 'green'
  },
  imgBox:{
    height: 300,
    width: 200,
    alignSelf: 'center',
    marginLeft: 50,
    marginRight: 50
  },
  titulo:{
    textAlign: 'center',
    fontSize: 40,
    color: 'red',
    marginBottom: 20
  },
  tituloprod:{
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
  },
})
 
export default App;