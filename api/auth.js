import axios from 'axios'


//const api = axios.create( {baseURL: 'http://localhost:3001'})

export async function userSignUp (formData) {
    try{

        const response = await axios.post(`http://192.168.0.95:3001/auth/signup` , formData)
         return response.data

    }
    catch(error){
    return error}
}

export async function userLogin (formData) {

    try {
       const response = await axios.post(`http://192.168.0.95:3001/auth/signin` , formData)
       return response.data

    } catch (error) {
        
      return error
    }
}

export async function signWithGoogle(data){
    const  {email, name , id} = data
    
    const formData = {
        fullName: name,
        email:email, 
        password:id
    }
    try {
       

        const response = await axios.post(`http://192.168.0.95:3001/auth/signwith` , formData)
        
    } catch (error) {
            return
    }
    
}


