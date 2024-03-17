// dzielenie pliku na 3 glowwne segmentu
// zmienne - deklaracja zmiennych
// funkcje
// nadawanie eventoww

// II sposoby zapisu fetch

// I sposób przy uzyciu function
async function fetchData() {
  const response = await fetch("endpoint");
  console.log(reponse);
}

// II sposób funkcja strzałkowa
const getData = async () => {
  const reponse = await fetch("endpoint");
};

// fetch - GET przykład
// const fetchUsers = async () => {
//   const usersURL = "https://dummyjson.com/users1231231231";

//   try {
//     const response = await fetch(usersURL);

//     // przyklad wyrzucania bledow
//     // const myError = {
//     //   message: "Cos nie tak",
//     //   name: "my error",
//     // };
//     // if (!response.ok) throw myError;
//     if (!response.ok) throw new Error("Something wrong with fetch");

//     // wyciaganie userow od razu
//     // const { users } = await response.json();

//     // wyciaganie data i dopiero potem odczytanie users
//     const data = await response.json();
//     // const users = data.users;
//     console.log(data.users);
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// };

// fetchUsers();

// fetch - PUT przykład
// endpoint - https://dummyjson.com/users/:id

// const updateUser = async (id) => {
//   const userURL = `https://dummyjson.com/users/${id}`;

//   const userUpdate = {
//     firstName: "nowe imie",
//   };
//   // opcja alternatywna - moze komus przypasuje (osobiscie nie uzywam)
//   // const fetchOptions = {
//   //   method: "PUT",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(userUpdate),
//   // };

//   try {
//     // opcja ktorej uzywam - przekazanie jako II parametru obiektu bezposrednio
//     const response = await fetch(userURL, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userUpdate),
//     });

//     if (!response.ok) throw new Error("Cannot update user!");

//     // serwer zwraca zaktualizowane dane
//     const updatedUser = await response.json();

//     console.log(updatedUser);
//     alert("udało sie", updatedUser);
//   } catch (error) {
//     console.log(error);
//   }
// };

// updateUser(1);

// fetch - POST przykład
// endpoint - https://dummyjson.com/users/add
// body parametr => typu obiekt user

// const createUser = async (body) => {
//   try {
//     const response = await fetch("https://dummyjson.com/users/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) throw new Error("Cannot create user with those data");

//     const createdUser = await response.json();

//     alert(`Pomyslnie dodano uzytkownika ${createdUser.firstName}!`);
//     console.log(createdUser);
//   } catch (error) {
//     console.log(error);
//   }
// };

const newUser = {
  firstName: "Tadek",
};

// walidacja czy imie istnieje w obiekcie
if (newUser.firstName) {
  // createUser(newUser);
}

const createProduct = async (body) => {
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error("Cannot add product");

    const addProduct = await response.json();
    console.log("Product added successfully", addProduct);
  } catch (error) {
    console.log(error);
  }
};
const newProduct = {
  title: "New Product",
};
createProduct(newProduct);

// kogos nie interesuje obsluga zwrotu i chce szybko usunac - nie zalecam bo zero informacji
// I sposob
const deleteProduct = async (id) => {
  try {
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });

    alert("pomyslnie usunieto");
  } catch (e) {
    console.log(e);
  }
};
// II sposób
const deleteOneProduct = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("cannot delete product");

    const product = await response.json();

    alert(`pomyslnie usunieto ${product.title}`);
  } catch (e) {
    console.log(e);
  }
};

// Zadania z dnia 16.03

// 1. stworz przycisk do pobierania danych napisz funkcje za pomoca metodych fetch do pobierania listy
// uzytkownikow lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku aby to sie
// wykonalo musimy dodac event listener do przycisku na event click
// https://dummyjson.com/users
const fetchUsersBtn = document.querySelector("#fetch-users-btn");

const fetchUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");

    if (!response.ok) throw new Error("Something wrong with fetching users!");

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 2. na bazie zadania poprzedniego utworz funkcje ktora na bazie pobranej listy dodaje nam elementy do listy uzytkownikow
// 3. kazdy z elementów powinien miec przycisk do usuwania aktualnego elementu,
// element powinien zostac usuniety z widoku oraz wyslac zapytanie o usuniecie uzytkownika po ID
const userList = document.querySelector("#user-list");

const deleteUser = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);

    if (!response.ok) throw new Error("Cannot delete user");

    const data = await response.json();
    alert("pomyslnie usunieto uzytkownika");
    // II opcja na usuniecie elementu z listy
    // trzeba dodac do parametrow listItem aby miec do niego dostep
    // listItem.remove();
  } catch (error) {
    console.log(error);
  }
};

const createUserItem = (firstName, lastName, id) => {
  const listItem = document.createElement("li");
  const listItemBtn = document.createElement("button");

  listItem.textContent = `${firstName} - ${lastName}`;
  listItemBtn.textContent = "Usuń";

  listItemBtn.addEventListener("click", () => {
    deleteUser(id);
    listItem.remove();
  });

  listItem.append(listItemBtn);
  userList.append(listItem);
};

const createUserList = async () => {
  const { users } = await fetchUsers();

  users.forEach(({ firstName, lastName, id }) =>
    createUserItem(firstName, lastName, id)
  );
};

fetchUsersBtn.addEventListener("click", createUserList);

// 4. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100 stworz
// funkcje do pobierania pojedynczego uzytkownika przypisz do formularza utworzona funkcje
// po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli

const fetchUserForm = document.querySelector("#fetch-user-form");
const userIdInput = document.querySelector("#user-id");

const fetchUser = async (event) => {
  event.preventDefault();
  const userID = userIdInput.value;
  try {
    const response = await fetch(`https://dummyjson.com/users/${userID}`);

    if (!response.ok) throw new Error("cannot fetch user!");

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

fetchUserForm.addEventListener("submit", fetchUser);

// 5. stworz formularz ktory bedzie aktualizowal firstName oraz lastName
// uzytkownika formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko)
// oraz przycisk input od id powinien byc sprawdzany (min=1, max=100) napisz funkcje ktora
// pobiera dane z formularza oraz aktualizuje wybranego uzytkownika przypisz funkcje jako event listener do formularza

const updateUserForm = document.querySelector("#update-user-form");
const updateUserIdInput = document.querySelector("#update-user-id");
const userFirstNameInput = document.querySelector("#user-first-name");
const userLastNameInput = document.querySelector("#user-last-name");

const updateUser = async (event) => {
  event.preventDefault();

  const userID = updateUserIdInput.value;

  const userUpdateData = {
    firstName: userFirstNameInput.value,
    lastName: userLastNameInput.value,
  };

  try {
    const response = await fetch(`https://dummyjson.com/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdateData),
    });

    if (!response.ok) throw new Error("Cannot update data!");

    const { firstName } = await response.json();

    alert(`pomyslnie zaktualizowane uzytkownika: ${firstName}`);
  } catch (error) {
    console.log(error);
  }
};

updateUserForm.addEventListener("submit", updateUser);

// 6. stworz formularz do utworzenia nowego uzytkownika stworz funkcje ktora bedzie pobierac
// pola z formularza i tworzyc na ich bazie nowego uzytkownika w bazie po utworzeniu dajmy
//  alert dla uzytkownika o nowym produkcie pamietamy o sprawdzeniu czy dane nie sa puste
// dodajemy event listener do formularza z referencja funkcji

const newUserForm = document.querySelector("#new-user-form");
const newUserFirstNameInput = document.querySelector("#new-user-first-name");

const createUser = async (event) => {
  event.preventDefault();

  const newUser = {
    firstName: newUserFirstNameInput.value,
  };

  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) throw new Error("Cannot create user!");

    const { firstName, lastName, id } = await response.json();

    alert(`pomyslnie dodano: ${firstName}`);
    createUserItem(firstName, lastName, id);
  } catch (error) {
    console.log(error);
  }
};

newUserForm.addEventListener("submit", createUser);
