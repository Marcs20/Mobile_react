import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
 
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Cadastro', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }
 
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>Nome: {title}</Text>
       
        <Text style={styles.titulo}>Curso: {description}</Text>
 
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text style={styles.textoEditar}>Editar</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text style={styles.textoExcluir}>-</Text>
        </TouchableOpacity>
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row',
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  buttonEditar: {
  
  },
  buttonExcluir: {
  },
  textoExcluir: {
    fontSize: 50,
    color: "red",
    textAlign: 'right',
  },
  textoEditar: {
    fontSize:20,
    color: "#000",
    textAlign: 'left',
  },
});
 
export default Card;
