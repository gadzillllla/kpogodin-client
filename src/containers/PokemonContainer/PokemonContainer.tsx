import Button from 'components/Button';
import PokemonsList from 'components/PokemonsList';
import { useEffect, useRef, useState } from 'react';
import { useLazyGetListOfPokemonsQuery } from 'services/api/pokemon.api';

import s from './PokemonContainer.module.css';

const PokemonContainer = () => {
  const [loadPokemons, { data, error, isLoading }] = useLazyGetListOfPokemonsQuery();
  const [currentRgb, setCurrentRgb] = useState('rgb(255,255,255)');
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const getRandomInt = (): any => Math.random() * 255;
    const intervalId = setInterval(() => {
      setCurrentRgb(`rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`);
      setCount(countRef.current + 5);
    }, 200);
    return () => clearInterval(intervalId);
  }, [setCount, setCurrentRgb]);

  return (
    <div className={s.root} style={{ backgroundColor: currentRgb }}>
      <h1 className={s.title} style={{ transform: `rotate(${-count}deg)` }}>
        В МАЛАФЬЕ!
      </h1>

      <h1 className={s.subTitle}>ГАШНЯ!</h1>
      <div className={s.hidden}>
        <Button onClick={() => loadPokemons()}>Загрузить покемонов из api/v1</Button>
        <br />
        {isLoading && <span data-testid="loader">Загрузка...</span>}
        {error && 'Ошибка'}
        {data && <PokemonsList data={data} />}
      </div>
    </div>
  );
};
export default PokemonContainer;
