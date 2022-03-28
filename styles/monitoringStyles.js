import styled from 'styled-components/native';
import { Colors } from './brandPallete';
import {ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';
import { BrandTitle } from './brandStyles';
const {primary, secondary,terciary, darkLight, brand , green, red} = Colors


export const StyledMonitoringCard = styled.TouchableOpacity `
background-color: #f4ffe8 ;
border-radius: 16px;
shadow-opacity: 0.2;
shadow-radius: 4px ;
shadow-color: black;
shadow-offset: {
  height: 0,
  width: 0,
};
elevation: 1;
margin-vertical: 20px

`

export const StyledMonitoringImage = styled.Image `
height: 130px;
border-top-left-radius: 16px;
border-top-right-radius: 16px;
width: 100%;
`

export const StyledMonitoringTitle = styled.Text `
    font-size: 22px;
    font-weight: bold;
    color: ${secondary};
    ` 

export const StyledDataRow =styled.View`

  flex:1;
  flex-direction:row;
  align-items:center;
  border-top-width:1px;
  border-color :${brand};
  height :36px;
`

export const RowTittle = styled.Text `
    max-width:45%;
    min-width:45%;
    font-size:12px;
    font-weight:bold;
    color:${primary};
    align-content:flex-start;

`
export const RowContent = styled.Text `
    max-width:45%;
    min-width:45%;
    font-size:14px;
    align-content:flex-start;
    text-align:left;

`

export const IconText = styled.Text `
color: ${secondary};
font-weight: bold;
`

export const IconView = styled.View`
justify-content:center;
align-items:center;
`

export const BulletView = styled.View `
flex-direction:row;
justify-content:space-around;
`

export const BulletTitle = styled.Text `
font-size: 14;
font-weight: bold;
margin-bottom: 8;
text-align:center;
color: ${brand}

`

export const CardView = styled.ScrollView `
flex:1;
background-color: ${terciary};
border-radius:10px;
margin:5px;
padding:5px;

`

export const EventOpacity = styled.TouchableOpacity `
flex:1;
background-color: ${terciary};
border-radius:10px;
margin:5px;
padding:5px;  
justify-content: space-between

`