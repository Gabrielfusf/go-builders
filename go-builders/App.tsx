import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';//disponibiliza o tema para toda aplicaçao
import theme from './src/global/styles/theme'; //thema criado
import AppLoading from 'expo-app-loading'; //faz o controle do loading enquanto carrega as informaçoes da tela
import {useFonts , Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';// fontes do google

import  Login  from './src/screens/login';



export default function App() {
const [fontsLoaded] = useFonts({
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold
});

  if(!fontsLoaded){
    return<AppLoading />
  }

    return (
      <ThemeProvider theme={theme}> 
      <Login />
      </ThemeProvider>
    );
}


  

