import PokemonContainer from 'containers/PokemonContainer';
import ReduxProvider from 'store/ReduxProvider';

const App = () => {
  return (
    <ReduxProvider>
      <PokemonContainer />
    </ReduxProvider>
  );
};

export default App;
