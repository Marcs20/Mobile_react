import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Switch} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
export default class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      dark: false,
      tamanho: false,
      claro: '',
      textoPequeno: ''
    };
 
    this.gravaDark = this.gravaDark.bind(this);
    this.gravaTamanho = this.gravaTamanho.bind(this);
  }
 
  async componentDidMount(){
    await AsyncStorage.getItem('claro').then((value)=> {
      this.setState({claro: value});
    })

    await AsyncStorage.getItem('textoPequeno').then((value)=> {
      this.setState({textoPequeno: value});
    })
  }
 
  async componentDidUpdate(_, prevState){
    const claro = this.state.claro;
    const textoPequeno = this.state.textoPequeno;
 
    if(prevState !== claro){
      await AsyncStorage.setItem('claro', claro);
    }

    if(prevState !== textoPequeno){
      await AsyncStorage.setItem('textoPequeno', textoPequeno);
    }
  }
 
  gravaDark(valor){
    this.setState({
      dark: valor,
      claro: this.state.dark
    });
  }

  gravaTamanho(valor){
    this.setState({
      tamanho: valor,
      textoPequeno: this.state.tamanho
    });
  }
 
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Frases</Text>
      <View>
          <Text>Dia</Text>
          <Switch thumbColor='black' value={this.state.dark}
          onValueChange={(valorSwitch) => this.gravaDark(valorSwitch)}/>
                  
          <Text>Pequeno</Text>
          <Switch thumbColor='black' value={this.state.tamanho}
          onValueChange={(valorSwitch) => this.gravaTamanho(valorSwitch)}/>
        </View>
        <Text style={[styles.texto, this.state.textoPequeno == 'false' || this.state.textoPequeno == false ? styles.textoGrande : styles.textoPequeno, this.state.claro == 'false' || this.state.claro == false ? styles.temaEscuro : styles.temaClaro]}>
        “A vingança nunca é plena, mata a alma e envenena”
        (Seu Madruga)
        </Text>
      </View>    
    );
 
  }
 
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  titulo:{
    fontSize: 28,
    textAlign: 'center',
    color: '#000000',
  },
  textoPequeno:{
    fontSize: 15
  },
  textoGrande:{
    fontSize: 30
  },
  temaClaro:{
    backgroundColor: '#fff',
    color: '#000'
  },
  temaEscuro:{
    backgroundColor: '#000',
    color: '#fff'
  },
});
