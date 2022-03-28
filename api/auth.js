import axios from 'axios'


//const api = axios.create( {baseURL: 'http://localhost:3001'})

export async function userSignUp (formData) {
    try{

        const response = await axios.post(`http://192.168.1.43:3001/auth/signup` , formData)
         return response.data

    }
    catch(error){
    return error}
}

export async function userLogin (formData) {

    try {
       const response = await axios.post(`http://192.168.1.43:3001/auth/signin` , formData)
       return response.data

    } catch (error) {
        
      return error
    }
}

export async function signWithGoogle(data){
    console.log(data)
    const  {email, given_name , family_name , googleId} = data
    let fullname = given_name + " " + family_name
    const formData = {
        fullName: fullname,
        email:email, 
        password:googleId
    }
    try {
        const response = await axios.post(`http://192.168.1.43:3001/auth/signwith` , formData)
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data.isUser)
        if (    !error.response.data.isUser){
            console.log( error.response)

        } else{
            console.log("El usuario ya existe")
        }
    }
    
}


