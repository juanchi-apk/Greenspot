import {View, TouchableOpacity} from 'react-native';
import { 
    StyledFormButton, 
    StyledFormButtonText, 
    StyledFormInput, StyledFormLabel, 
    StyledInputIcon, 
    StyledPasswordIcon } from '../styles/loginStyles';
import {Octicons, Ionicons} from '@expo/vector-icons'
import {Colors} from '../styles/brandPallete'
import { useState } from 'react';


export const FormInput = (
    {
        label,
        icon,
        isPassword,
        isDate,
        showDatePicker,

        ...props
    })=>{

        const [visiblePassword, setVisiblePassword] = useState(false)


        return (
            <View>
                <StyledInputIcon>
                <Octicons name={icon} color= {Colors.brand} size={30} />
                </StyledInputIcon>
                <StyledFormLabel >{label}</StyledFormLabel>
                {!isDate && (<StyledFormInput  secureTextEntry={isPassword? !visiblePassword : false}
                {...props}></StyledFormInput>) }
                {isDate && (
                    <TouchableOpacity onPress={()=>showDatePicker()}>

                        <StyledFormInput  secureTextEntry={isPassword? !visiblePassword : false}
                        {...props}></StyledFormInput>

                    </TouchableOpacity>
                )}     
                {isPassword && (
                    <StyledPasswordIcon >
                        <Ionicons onPress={()=>setVisiblePassword(!visiblePassword)} name= {visiblePassword ? "md-eye" :"md-eye-off"} color= {Colors.brand} size={30} /> 
                    </StyledPasswordIcon>)
                
                }
           </View>
        ) 
    }

