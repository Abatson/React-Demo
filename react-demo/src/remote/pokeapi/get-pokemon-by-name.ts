import { pokeapiClient } from "."
import { Pokemon } from "../../models/pokemon"


export async function getPokemonByName(name:string){
    let pokemonResponse = await pokeapiClient.get(`/pokemon/${name}`)

    let pokemon:Pokemon = new Pokemon(pokemonResponse.data)
    return pokemon
}