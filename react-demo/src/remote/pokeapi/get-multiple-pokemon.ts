import { pokeapiClient } from ".";
import { getPokemonByName } from "./get-pokemon-by-name";
import { Pokemon } from "../../models/pokemon";


export async function getMultiplePokemon(limit:number, offset:number){
    let allPokemonResponse = await pokeapiClient.get(`/pokemon?limit=${limit}&offset=${offset}`)
    let allPokemonReturn:any[] = []

    allPokemonResponse.data.results.forEach(element => {
        //we put a bunch of promises into a an array
        allPokemonReturn.push(getPokemonByName(element.name))        
    });
    //wait until every single promis in the array finshes
    return await Promise.all(allPokemonReturn)
    
}