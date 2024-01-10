async function Pokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/58');
    if (response.ok) {
      const pokemon = await response.json();
      console.log(pokemon);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

Pokemon();
