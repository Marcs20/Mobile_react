import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Tarefas from './src/Tarefas/index';
import Form from './src/Form';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Alunos" component={Tarefas} />
        <Stack.Screen name="Cadastro" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
