import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
/*
export function fetchPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon')
          .then(res => res.json())
          .then(data => ({data}))
}
 */

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => `pokemon`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonsQuery } = pokemonApi


