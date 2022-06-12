import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


import api from './src/services/api';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cep: '',
      dados: '',
      loading: true
    }
    this.salvaCEP = this.salvaCEP.bind(this);
  }

  async componentDidUpdate() {
      const cep = this.state.cep;
      const response = await api.get('/'+cep+'/json/');
      this.setState({
        dados: response.data,
        loading: false
      });
  }

  salvaCEP(ncep){
    this.setState({
      cep: ncep
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>CEP x Endereço</Text> 

        <TextInput style={styles.input} placeholder='Informe o CEP' onChangeText={this.salvaCEP} maxLength={8}/>

        <Text style={styles.dados}>
            CEP: {this.state.dados.cep}
          </Text>
          <Text style={styles.dados}>
          Logradouro: {this.state.dados.logradouro}
          </Text>
          <Text style={styles.dados}>
          Bairro: {this.state.dados.bairro}
          </Text>
          <Text style={styles.dados}>
          Cidade: {this.state.dados.localidade}
          </Text>
          <Text style={styles.dados}>
          Estado: {this.state.dados.uf}
          </Text>
      </View>
    );
}
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
  },
  input:{
    backgroundColor: '#acacac',
    textAlign: 'center',
    color: '#fff',
  },
  dados:{
    marginTop: 20
  },
});

export default App;