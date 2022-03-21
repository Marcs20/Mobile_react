import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  
  constructor(props){ 
    super(props); 
    this.state = { numero: 0 }; 
    this.incrementa = this.incrementa.bind(this); 
  } 

  incrementa(){
    this.setState({
      numero: this.state.numero + 1
    })
  }

  decrementa(){
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render(){
    return(
    <View style={styles.area}>

      <Text style={styles.titulo}>
        Contador de Pessoas
      </Text>

      <Text style={styles.texto}>
        {this.state.numero}
      </Text>

      <Pressable style={styles.botaoIncre} onPress={() => this.incrementa()}>
        <Text style={styles.textoBotao}>
          +
        </Text>
      </Pressable>

      <Pressable style={styles.botaoDecre} onPress={() => this.decrementa()}>
        <Text style={styles.textoBotao}>
          -
        </Text>
      </Pressable>
      
    </View>
    );
  }
}

const styles = StyleSheet.create(
  { container:
    { flex: 1, },
    area: {marginTop: 200},
    input:
    { height: 45, borderWidth: 1, borderColor: '#222', margin: 10,
    fontSize: 20, padding: 10, }, 
    titulo:{alignSelf: 'center', color: 'orange', fontSize: 30, margin: 20},
    texto:{ textAlign: 'center',fontSize: 60, color: 'red', borderWidth: 1, borderRadius: 5, width: 200,
     alignSelf: 'center' },
    botaoIncre:{ width: 200, height: 50, margin: 20, backgroundColor: '#3ED823', alignSelf: 'center' },
    botaoDecre:{ width: 200, height: 50, margin: 20, backgroundColor: '#E6E015', alignSelf: 'center' }, 
    textoBotao:{ textAlign: 'center', textAlignVertical: 'center', height: 45, fontSize: 16, fontSize: 30,
    fontWeight: 'bold' }

  })

export default App;
