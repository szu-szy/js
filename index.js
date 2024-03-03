const value = 0;
const object = {};
const tab = [];
var varValue;

// gdzies tam w kodzie
varValue = 0;

// nie mozna
// object = { name: "tekst" };
// tab = [1, 2, 3];

// mozna
// sposób na obiekty, dorzucenie wartosci za pomoca properties
// sposób na tablice > metody tablicowe

// console.log(typeof value);
// console.log(tab);

// metody tablicowe

// zwracaja tablice
// map => [] - sluzy do modyfikacji elementow w tablicy
const items = ["grabie", "szczotka", "grzebien", "durszlak"];
// tak nie robimy
const modifiedItems = items.map((item) => {
  // jezeli item ma wiecej niz 6 znakow to zwroc item-dodatek
  if (item.length > 6) return `${item}-dodatek`;

  // w innym wypadku zwroc item
  return item;
});
// console.log(modifiedItems);

// filter => [] - sluzy do przefiltrowawnia tablicy po warunku
// tablica.filter(() => warunek)
// 1 iteracja
// const item = items[0]
// 2 iteracja
// const item = items[1]
// 3 iteracja
// const item = items[2]
const filteredItems = items.filter((item) => item.length > 6);
// console.log("przefiltrowana tablica", filteredItems);

// nic nie zwracaja
// forEach => undefined
const secondTab = [];
items.forEach((item) => {
  // dzieki iteracji dodajemy kazdy element do nowej tablicy
  secondTab.push(item);
  // console.log(item);
});

// console.log("second tab", secondTab);

// funkcja - function
// console.log("zmienna var", secondName);
// var secondName = "test";

const thirdValue = 0;
// console.log(thirdValue);

function add(a, b) {
  // console.log(a + b);

  // slowko kluczowe - return - mowi nam o tym co chcemy zwrocic z funkcji
  if (a + b > 3) return 4;

  return a + b;
}

// wywolanie funkcji - uruchomienie
const addValue = add(5, 2); // -> add zwraca nam a+b czyli 3 i mozemy to przypisac jako wartosc do zmiennej;

// console.log("addValue", addValue);

// funkcja anonimowa
// (a, b) => { return a+b }
// callback jest funkcja zwrotna ? nie zwracamy wartosci ale zwracamy funkcje

// gdy nie ma klamerek to  slowko return jest domyslnie po strzalce
// gdy zwracamy obiekt bez slowka "return" musimy owinac nawiasami => ({})
const someFunction = (a, b) => ({});

console.log("some function", someFunction(3, 4));

const secondSomeFunction = function addValues(a, b) {
  return a + b;
};
secondSomeFunction(5, 6);

// zadanie 2 za pomoca operatora trojskladnikowego > warunek ? jesli true : jesli false

// przed
const biggerValue = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

// po

const betterBiggerValue = (a, b) => (a > b ? a : b);

console.log(typeof betterBiggerValue(1, 2));

// switch

// obiekty
