import Button from 'components/Button';
import PokemonsList from 'components/PokemonsList';
import { useLazyGetListOfPokemonsQuery } from 'services/api/pokemon.api';

import s from './PokemonContainer.module.css';

const PokemonContainer = () => {
  const [loadPokemons, { data, error, isLoading }] = useLazyGetListOfPokemonsQuery();
  console.log({ data });

  return (
    <div className={s.root}>
      <h1 className={s.title}>ЗДАРОВА</h1>
      <h1 className={s.title}>ЗАЕБАЛ</h1>
      <Button onClick={() => loadPokemons()}>Загрузить покемонов из api/v1</Button>
      <br />
      {isLoading && <span data-testid="loader">Загрузка...</span>}
      {error && 'Ошибка'}
      {data && <PokemonsList data={data} />}
    </div>
  );
};
export default PokemonContainer;
