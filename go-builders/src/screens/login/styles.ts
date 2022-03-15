import styled from 'styled-components/native'
import {  Feather  } from '@expo/vector-icons'

export const Container = styled.KeyboardAvoidingView`
       flex: 1;
       
 `;

export const Header = styled.View`
width: 100%;
height: 35%;
justify-content: center;
align-items: flex-start;
flex-direction: column;

`;

export const Title = styled.Text`
font-family: ${({ theme })=> theme.fonts.regular};
font-size: 20px;
color: ${({ theme })=> theme.colors.shape};

`;


export const SubTite = styled.Text`
font-family: ${({ theme })=> theme.fonts.regular};
font-size: 13px;
color: ${({ theme })=> theme.colors.shape};

`;


export const Body = styled.View`
width: 100%;
padding: 0 30px;
flex-direction: column;
align-items: center;

`;

export const ButtonAtualizar = styled.TouchableOpacity`
 border-width:2px;
 border-color: ${(props)=> props.theme.colors.secondary_light};
 height: 50px;
 width: 95%;
 margin: 20px;
 margin-top:20%;
 padding: 10px;
 border-radius: 10px;
 justify-content: center;
 align-items: center;
 
`; 

export const TextButton = styled.Text`
font-family: ${(props)=> props.theme.fonts.regular};
font-size: 18px;
font-weight: bold;
color: ${(props)=> props.theme.colors.shape};
`;

export const Icon = styled(Feather)`
color: ${(props) => props.theme.colors.secondary};
font-size: 20px;
`; 


