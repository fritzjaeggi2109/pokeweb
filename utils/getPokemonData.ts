import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonData = async (value: string) => {
  try {
    const {
      data: { id, name, sprites },
    } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);

    return {
      id,
      name,
      sprites,
    };
  } catch (error) {
    return null;
  }
};
