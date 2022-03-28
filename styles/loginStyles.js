import styled from 'styled-components/native';
import { Colors } from './brandPallete';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const {primary, secondary,terciary, darkLight, brand , green, red} = Colors

export const StyledLoginForm =  styled.View`
width:100%;
`;



export const StyledFormInput = styled.TextInput`
background-color: ${primary};
padding-top:10px;
padding-left:55px;
padding-right:55px;
border-radius:5px;
font-size: 16px;
height: 50px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${brand}
`;

export const StyledFormLabel = styled.Text`
color:${darkLight};
font-size:13px;
text-align:left ;
font-weight:bold;
`;

export const StyledInputIcon = styled.View`
left:15px;
top: 30px;
position:absolute;
z-index:1
`;

export const StyledPasswordIcon = styled.TouchableOpacity`
right:15px;
top: 38px;
position:absolute;
z-index:1
`;


export const StyledFormButton = styled.TouchableOpacity`
padding:15px;
background-color : ${darkLight};
justify-content:center;
border-radius:5px;
margin-vertical: 5px;
height: 60px;
${(props)=>props.isGoogle ==true && `
    flex-direction:row;
    justify-content:center;
`}

`;

export const StyledFormButtonText = styled.Text`
color: ${primary};
font-size:14px;
text-align:center;

${(props)=>props.isGoogle ==true && `
  padding:5px;
  
  `}
`

export const Line = styled.View`
    height:1px;
    background-color: ${secondary};
    margin-vertical:5px;
`

export const MessageView = styled.View `
padding:10px;
flex-direction:row;
align-items:center;
justify-content:center
`
export const MessageText = styled.Text `
justify-content:center;
color:${brand};
align-items:center
`
export const MessageLink = styled.TouchableOpacity `
justify-content:center;
align-items:center
`
export const MessageLinkText = styled.Text `
color:${darkLight}
`

export const ErrorMessage = styled.Text`
font-size 13px;
text-align:center;
color: ${(props) => (props.type == "SUCCESS" ? green : red)};
`
