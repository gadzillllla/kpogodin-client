const host = window.location.hostname === 'localhost' ? 'http://localhost:4000' : '';
export const BASE_API_URL = `${host}/api/v1/`;

export const apiUrl = {
  BASE_API_URL,
  pokemon() {
    return 'pokemons';
  },
  pokemonByName(name: string) {
    return `${this.pokemon()}/${name}`;
  },
};
