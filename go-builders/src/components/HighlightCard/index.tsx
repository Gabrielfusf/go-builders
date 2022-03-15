import AppLoading from "expo-app-loading";
import React, { useEffect } from "react";

import {   Container, Icon, Footer, Label, Divisor, DivisorIcon } from './styles'

interface Props{
    current: {}
}


export function HighlightCard({
    current
}: Props){

    return(

    <Container>
        
        <Footer>
        <Divisor>
            <Label>Nuvens:</Label>
            <DivisorIcon>
            <Label>{current ? current.clouds + '%': '...'}</Label>
            <Icon name="cloud" />
            </DivisorIcon>
           
        </Divisor>  
        <Divisor>
            <Label>Humidade:</Label>
            <DivisorIcon>
            <Label>{current ? current.humidity + '%' : '...'}</Label>
            <Icon name="cloud-drizzle" />
            </DivisorIcon>
            
        </Divisor> 
        <Divisor>
            <Label>Vento:</Label>
            <DivisorIcon>
            <Label>{current ? current.wind_speed + 'Km' : '...'}</Label>
            <Icon name="wind" />
            </DivisorIcon>
            
        </Divisor>
        </Footer>
     </Container>
);

}
