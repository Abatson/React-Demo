//this component will get 10 pokemon at a time and display them on the screen
//evnetually it will have page buttons to get the next or previous ten pokemon
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { PokemonDisplay } from '../pokemon-display/PokemonDisplay'
import { getMultiplePokemon } from '../../remote/pokeapi/get-multiple-pokemon'


export const AllPokemon: React.FunctionComponent<any> = (props) => {
    //useState hook allows us to get an object from react and a function to change that object
    let [pokemonPage, changePokemonPage] = useState<any[]>([])

    useEffect(()=>{
        let setup = async ()=>{
            let pokeArr = await getMultiplePokemon(10,10)
            changePokemonPage(pokeArr)
        }
        setup()
    }, [])

    let pokemonDisplays = pokemonPage.map((ele)=>{
        return (
            <Grid item xs>
                <PokemonDisplay pokemon={ele}/>
            </Grid>
        )
    })

    return (
        <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
            {pokemonDisplays}
                </Grid>
    )
}