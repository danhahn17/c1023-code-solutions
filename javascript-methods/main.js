const x = 171;
const y = 8388;
const z = 2;
console.log('maximum value:', Math.max(x, y, z));

const heroes = ['Batman', 'Thor', 'Hulk', 'Captain America'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Crying in HMart',
    author: 'Michelle Zauner',
  },
  {
    title: "Ender's Game",
    author: 'ORson Scott Card',
  },
  {
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Daniel Hahn';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
