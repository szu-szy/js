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
console.log('obiekt b', b)

// referencje tablic
const tabA = [1,2,3];

const tabB = [...tabA, 4,5,6];

console.log(tabB)