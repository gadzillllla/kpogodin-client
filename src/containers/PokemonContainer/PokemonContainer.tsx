import Button from 'components/Button';
import PokemonsList from 'components/PokemonsList';
import React, { useEffect, useState } from 'react';
import { useLazyGetListOfPokemonsQuery } from 'services/api/pokemon.api';

import s from './PokemonContainer.module.css';

const PokemonContainer = () => {
  const [loadPokemons, { data, error, isLoading }] = useLazyGetListOfPokemonsQuery();
  const [currentRgb, setCurrentRgb] = useState('rgb(0,0,0)');

  useEffect(() => {
    const getRandomInt = (): any => Math.random() * 255;
    const intervalId = setInterval(() => {
      setCurrentRgb(`rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`);
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={s.root} style={{ backgroundColor: currentRgb }}>
      <h1 className={s.title}>ВАЛЕРА</h1>
      <h1 className={s.title}>ШАКШУКА</h1>
      <h1 className={s.title}>А</h1>
      <h1 className={s.title}>ЛЕХА</h1>
      <h1 className={s.title}>НЕТ</h1>
      <Button onClick={() => loadPokemons()}>Загрузить покемонов из api/v1</Button>
      <br />
      {isLoading && <span data-testid="loader">Загрузка...</span>}
      {error && 'Ошибка'}
      {data && <PokemonsList data={data} />}
    </div>
  );
};
export default PokemonContainer;
