// function getPokemonData(name) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   });
//   xhr.send();
// }

// getPokemonData('cubone');

function getValorantAgents() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6'
  );
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getValorantAgents('');
