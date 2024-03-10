const userForm = document.querySelector('#user-form');
const userList = document.querySelector('#user-list');
const userEmail = document.querySelector('#user-email');
const userPassword = document.querySelector('#user-password');
const userTab = [
  {email: 'email1@gmail.com', password: 'haslo1'},
  {email: 'email2@gmail.com', password: 'haslo2'},
  {email: 'email3@gmail.com', password: 'haslo3'},
]

// ## Zadanie 2 - Tworzenie listy na bazie danych 
// 1. Utwórz w HTML liste <ul> - aktualnie bedzie pusta +
// 2. Utwórz funkcje która będzie dodawać element <li> do listy z danymi przekazanymi jako parametr funkcji
const createListElement = (email, password) => {
  const elementList = document.createElement('li');
  const elementListBtn = document.createElement('button');
  // dodaje tresc do elementu listy
  elementList.textContent = `Email: ${email}, Hasło: ${password}`;
  elementListBtn.textContent = 'Usun element z listy';

  elementListBtn.addEventListener('click', () => elementList.remove());
  
  elementList.append(elementListBtn);
  // dodaje do listy
  userList.append(elementList);
}
// 3. Wywolaj na początku funkcje na "sucho" przekazujac statyczne dane
createListElement('123', 'haslo123')
// 4. Jezeli utworzyło nam element w tablicy i wyswietlioło się to w przeglądarce to spróbuj wywolać funkcje powyżej> w funkcji która pobiera dane z formularza

// ## Zadanie 1 -  pobieranie danych z formularza
// 1. Utwórz formularz z dwoma polami email i password +
// 2. Utwórz funkcje która bedzie pobierać wartości z utworzonego formularza
const getData = (event) => {
  event.preventDefault();
  console.log(`Email: ${userEmail.value}, Haslo: ${userPassword.value}`);
  createListElement(userEmail.value, userPassword.value);
}
// 3. Pobierz formularz +
// 4. Nadaj event listener dla formularza, przekazujac referencje utworzonej powyzej funkcji
userForm.addEventListener('submit', getData);
// 5. Przetestuj logike +

//// Zadanie 4 - dodawanie listy elementów na bazie tablicy
userTab.forEach(({email, password}) => createListElement(email, password))