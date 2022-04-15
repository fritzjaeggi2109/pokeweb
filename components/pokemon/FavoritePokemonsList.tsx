import { Grid } from '@nextui-org/react';
import { FavoritePokemonIntem } from './';

interface Props {
  pokemons: number[];
}

export const FavoritePokemonsList: React.FC<Props> = ({ pokemons }) => (
  
  <Grid>
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id: number) => (
        <FavoritePokemonIntem id={id} key={id} />
      ))}
    </Grid.Container>
  </Grid>
);
