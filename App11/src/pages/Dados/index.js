import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Dados( {route} ){
  const navigation = useNavigation();
 
  return(
    <View>
      <Text>Dados</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexoopc[route.params?.sexo].nome}</Text>
      <Text>Escolaridade: {route.params?.escolaridadeopc[route.params?.escolaridade].nome}</Text>
      <Text>Limite: {route.params?.valor}</Text>
      <Text>Brasileiro? {(route.params?.brasileiro) ? "Sim" : "Não"}</Text>
      <Button
      title='Voltar para tela Home'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}

