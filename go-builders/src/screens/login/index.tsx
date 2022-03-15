import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TokenService from '../../services/TokenService';
import * as Location from 'expo-location';
import AppLoading from "expo-app-loading";
import { Container, Header , Body, ButtonAtualizar, TextButton, Title, SubTite} from './styles'
import { HighlightCard } from '../../components/HighlightCard';
import {   ImageBackground } from 'react-native';


export default function Login(){

     const [data, setData] = useState({});
     const [atualDate, setAtualDate] = useState(String);
     const [count, setCount] = useState(0);


     const bgImg = require('../../assets/cloudy.jpeg');
   
     useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              alert('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            let {latitude, longitude} = location.coords
            let weatherService = new TokenService();
            let weather = await weatherService.getWeather(latitude, longitude);
           

             setData(weather);

             getDatetime();
            
          })();
      }, [count]); 

   
    
    function getWeather(){
        (async () => {
            let location = await Location.getCurrentPositionAsync({});
            let {latitude, longitude} = location.coords
            let weatherService = new TokenService();
            let weather = await weatherService.getWeather(latitude, longitude);
            setData(weather);
            getDatetime();
            
          })();
    }

  function getDatetime(){
    const d = new Date();
    setAtualDate(d.toDateString());
  }
  
    return(

        
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}> 
     <ImageBackground
                source={bgImg}
                style={{
                  flex: 1,
                }}>
        <Body >
        <Header>
        <Title>{data.timezone}</Title>
            <SubTite>{atualDate}</SubTite>
        </Header>
        
        <HighlightCard  current={data.current} ></HighlightCard>
        
        <ButtonAtualizar onPress={() => getWeather()}>
            <TextButton>Atualizar</TextButton>
        </ButtonAtualizar>
       
        </Body>
        </ImageBackground>
    </Container>
        )
}
