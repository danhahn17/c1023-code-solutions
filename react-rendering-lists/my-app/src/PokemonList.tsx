type Props = {
  list: {
    number: string;
    name: string;
  }[];
};

export function PokemonList({ list }: Props) {
  const items = list.map((pokemon) => (
    <li key={pokemon.number}>
      {' '}
      {pokemon.number} - {pokemon.name}
    </li>
  ));
  return <ul>{items}</ul>;
}
