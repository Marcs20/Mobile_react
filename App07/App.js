/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      exibirNome: '',
      idade: '',
      exibirIdade: '',
      sexo: 0,
      sexoopc: [
        {nome: 'Masculino'},
        {nome: 'Feminino'},
      ],
      escolaridade: 0,
      escolaridadeopc: [
        {nome: 'Ensino Médio'},
        {nome: 'Ensino Superior'},
        {nome: 'Pós-Graduação'},
        {nome: 'Mestrado'},
        {nome: 'Doutorado'},
      ],
      valor: 0,
      brasileiro: false
  
    };
    
 
    this.confirmar = this.confirmar.bind(this);

    this.pegaNome = this.pegaNome.bind(this);
    this.pegaIdade = this.pegaIdade.bind(this);
  };
  confirmar(){
    this.setState({
      exibirNome: this.state.nome,
      exibirIdade: this.state.idade,
      exibirSexo: this.state.sexoopc[this.state.sexo].nome,
      exibirEscolaridade: this.state.escolaridadeopc[this.state.escolaridade].nome,
      exibirLimite: this.state.valor.toFixed(0),
      exibirBrasileiro: (this.state.status) ? "Sim" : "Não"
    });
  }
  pegaNome(texto){
    this.setState({nome: texto});
  };
  pegaIdade(texto){
    this.setState({idade: texto});
  };
  



 render(){
 
  let sexoItem = this.state.sexoopc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
  let escolaridadeItem = this.state.escolaridadeopc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>Abertura de Conta</Text>
      <Text style={styles.tituloinput}>Nome Completo:</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite seu nome"
      onChangeText={this.pegaNome}
      />
      <Text style={styles.tituloinput}>Idade:</Text>
      <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder="Digite sua Idade"
      onChangeText={this.pegaIdade}
      />
      <Text style={styles.tituloinput}>Sexo:</Text>
      <Picker selectedValue={this.state.sexo}
      onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
        
        {sexoItem}
      </Picker>
      <Text style={styles.tituloinput}>Escolaridade:</Text>
      <Picker selectedValue={this.state.escolaridade}
      onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
      >
        
        {escolaridadeItem}
      </Picker>
      <Text style={styles.tituloinput}>Escolha o Limite:</Text>
      <Slider
      minimumValue={0}
      maximumValue={1000}
      onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
      step={1}
      minimumTrackTintColor='red'
      maximumTrackTintColor='green'
      thumbTintColor='purple'
    />
     <Text style={{textAlign: 'center', fontSize: 20}}>
      {this.state.valor.toFixed(0)}
    </Text>
    <Text style={styles.tituloinput}>Brasileiro?</Text>
    <Switch
      style={styles.switch}
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      />




      <Button title="Confirmar" onPress={this.confirmar} />
      <Text style={styles.titulodados}>Dados informados:</Text>
      <Text style={styles.tituloinput}>Nome: {this.state.exibirNome} </Text>
      <Text style={styles.tituloinput}>Idade: {this.state.exibirIdade} </Text>
      <Text style={styles.tituloinput}>Sexo: {this.state.exibirSexo}</Text>
      <Text style={styles.tituloinput}>Escolaridade: {this.state.exibirEscolaridade}</Text>
      <Text style={styles.tituloinput}>Limite: {this.state.exibirLimite}</Text>
      <Text style={styles.tituloinput}>Brasileiro: {this.state.exibirBrasileiro}</Text>
      </ScrollView>
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  },
  input:{
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  tituloinput:{
    fontSize: 18,
  },
  titulodados:{
    fontSize: 20,
    color: 'green',
  },
  switch:{
    marginRight: 360, 
  }
});
