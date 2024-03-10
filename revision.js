// Zadania potwórzeniowe - 09.03

// Zadanie 1
const myAwesomeTab = ["jeden", "dwa", "trzy", "cztery", "piec"];
const [, secondElement] = myAwesomeTab;

// console.log(secondElement);

// Zadanie 2
// const person = {
//   name: 'person name',
//   lastName: 'person lastName',
//   age: 109,
//   hobbies: [
//     'hobbie 1',
//     'hobbie 2',
//     'hobbie 3',
//   ]
// }

// const {age, hobbies} = person;

// console.log('age', age);
// console.log('hobbies', hobbies);

// Zadanie 3
const numbers = [1, 2, 3];
const user = {
  name: "user name",
  email: "user@email.com",
};

numbers.push(10);

// console.log('numbers', numbers);

// I opcja
// user.age = 25;

// II opcja
user["age"] = 25;

// console.log('user', user)

// Zadanie 4

// I sposób zwracania wartosci z funkcji strzałkowej
// z return
// const get = () => { return 'cos'}

// const add = (a,b) => {return a+b}

// II sposób zwracania wartosci z funkcji strzałkowej
// bez return
// const get = () => 'cos'

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
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
};

const valueItem = {
  name: "item name",
};

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
    id: "1",
    name: "first element",
  },
  {
    id: "2",
    name: "second element",
  },
  {
    id: "3",
    name: "third element",
  },
];

const filteredTab = objectTab.map((item) => {
  if (item.id === "2") {
    return {
      id: "2",
      name: "updated second name",
    };
  }

  return item;
});

const tabWithoutSecondElement = objectTab.filter((item) => item.id !== "2");

// console.log(tabWithoutSecondElement)

//// Zadanie 10
const filteredAwesomeTab = myAwesomeTab.filter((item) => item.length > 3);

// console.log(filteredAwesomeTab)

//// Zadanie 11
const getInputFromHTML = () => {
  const inputElement = document.querySelector("#first-name");

  const { value, name } = inputElement;
  console.log("value:", value);
  console.log("name", name);
};

getInputFromHTML();

//// Zadanie 1 - tworzenie elementu HTML

const header = document.createElement("h2");
header.textContent = "text header";

// console.log(header);

//// Zadanie 1 - zdarzenia - click

const buttonClick = document.querySelector("#button-click");

buttonClick.addEventListener("click", () => {
  console.log("dziala klik");
});

// zdarzenie change

const inputChange = document.querySelector("#input-change");
const inputLastName = document.querySelector("#last-name");

const newObject = {};

const onChange = (event) => {
  const { value, name } = event.target;

  newObject[name] = value;
  console.log(newObject);
};

inputChange.addEventListener("change", onChange);

inputLastName.addEventListener("change", onChange);

// zdarzenie submit

// zdarzenie submit wykonywane jest na formularzu, nie na przycisku

const myForm = document.querySelector("#my-form");

// I sposób na pobieranie danych
const emailInput = document.querySelector("#email");

myForm.addEventListener("submit", (event) => {
  // funkcja usuwajaca domyslnie zachowanie formularza
  event.preventDefault();
  // II sposób na pobieranie danych
  // const emailInputValue = document.querySelector("#email").value;

  console.log(emailInput.value);
});
