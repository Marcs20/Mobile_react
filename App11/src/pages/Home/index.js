import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default function Home(){
  const navigation = useNavigation();
 
  let state = {
    nome: '',
    idade: '',
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
  


function confirmar(){
    navigation.navigate('Dados', state);
}


function pegaNome(texto){
  state.nome = texto;
};
function pegaIdade(texto){
  state.idade = texto;
};

function pegarSexo(valor){
  state.sexo = valor;
}

function pegarEscolaridade(valor){
  state.escolaridade = valor;
}


  let sexoItem = state.sexoopc.map( (valor, chave) => {
  return <Picker.Item key={chave} value={chave} label={valor.nome} />
})
let escolaridadeItem = state.escolaridadeopc.map( (valor, chave) => {
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
    onChangeText={pegaNome}
    />
    <Text style={styles.tituloinput}>Idade:</Text>
    <TextInput
    keyboardType="numeric"
    style={styles.input}
    placeholder="Digite sua Idade"
    onChangeText={pegaIdade}
    />
    <Text style={styles.tituloinput}>Sexo:</Text>
    <Picker selectedValue={state.sexo}
    onValueChange={ (itemValue, itemIndex) => pegarSexo(itemValue) }
    >
      {sexoItem}
    </Picker>
    <Text style={styles.tituloinput}>Escolaridade:</Text>
    <Picker selectedValue={state.escolaridade}
    onValueChange={ (itemValue, itemIndex) => pegarEscolaridade(itemValue) }
    >
      
      {escolaridadeItem}
    </Picker>
    <Text style={styles.tituloinput}>Escolha o Limite:</Text>
    <Slider
    minimumValue={0}
    maximumValue={1000}
    onValueChange={ (valorSelecionado) => state.valor = valorSelecionado}
    value={state.valor}
    step={1}
    minimumTrackTintColor='red'
    maximumTrackTintColor='green'
    thumbTintColor='purple'
  />
  <Text style={{textAlign: 'center', fontSize: 20}}>
      {state.valor}
    </Text>
  <Text style={styles.tituloinput}>Brasileiro?</Text>
  <Switch
    style={styles.switch}
    value={state.brasileiro}
    onValueChange={ (valorSwitch) => state.brasileiro = valorSwitch}
    />




    <Button title="Confirmar" onPress={confirmar} />
    </ScrollView>
  </View>
 );
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
