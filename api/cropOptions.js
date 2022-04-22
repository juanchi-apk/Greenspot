
import axios from 'axios'


export async function getAllCropOptions() {
    try{

        const response = await axios.get(`http://192.168.0.95:3001/defaultOptions`)
       
        return response.data

    }
    catch(error){
    return error}

}