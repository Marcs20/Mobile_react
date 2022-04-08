/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valorMoeda: 0,
      resultado: 0,
      mostraResultado: 0,
      moeda1: 0,
      moeda1opc: [
        {nome: 'Real'},
        {nome: 'Dollar'},
        {nome: 'Euro'},
      ],
      moeda2: 0,
      moeda2opc: [
        {nome: 'Real', dollar: 0.21,  euro: 0.19 },
        {nome: 'Dollar', euro:  0.91, real: 4.66 },
        {nome: 'Euro', dollar: 1.10 , real: 5.15 },
      ],
    };
    
 
    this.calcular = this.calcular.bind(this);

    this.getValor = this.getValor.bind(this);
  };
  getValor(valor){
    this.setState({valorMoeda: valor});
  };
  calcular(){
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Real' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Escolha moedas diferentes')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].real
      }
    }
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Dollar' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Escolha moedas diferentes')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].dollar
      }
    }
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Euro' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Escolha moedas diferentes')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].euro
      }
    }
    this.setState({
      exibirResultado: this.state.resultado = resultado,
    });
  }
  



 render(){
 
  let moeda1Item = this.state.moeda1opc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
  let moeda2Item = this.state.moeda2opc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo1}>Conversor de Moedas</Text>
      <Text style={styles.titulo}>Dólar, Real e Euro</Text>
      <Text style={styles.titulo3}>Valor:</Text>
      <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder="Digite o Valor"
      onChangeText={this.getValor}
      />
      <Text style={styles.tituloinput}>De:</Text>
      <Picker selectedValue={this.state.moeda1}
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda1: itemValue}) }
      >
        
        {moeda1Item}
      </Picker>
      <Text style={styles.tituloinput}>Para:</Text>
      <Picker selectedValue={this.state.moeda2}
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda2: itemValue}) }
      >
        
        {moeda2Item}
      </Picker>

      <Button title="Converter" onPress={this.calcular} />
      <Text style={styles.titulodados}>Resultado</Text>
      <Text style={styles.tituloinput}>{this.state.mostraResultado} </Text>
      </ScrollView>
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 200,
  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  },
  titulo1:{
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
  },
  titulo3:{
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  input:{
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  titulodados:{
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
}});