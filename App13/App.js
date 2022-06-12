import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
 
const Tab = createBottomTabNavigator();
 
const icons = {
  Pessoal:{
    name: 'ios-person',
  },
  Formação:{
    name: 'ios-clipboard',
  },
  Experiência:{
    name: 'ios-documents',
  }
}
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Pessoal' component={Home} />
        <Tab.Screen name='Formação' component={Sobre} />
        <Tab.Screen name='Experiência' component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
<NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212'
        },
        activeTintColor: '#FFF'
      }}
      >
        <Tab.Screen name='Pessoal' component={Home} />
        <Tab.Screen name='Formação' component={Sobre} />
        <Tab.Screen name='Experiência' component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
