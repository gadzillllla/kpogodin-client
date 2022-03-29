import { createApi } from '@reduxjs/toolkit/query/react';

import { apiUrl } from './apiUrl';
import { createBaseQuery } from './baseQuery';
import { Pokemon } from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: createBaseQuery(),
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query(name) {
        return { url: apiUrl.pokemonByName(name), method: 'GET' };
      },
    }),
    getListOfPokemons: builder.query<Pokemon[], void>({
      query: () => ({ url: apiUrl.pokemon(), method: 'GET' }),
    }),
  }),
});

export const { useGetPokemonByNameQuery, useLazyGetListOfPokemonsQuery } = pokemonApi;
