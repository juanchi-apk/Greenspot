import styled from 'styled-components/native';
import { Colors } from './brandPallete';
import { View, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';


const statusBarHeight = Constants.statusBarHeight;
const {primary, secondary,terciary, darkLight, brand , green, red} = Colors


 export const StyledContainers = styled.View`
flex:1;
padding:10px;
padding-top: ${statusBarHeight}px;
background-color: ${terciary};

`
export const StyledScrollContainers = styled.ScrollView`
flex:1;
padding:10px;
padding-top: ${statusBarHeight}px;
background-color: ${terciary};
`


export const InnerContainers = styled.View`
    flex:1;
    width:100%;
    align-items:center;
    justify-content:center;
`


//HALF SCREEN SET OF LOGO AND TITLE
export const BrandLogo = styled.Image`
width:150px;
height:150px;

`
export const BrandThumbnailLogo = styled.Image`
width:30px;
height:30px;

`

export const BrandTitle = styled.Text`
 font-size:28px;
 text-align:center;
 font-weight: bold;
 color: ${brand};
 padding:5px;


 `

export const BrandSubtitle = styled.Text`
font-size 18px;
margin-bottom: 15px;
letter-spacing: 1px;
font-weight:bold;
color: ${secondary};
`
