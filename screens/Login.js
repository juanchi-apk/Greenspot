import React , {useState, useEffect} from 'react';
import {Fontisto} from '@expo/vector-icons'
import { Formik } from 'formik';
import { FormInput } from '../components/FormField';
import {Colors} from '../styles/brandPallete';
import { ActivityIndicator } from 'react-native';
import { userLogin, signWithGoogle } from '../api/auth';

import * as Google from 'expo-auth-session/providers/google';
import * as WebBroser from 'expo-web-browser';


import {
    StyledScrollContainers,
    InnerContainers, 
    BrandLogo,
    BrandTitle,
    BrandSubtitle
} from '../styles/brandStyles';
import {
    StyledLoginForm,
    StyledFormButton, 
    StyledFormButtonText, 
    Line,
    MessageLink,
    MessageLinkText,
    MessageText,
    MessageView,
    ErrorMessage
} from '../styles/loginStyles';
import axios from 'axios';



WebBroser.maybeCompleteAuthSession()


export default function Login({navigation}){

    const [loginMessage, setLoginMessage] = useState({message:"", type:""}) ;
    const [accessToken, setAccessToken] =useState();
    const[userData, setUserData] = useState ();


    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '1074104453673-3tfr1c2svjg4mf26irreet2e24772u3u.apps.googleusercontent.com'       
    })


    useEffect(()=>{
        if(response?.type =="success"){
            setAccessToken(response.authentication.accessToken);
            getUserData(response.authentication.accessToken)
            
        
    }}, [response])

    function setAllData(data){
        if(data!==undefined){
        signWithGoogle(data);
        setUserData(data) ;
        }
    }
    async  function getUserData( credentials){
    let googleResponse  = await fetch('https://www.googleapis.com/userinfo/v2/me',{
            headers:{
            Authorization: `Bearer ${credentials}`
        }
    });

   googleResponse.json().then(data=>{
   // console.log(data)
   // signWithGoogle(data);
   // setUserData(data) ;       
    setAllData(data)    
})
navigation.navigate('WelcomeScreen')
    }


    const handleAsyncFetch= async(formData, setSubmitting )=>{
        try {
            const results = await userLogin(formData)
            const {message, status, data} = results
        
            if(status !=="SUCCESS"){
                onLoginMessage(message, status)
                setSubmitting(false)

            }else{
                //console.log(data)
                setSubmitting(false)
                navigation.navigate("WelcomeScreen")
            }
        
        }catch(error){
            onLoginMessage("There was an network error. Sorry, try again later", )
            setSubmitting(false)
        }
        
         
    }
    const onLoginMessage = (message="", type ="FAILED")=>{
        setLoginMessage({
            message, 
            type
        })

    }


    return(
        <StyledScrollContainers>
            {/* <StatusBar style='dark'/> */}
            <InnerContainers>
                <BrandLogo resizeMode="cover" source={require('./../assets/weedleaf.webp')} />
                <BrandTitle style={fontFamily="Creepster_400Regular"} >Green Spot</BrandTitle>
                <BrandSubtitle>Account Login</BrandSubtitle>
                <Formik
                    initialValues={{email: "" , password:""}}
                    onSubmit={ (values, {setSubmitting})=>{
                        if(values.password == "" ||values.email==""){
                            onLoginMessage("Please complete all fields", "FAILED")
                            setSubmitting(false)
                            return;
                        }

                    
                        handleAsyncFetch(values, setSubmitting);

                    } }
                >
                 {({handleBlur, handleChange, handleSubmit , values, isSubmitting})=>{
                        return (<StyledLoginForm>
                            <FormInput
                                label="Email Adress"
                                icon ="mail"
                                placeholder = "greenleaf@gmail.com"
                                placeholderTextColor = {Colors.terciary}
                                onChangeText = {handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values.email}
                                keyboardType= 'email-address'
                                
                            />
                            <FormInput
                                label="Password"
                                icon ="lock"
                                placeholder = "***********"
                                placeholderTextColor = {Colors.terciary}
                                onChangeText = {handleChange('password')}
                                onBlur={handleBlur('password')}
                                value = {values.password}
                                isPassword={true}                                
                            />
                            <ErrorMessage type={loginMessage.type}>{loginMessage.message}</ErrorMessage>                            
                            
                            {!isSubmitting && (<StyledFormButton onPress={handleSubmit}>
                                <StyledFormButtonText>
                                    Login
                                </StyledFormButtonText>
                            </StyledFormButton>
                            )}
                            {isSubmitting && (<StyledFormButton disabled={true}>
                                <ActivityIndicator  size="large" color={Colors.primary}/>
                            </StyledFormButton>
                            )}
                             <Line/>
                            <StyledFormButton onPress={() => {promptAsync()}} isGoogle = {true}>
                            <Fontisto name= "google" color={Colors.primary} size={25}/>
                            <StyledFormButtonText isGoogle={true}>
                             Sign In With Google
                            </StyledFormButtonText>
                        </StyledFormButton>
                        <MessageView>
                            <MessageText>Don't have an account already? </MessageText>
                            <MessageLink onPress={()=>{navigation.navigate('SignUp')}}><MessageLinkText>SIGN UP</MessageLinkText></MessageLink>
                            
                        </MessageView>
                        </StyledLoginForm>
                        )}
                    } 
                </Formik>
            
            </InnerContainers> 
        </StyledScrollContainers>
    )
}


