import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';


import axios from 'axios';

export default function App() {
  
  const [user, setUser] = useState('');

  const [data, setData] = useState(false);
  
  async function confirmar() {
    try{
      const response = await axios.get(`https://api.github.com/users/${user}`);
      
      if(response){
        setData(response.data);
      }
      
    }catch(e){
      console.error(e);
      setData(false);
    }
  }

  return(
    <View>
      <Text style={styles.titulo}>Perfil dos Devs</Text>  

            
      <Image
        source={{ uri: data.avatar_url}}
        style={styles.image}
      />
 

      
      <TextInput style={styles.input} placeholder='Digite o perfil do Github' value={user} onChangeText={value => setUser(value)}/>

      <Pressable onPress={confirmar} style={styles.botao}>
        <Text style={styles.textoBotao}>
          Pesquisar
        </Text>
      </Pressable>
      
      
        <View>
          <Text>

         Id: {data.id}
          </Text>
          <Text style={styles.list}>
           Nome: {data.name}
          </Text>
          <Text>
            Repositórios: {data.public_repos}
          </Text>
          <Text>
            Criado em: {data.created_at}
          </Text>
          <Text>
           Seguidores: {data.followers}
          </Text>
          <Text>
          Seguindo: {data.following}
          </Text>
        </View>
       

      
    </View>
  );
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
  image:{
    width: 100,
    height: 100,
    marginLeft: 150
  },
  botao:{
    paddingVertical: 20,
    backgroundColor: '#000',
  },
  textoBotao:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
});