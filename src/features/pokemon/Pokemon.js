import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  getPokemonAsync,
  selectPokemons,
} from './pokemonSlice';
import { useGetPokemonsQuery } from './pokemonApi';



export function Listing() {
    // const pokemons = useSelector(selectPokemons);
    // const dispatch = useDispatch();
    const { data, error, isLoading } = useGetPokemonsQuery('pokemon');

    console.log(data)

    function ir(){
      for(let i of data.results){
        while(i < 3){
          console.log(data.results.name)
        }
        // console.log(data)
      }
    }
    // ir()
    
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
      

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    }
    else {
        // you can access all properties of `SerializedError` here
        return <div>{error.message}</div>
    }
  }

  if (data) {
    
    return (
      <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      
      </>
    )
  }

  return null
}

ne

