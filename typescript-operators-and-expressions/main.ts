const width: number = 2;
const height: number = 5;
const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 10;
const payment: number = 20;
const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 96;
const midterm: number = 93;
const final: number = 90;
const average: number = (quizzes + midterm + final) / 3;
console.log('value of average:', average);
console.log('typeof average:', typeof average);

const firstName: string = 'Daniel';
const lastName: string = 'Hahn';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 5;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto = fullName + ' is the GOAT!';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
