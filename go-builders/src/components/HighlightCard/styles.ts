import styled from 'styled-components/native';
import {  Feather  } from '@expo/vector-icons'

export const Container = styled.View`
width: 100%;
border-radius: 5px;
padding: 15px 20px;
padding-bottom: 35px;
background-color: ${({ theme })=> theme.colors.secondary_light};
opacity: 0.7; 
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Divisor = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 10px;
`;

export const DivisorIcon = styled.View`
flex-direction: row;

`;

export const Title = styled.Text`
font-family: ${({ theme })=> theme.fonts.regular};
font-size: 20px;
color: ${({ theme })=> theme.colors.shape};

`;



export const Icon = styled(Feather)`
font-size: 25px;
color: ${({ theme })=> theme.colors.shape};
margin-left: 10px ;
`;

export const Footer = styled.View``;

export const Label = styled.Text`
font-family: ${({ theme })=> theme.fonts.regular};
font-size: 18px;
color: ${({ theme })=> theme.colors.shape};
`;

