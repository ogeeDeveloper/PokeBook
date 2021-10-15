import { Box, CircularProgress, Grid } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import {POKEMON_API_URL as apiUrl, POKEMON_IMAGE_URL as pokemonImage} from '../../config'
import PokemonCard from "./PokemonCard"

const PokeInfo = () => {
    const [pokemonData, setPokemonData] = useState(null)
    //Get te pokemon data from the API using the useEffect Hook
    useEffect(() => {
        //As soon as the webpage loads it will automatically fetches the data from the pokemon API
        //Use axios library to fetch data
        axios.get(`${apiUrl}?limit=100`)
        //After it fethes return the data using promise
        .then(res=>{
            //Check status of the respose
            if(res.status >= 200 && res.status <= 300){
                //Store te data in a array
                const {results} = res.data
                let newPokemoData = []
                results.map((pokemon, index)=>{
                    //Create a new object for the pokemons
                    index++
                    let pokemonObject = {
                        id: index,
                        url: pokemonImage + index + ".png",
                        name: pokemon.name
                    }
                    //Push the recieved pokemen object into the pkemonnDataArray
                    newPokemoData.push(pokemonObject)
                })
                //Set the pokemonData in the state
                setPokemonData(newPokemoData)
            }
        })
        return () => {
            //TODO Clean Up
        }
    }, [])

    return (
        <Box>
            {pokemonData ? 
            <Grid container spacing={2}>
                {pokemonData.map(pokemon=>{
                    return <PokemonCard pokemon={pokemon} image={pokemon.url}/>
                })}
            </Grid>
             : <CircularProgress style={{marginTop: 100}} /> }
        </Box>
    )
}

export default PokeInfo
