// import Button from 'components/Button';
// import PokemonsList from 'components/PokemonsList';
// import { useLazyGetListOfPokemonsQuery } from 'services/api/pokemon.api';

import s from './PokemonContainer.module.css';

const PokemonContainer = () => {
  // const [loadPokemons, { data, error, isLoading }] = useLazyGetListOfPokemonsQuery();

  return (
    <div className={s.root}>
      <h1 className={s.title}>KPOGODIN</h1>
      {/* <div>
        <Button onClick={() => loadPokemons()}>Загрузить покемонов из api/v1</Button>
        <br />
        {isLoading && <span data-testid="loader">Загрузка...</span>}
        {error && 'Ошибка'}
        {data && <PokemonsList data={data} />}
      </div> */}
    </div>
  );
};
export default PokemonContainer;
