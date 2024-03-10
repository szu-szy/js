// wykład z dnia 10.03
// referencje obiektu
const a = {
  name: 'jestem a',
  age: 0,
}

// kopiowanie nieprawidłowe - poniewaz przekazujemy referencje do obiektu "a"
// const b = a;
// spread operator > "..." - kopiuje nam wszystkie wlasciwosci
const b = {
  ...a,
  name: 'jestem b',
  lastName: 'last name b'
}

// console.log('obiekt a', a)
// console.log('obiekt b', b)

// referencje tablic
const tabA = [1,2,3];

const tabB = [...tabA, 4,5,6];

// console.log(tabB)

// ## zakres funkcji i zmiennych
// zakres: globalny i lokalny

// zakres globalny
const globalVar = 0

// zakres lokalny
// const getVariable = () => {
//   const newItem = document.createElement('li')
//   const localVar = 10;
//   console.log(globalVar);
//   console.log(localVar);
// }

// const createList = () => {
//   console.log(newItem);
// }

// console.log('global var', globalVar);
// console.log('local var', localVar);

class Vehicle {
  constructor(hp) {
    this.horsePower = hp;
  }

  turnOn = () => {
    console.log(`hp: ${this.horsePower} ON`);
  }
}

class Car extends Vehicle {
  constructor(hp, color) {
    super(hp);
    this.color = color;
  }

  // nadpisanie metody z klasy Vehicle
  turnOn = () => {
    console.log('samochód turn on')
  }

  giveVoice = () => console.log(`jestem autem koloru ${this.color}`);
}

const car = new Car(100, 'red');
car.turnOn();
car.giveVoice();
console.log(car.color)


