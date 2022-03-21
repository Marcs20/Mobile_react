import React from 'react';
import {View, Image, Text} from 'react-native';

function App() {
  let img = 'https://siga.cps.sp.gov.br/image//AA74EW46NZ24VINA5KYDDNSTYVGNZJ.TMB.JPG';
  return(
    <View>
      <Image source={{uri: img}} style={{with: 400, height: 400}}/>
      <Text style = {{fontSize: 30, color: '#0000AA'}}>Marcos de Jesus oliveira</Text>

      <Text style = {{fontSize: 30, color: '#0000AA'}}>Cursando Sistemas para Internet, 6º semestre</Text>

      <Text style = {{fontSize: 30, color: '#0000AA'}}>Fatec Rubens Lara, Santos</Text>
    </View>
  )
}

export default App;