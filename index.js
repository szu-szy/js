const value = 0;
const object = {};
const tab = [];

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
console.log(modifiedItems);

// filter => [] - sluzy do przefiltrowawnia tablicy po warunku
// tablica.filter(() => warunek)
const filteredItems = items.filter((item) => item.length > 6);
console.log("przefiltrowana tablica", filteredItems);

// nic nie zwracaja
// forEach => undefined
