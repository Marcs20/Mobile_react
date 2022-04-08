/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Vagas Abertas</Text>
        <ScrollView>
          <View style={styles.box}>
          <Text style={styles.titulovaga}>Desenvolvedor Backend</Text>
          <Text style={styles.texto1}>Salário: R$ 3000,00</Text>
          <Text style={styles.texto1}>Descrição:</Text>
          <Text style={styles.texto}>Ter conhecimentos básicos em Java, utilização de spring-boot como framework, desenvolver estruturas de código bem organizadas, ter conhecimentos em php é desejável</Text>
          <Text style={styles.texto1}>Contato:</Text>
          <Text style={styles.texto}>TECCOM@companytec.com</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.titulovaga}>Engenheiro de dados</Text>
          <Text style={styles.texto1}>Salário: R$ 5000</Text>
          <Text style={styles.texto1}>Descrição:</Text>
          <Text style={styles.texto}>Trabalho para home-office, possuir experiência com Java, C++, C# e boas práticas com desenvimento de código</Text>
          <Text style={styles.texto1}>Contato:</Text>
          <Text style={styles.texto}>dev-side@devside.com</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.titulovaga}>Suporte para redes</Text>
          <Text style={styles.texto1}>Salário: R$ 3000</Text>
          <Text style={styles.texto1}>Descrição:</Text>
          <Text style={styles.texto}>Descrição: não é necessário experiêcia, ter cursado técnico ou superior, possuir conhecimentos básicos em redes.</Text>
          <Text style={styles.texto1}>Contato:</Text>
          <Text style={styles.texto}>informaticanew@newinfo.com</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.titulovaga}>Front-end HTML e Javascript</Text>
          <Text style={styles.texto1}>Salário: R$ 2800</Text>
          <Text style={styles.texto1}>Descrição:</Text>
          <Text style={styles.texto}> Desenvolver páginas bem estruturadas, código bem organizados, boas práticas em códifcação, conhecimento básico em Git e Github. Conhecmentos básicos Javascript, HTML, ter PHP no currículo é desejável</Text>
          <Text style={styles.texto1}>Contato:</Text>
          <Text style={styles.texto}>frontcore@coreeasy.com</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    borderWidth: 1,
    marginBottom: 10
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    marginBottom: 20
  },
  titulovaga:{
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
  },
  texto1:{
    fontSize: 18,
    color: 'black',
    marginTop: 15,
    fontWeight: 'bold'
  },
  texto:{
    fontSize: 18,
    color: 'black',
    marginTop: 15
  }
})
 
export default App;