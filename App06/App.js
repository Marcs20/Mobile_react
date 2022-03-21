import React from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { res: 0};
    this.gerar = this.gerar.bind(this);
  }

  gerar(){
    this.setState({res: Math.floor(Math.random()*10)})
    }

  render(){

    return(
      <View style={style.container}>

        <Text style={style.titulo}>
          Jogo do Nº aleatório
        </Text>

        <Imagem/>

        <Text style={style.textoLabel}>
          "Pense em um Nº de 0 a 10!"
        </Text>
        
        <Text style={style.textoRes}>
          {this.state.res}
        </Text>

        <Pressable style={style.botao} onPress={() => this.gerar()}><Text style={style.texto}>Descobrir</Text></Pressable>

        
      </View>
    );
  }

}


class Imagem extends Component{
  render(){
    let uri = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-Riddler-5.png'
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
    textoLabel:{alignSelf: 'center', color: 'black', fontSize: 25, margin: 20},
    texto:{ textAlign: 'center',fontSize: 30, color: 'white', alignSelf: 'center'},
    textoRes:{ textAlign: 'center',fontSize: 50, color: '#29A525', alignSelf: 'center',
      marginTop: 10, marginBottom: 20},
    botao:{backgroundColor: 'green',  borderWidth: 1, borderRadius: 5, width: 200, alignSelf: 'center'},
    img:{width: 300, height: 200, alignSelf: 'center'}

})

export default App;