function ExampleConstructor() {}

console.log(
  'value of prototype property of ExampleContructor fxn:',
  ExampleConstructor.prototype
);
console.log(
  'typeof prototype property of ExampleContructor fxn:',
  typeof ExampleConstructor.prototype
);

const fxnVar = new ExampleConstructor();
console.log('value of fxnVar:', fxnVar);

const instanceIThinkNot = fxnVar instanceof ExampleConstructor;
console.log('value of instanceIThinkNot:', instanceIThinkNot);
