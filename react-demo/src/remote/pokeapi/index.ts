//the index is the entrypoint for a folder, so we do setup here
import axios from 'axios'



export const pokeapiClient = axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    headers:{
        'Content-Type':'application/json'
    }  
})