import { takeAChance } from './take-a-chance.js';

takeAChance('Daniel')
  .then((luckyMessage) => {
    console.log(luckyMessage);
  })
  .catch((unluckyMessage) => {
    console.log(unluckyMessage.message);
  });
