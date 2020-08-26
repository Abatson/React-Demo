import React from 'react'
import { Chip, Typography } from '@material-ui/core'
import { Pokemon } from '../../models/pokemon'

interface IPokemonDisplayProps{
    pokemon:Pokemon
}


export const PokemonDisplay:React.FunctionComponent<IPokemonDisplayProps> = (props) => {
    
    
    
    return (
        <div style={{border:'1px solid black'}}>
            <Typography variant='h6'>{props.pokemon.name}</Typography>
            <img src={props.pokemon.img} alt='A picture of charmander'/>
            <Typography variant='body2'>Height:{props.pokemon.height}</Typography>
            <Typography variant='body2'>Weight:{props.pokemon.weight}</Typography>
            <Chip label={props.pokemon.types[0]} variant="outlined" />
            {props.pokemon.types[1] ? 
            <Chip label={props.pokemon.types[1]} variant="outlined" />
            :
            ''
            }
        </div>
    )
}