import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConexionFetch from './app/components/conexionFetch';
import Details from './app/components/details';

const Stack = createStackNavigator();
//Empezamos utilizando el NavigationContainer:
function App() {
  return (
    /*Este componente que viene de la librería de React-Navigation nos permite
    utilizar la funcionalidad de movernos entre distintas vistas */
    /*Dentro del NavigationContainer, utilizamos los Stack.Navigator para determinar
    las vistas que van a ser navegadas */
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConexionFetch">
        <Stack.Screen name="ConexionFetch" component={ConexionFetch} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;