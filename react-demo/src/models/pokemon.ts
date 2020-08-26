
//this is the object we use in react
export class Pokemon{
    id:number
    name:string
    height:number
    weight:number
    types: string[]
    img:string
    //what gets passed in is the object we got back from the pokeapi
    constructor(pokeapiPokemon:any){
        this.id = pokeapiPokemon.id
        this.name = pokeapiPokemon.name
        this.height = pokeapiPokemon.height
        this.weight = pokeapiPokemon.weight
        this.img = pokeapiPokemon.sprites.front_default
        this.types = []
        pokeapiPokemon.types.forEach(ele => {            
            this.types.push(ele.type.name)
        });
    }
}