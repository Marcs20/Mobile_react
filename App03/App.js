import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { res: 0, n: 0, n2: 0};
    this.calcula = this.calcula.bind(this);
  }

  calcula(){
    this.setState({
      res: this.state.n * this.state.n2
    })
  }

  render(){

    return(
      <View style={style.container}>

        <Text style={style.titulo}>
          Multiplicador de Números
        </Text>

        <TextInput style={style.input} placeholder="Digite um número" onChangeText={n => this.setState({n})}/>
        <TextInput style={style.input} placeholder="Digite um número" onChangeText={n2 => this.setState({n2})}/>

        <Pressable onPress={() => this.calcula()}><Text style={style.texto}>Calcular</Text></Pressable>

        <Text style={style.textoRes}>
          {'Resultado: ' + this.state.res}
        </Text>
      </View>
    );
  }

}

const style = StyleSheet.create({
  container:
    { flex: 1, marginTop: 100},
    area: {marginTop: 200},
    input:
    { height: 45, borderWidth: 1, borderColor: '#222', margin: 10, margin: 20,
    fontSize: 20, padding: 10, }, 
    titulo:{alignSelf: 'center', color: 'orange', fontSize: 30, margin: 20},
    texto:{ textAlign: 'center',fontSize: 30, color: 'pink', borderWidth: 1, borderRadius: 5, width: 200,
     alignSelf: 'center'},
    textoRes:{ textAlign: 'center',fontSize: 30, color: 'green', alignSelf: 'center',
      marginTop: 50, textDecorationLine: 'underline'},
    textoBotao:{ textAlign: 'center', textAlignVertical: 'center', height: 45, fontSize: 16, fontSize: 30,
    fontWeight: 'bold' }

})

export default App;