import React, {cloneElement, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';
import AppLoading from 'expo-app-loading';
import { FormInput } from '../components/FormField';
import {Colors} from '../styles/brandPallete'
import { userSignUp } from '../api/auth';
import { ActivityIndicator } from 'react-native';
import {
    StyledScrollContainers,
    InnerContainers, 
    BrandThumbnailLogo,
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
    ErrorMessage,
} from '../styles/loginStyles';






export default function SignUp({navigation}){

  const [date, setDate] = useState(new Date(2002,0,1));
  const [show, setShow] = useState(false);
  const [dob , setDob] = useState();
  const [loginMessage, setLoginMessage] = useState({message:"", type:""}) 

 const onDOBChange = (event, selectedDate)=>{
    const currentDate = selectedDate || date;
        setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = ()=>{
      setShow(true)
  }


  let [fontsLoaded] = useFonts({
    Creepster_400Regular,

    });
  
    if (!fontsLoaded) {
         return <AppLoading />;
    }

    const handleAsyncFetch= async(formData, setSubmitting )=>{
        try {
            const results = await userSignUp(formData)
            const {message, status, data} = results
        
            if(status !=="SUCCESS"){
                onLoginMessage(message, status)
                setSubmitting(false)

            }else{
               // console.log(data)
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
            <InnerContainers > 
            <BrandThumbnailLogo resizeMode="cover" source={require('./../assets/weedleaf.webp')} />

                <BrandTitle >Green Spot</BrandTitle>
                <BrandSubtitle>Create an Account!</BrandSubtitle>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onDOBChange}
                    />
                )}
                <Formik
                    initialValues={{fullName: " ", email: "" , password:"",dateOfBirth:"", confirmPassword:""}}
                    onSubmit={ (values, {setSubmitting})=>{
                        values.dateOfBirth = dob ? dob.toDateString() : "";

                        for (const key in values) {
                          if (values[key]==""){
                                onLoginMessage("Please, complete all fields", "FAILED")
                                setSubmitting(false)
                                return;
                            }                                
                            
                        }

                        if(values.password !== values.confirmPassword){
                            onLoginMessage("Passwords don't match", "FAILED")
                            setSubmitting(false)
                            return;
                        }

                    
                        handleAsyncFetch(values, setSubmitting);
                        

                    } }
                >
                 {({handleBlur, handleChange, handleSubmit , values, isSubmitting = false})=>{
                        return (<StyledLoginForm>
                            <FormInput
                                label="Full Name"
                                icon ="person"
                                placeholder = "Juan Manuel Otero"
                                placeholderTextColor = {Colors.terciary}
                                onChangeText = {handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value = {values.fullName}
                                keyboardType= 'email-address'
                                
                            />
                            <FormInput
                                label="Email Adress"
                                icon ="mail"
                                placeholder = "greenleaf@gmail.com"
                                placeholderTextColor = {Colors.terciary}
                                onChangeText = {handleChange('email')}
                                onBlur={handleBlur('email')}
                                value = {values.email}
                                
                            />
                            <FormInput
                            label="Date of Birth"
                            icon ="calendar"
                            placeholder = "DD-MM-YYYY"
                            placeholderTextColor = {Colors.terciary}
                            onChangeText = {handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value = {dob ? dob.toDateString() : ""}
                            editable = {false}
                            isDate = {true}
                            showDatePicker = {showDatePicker}


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
                            <FormInput
                                label="Confirm Password"
                                icon ="lock"
                                placeholder = "***********"
                                placeholderTextColor = {Colors.terciary}
                                onChangeText = {handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value = {values.confirmPassword}
                                isPassword={true}                                
                            />
                        <ErrorMessage type={loginMessage.type}>{loginMessage.message}</ErrorMessage>                            
                            
                        {!isSubmitting && (<StyledFormButton onPress={handleSubmit}>
                            <StyledFormButtonText>
                                Sign Up
                            </StyledFormButtonText>
                        </StyledFormButton>
                        )}
                        {isSubmitting && (<StyledFormButton disabled={true}>
                            <ActivityIndicator  size="large" color={Colors.primary}/>
                        </StyledFormButton>
                        )}
                        <Line/>
                        <MessageView>
                            <MessageText>Already have an account? </MessageText>
                            <MessageLink onPress={()=>{navigation.navigate('Login')}}><MessageLinkText>LOG IN</MessageLinkText></MessageLink>
                            
                        </MessageView>
                        </StyledLoginForm>
                        )}
                    } 
                </Formik>
            
            </InnerContainers>
        </StyledScrollContainers>
    )
}

