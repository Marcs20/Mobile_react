import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export default function App () {
  
  const [moeda, setMoeda] = useState('');
  const [de, setDe] = useState(0);
  const [para, setPara] = useState(0);
  const [conversao, setConversao] = useState('');

  async function pegarValor(){
    try{
      
      if(de != para && de != '' && para != ''){

        if(para == 'BTC'){

          setPara(de);
          setDe('BTC');
        }
        
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
        
        if(response){
          let conversao = 0;
          
      
          if(de == para){
            conversao = moeda;
          }
          else{
            if(de == 'USD'){
              if(para == 'EUR'){
                conversao = moeda * response.data.USDEUR.ask;
              }
              else if(para == 'BRL'){
                conversao = moeda * response.data.USDBRL.ask;
              }
              else{
                conversao = moeda * (response.data.BTCUSD.ask);
              }
            }
      
            if(de == 'EUR'){
              if(para == 'USD'){
                conversao = moeda * response.data.EURUSD.ask;
              }
              else if(para == 'BRL'){
                conversao = moeda * response.data.EURBRL.ask;
              }
              else{
                conversao = moeda * (response.data.BTCEUR.ask);
              }
            }
      
            if(de == 'BRL'){
              if(para == 'USD'){
                conversao = moeda * response.data.BRLUSD.ask;
              }
              else if(para == 'EUR'){
                conversao = moeda * response.data.BRLEUR.ask;
              }
              else{
                conversao = moeda * (response.data.BTCBRL.ask);
              }
            
            }
            if(de == 'BTC'){
              if(para == 'USD'){
                conversao = moeda * response.data.BTCUSD.ask;
              }
              else if(para == 'EUR'){
                conversao = moeda *response.data.BTCEUR.ask;
              }
              else{
                conversao = moeda * response.data.BTCBRL.ask;
              }
            }
          }
          
          setConversao(conversao.toFixed(2));
        }
      }
      else{
        setConversao(moeda);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>Conversor de Moedas </Text>

      <Text style={styles.titulo2}>Valor</Text>
      <TextInput style={styles.input} placeholder='Digite o valor' value={moeda} onChangeText={value => setMoeda(value)}></TextInput>

      <Text style={styles.titulo2}>De</Text>
      <Picker style={styles.input} selectedValue={de} onValueChange={value => setDe(value)}>
        <Picker.Item value={''} label='Escolha uma moeda'/>
        <Picker.Item key={1} value={'USD'} label='Dólar'/>
        <Picker.Item key={2} value={'EUR'} label='Euro'/>
        <Picker.Item key={3} value={'BRL'} label='Real'/>
        <Picker.Item key={4} value={'BTC'} label='Bitcoin'/>
      </Picker>

      <Text style={styles.titulo2}>Para</Text>
      <Picker style={styles.input} selectedValue={para} onValueChange={value => setPara(value)}>
        <Picker.Item value={''} label='Escolha uma moeda'/>
        <Picker.Item key={0} value={'USD'} label='Dólar'/>
        <Picker.Item key={1} value={'EUR'} label='Euro'/>
        <Picker.Item key={2} value={'BRL'} label='Real'/>
        <Picker.Item key={3} value={'BTC'} label='Bitcoin'/>
      </Picker>

      <Pressable onPress={pegarValor} style={styles.botao}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <Text style={[styles.titulo2,styles.conversao]}>Valor Convertido: {conversao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
  botao:{
    backgroundColor: '#000',
    padding: 15
  },
  textoBotao:{
    color: '#eee',
    textAlign: 'center',
    fontSize: 25
  },
  titulo2:{
    fontSize: 18,
    color: '#000'
  },
});