// Zadania potwórzeniowe - 09.03

// Zadanie 1
const myAwesomeTab = ['jeden', 'dwa', 'trzy', 'cztery', 'piec'];
const [,secondElement] = myAwesomeTab;

// console.log(secondElement);

// Zadanie 2
const person = {
  name: 'person name',
  lastName: 'person lastName',
  age: 109,
  hobbies: [
    'hobbie 1',
    'hobbie 2',
    'hobbie 3',
  ]
}

const {age, hobbies} = person;

// console.log('age', age);
// console.log('hobbies', hobbies);

// Zadanie 3
const numbers = [1,2,3];
const user = { 
  name: 'user name',
  email: 'user@email.com'
}

numbers.push(10);

// console.log('numbers', numbers);

// I opcja
// user.age = 25;

// II opcja
user['age'] = 25;

// console.log('user', user)

// Zadanie 4

// I sposób zwracania wartosci z funkcji strzałkowej
// z return
// const get = () => { return 'cos'}

// const add = (a,b) => {return a+b}

// II sposób zwracania wartosci z funkcji strzałkowej
// bez return
// const get = () => 'cos'

const add = (a,b) => a+b;
const multiply = (a,b) => a*b;
// console.log(add(5,6));

//// Zadanie 5
// I opcja
// const calculate = (firstValue, secondValue, callback) => {
//   const value = callback(firstValue, secondValue);

//   return value;
// }

// II opcja - refractor
// const calculate = (firstValue, secondValue, callback) => {
//   return callback(firstValue, secondValue);
// }

// III opcja refractor kolejny
const calculate = (firstValue, secondValue, callback) => 
  callback(firstValue, secondValue);

// oczekiwana wartosc = 15
// console.log('calculate', calculate(10,5, add))

//// Zadanie 6 
// oczekiwana wartosc = 15
// console.log('calculate', calculate(10,7, (a,b) => a+b))

//// Zadanie 7
const getItem = (item) => {
  console.log(item);
}

const valueItem = {
  name: 'item name'
}

// getItem(1);

// getItem(valueItem)

//// Zadanie 8
// I sposób
// myAwesomeTab.forEach(getItem)
// II sposób
// myAwesomeTab.forEach((item) => console.log(item))


//// Zadanie 9
// I opcja - prosze unikac
const updateItem = (item) => `new ${item}`;
// const updatedAwesomeTab = myAwesomeTab.map(updateItem);
// II opcja
const updatedAwesomeTab = myAwesomeTab.map((item) => `new ${item}`);

// console.log(updatedAwesomeTab);

//// zadanie dodatkowe - na myslenie
const objectTab = [
  {
    id: '1',
    name: 'first element'
  },
  {
    id: '2',
    name: 'second element'
  },
  {
    id: '3',
    name: 'third element'
  },
];

const filteredTab = objectTab.map(item => {
  if(item.id === '2') {
    return {
      id: '2',
      name: 'updated second name'
    }
  }

  return item;
})

const tabWithoutSecondElement = objectTab.filter(item => item.id !== '2')

console.log(tabWithoutSecondElement)