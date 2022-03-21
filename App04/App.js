import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { res: '', alc: 0, gas: 0, total: 0};
    this.calcula = this.calcula.bind(this);
  }

  calcula(){   
      if (this.state.alc/this.state.gas < 0.7){
        this.setState({res: 'Alcool'})
      }
      else if ((this.state.alc/this.state.gas > 0.7)){
        this.setState({res: 'Gasosa'})
      }
      else {
        this.setState({res: 'Empate!!'})
      }
  }

  render(){

    return(
      <View style={style.container}>

        <Text style={style.titulo}>
          Alcool ou Gasolina
        </Text>

        <Imagem/>
        
        <TextInput style={style.input} placeholder="Valor do Alcool" onChangeText={alc => this.setState({alc})}/>
        <TextInput style={style.input} placeholder="Valor da Gasolina" onChangeText={gas => this.setState({gas})}/>

        <Pressable onPress={() => this.calcula()}><Text style={style.texto}>Verificar</Text></Pressable>

        <Text style={style.textoRes}>
          {'Resultado: ' + this.state.res}
        </Text>
      </View>
    );
  }

}


class Imagem extends Component{
  render(){
    let uri = 'https://www.brasilpostos.com.br/wp-content/uploads/2013/11/gasolina-aditivada-comum-premium.png'
    return(
      <View>
        <Image source={{uri: uri}} style={style.img}/>
      </View>
    )
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
    textoRes:{ textAlign: 'center',fontSize: 30, color: 'red', alignSelf: 'center',
      marginTop: 50, textDecorationLine: 'underline'},
    textoBotao:{ textAlign: 'center', textAlignVertical: 'center', height: 45, fontSize: 16, fontSize: 30,
    fontWeight: 'bold' },
    img:{width: 150, height: 150, alignSelf: 'center'}

})

export default App;