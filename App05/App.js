import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { res: '', peso: 0, altura: 0, total: 0};
    this.calcula = this.calcula.bind(this);
  }

  calcula(){
    //this.setState({altura: this.state.altura / 100})   
    this.state.total = this.state.peso / (this.state.altura * this.state.altura)
    if(this.state.total <= 18.5){
      this.setState({res: 'Abaixo do Peso!'})
    }
    else if (this.state.total >= 18.5 && this.state.total <= 24.9){
      this.setState({res: 'Normal!'})
    }
    else if (this.state.total >= 25.0 && this.state.total <= 29.9){
      this.setState({res: 'Sobrepeso!'})
    }
    else if (this.state.total >= 30.0 && this.state.total <= 34.9){
      this.setState({res: 'Obesidade Grau I!'})
    }
    else if (this.state.total >= 35.0 && this.state.total <= 39.9){
      this.setState({res: 'Obesidade Grau II!'})
    }
    else if (this.state.total >= 40.0){
      this.setState({res: 'Obesidade Grau III ou Mórbida!'})
    }
    else {
      this.setState({res: 'ERRO'})
    }
  }

  render(){

    return(
      <View style={style.container}>

        <Text style={style.titulo}>
          Cálculo do IMC
        </Text>

        <Imagem/>
        
        <TextInput style={style.input} placeholder="Peso" onChangeText={peso => this.setState({peso})}/>
        <TextInput style={style.input} placeholder="Altura" onChangeText={altura => this.setState({altura})}/>

        <Pressable onPress={() => this.calcula()}><Text style={style.texto}>Verificar</Text></Pressable>

        <Text style={style.textoRes}>
          {'Classificação: ' + this.state.res}
        </Text>
      </View>
    );
  }

}


class Imagem extends Component{
  render(){
    let uri = 'https://www.lucianaspina.com.br/wp-content/uploads/2018/05/IMC.jpg'
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
    texto:{ textAlign: 'center',fontSize: 30, color: 'black', borderWidth: 1, borderRadius: 5, width: 200,
     alignSelf: 'center'},
    textoRes:{ textAlign: 'center',fontSize: 25, color: 'red', alignSelf: 'center',
      marginTop: 50, textDecorationLine: 'underline'},
    textoBotao:{ textAlign: 'center', textAlignVertical: 'center', height: 45, fontSize: 16, fontSize: 30,
    fontWeight: 'bold' },
    img:{width: 300, height: 200, alignSelf: 'center'}

})

export default App;