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
const fetchUsers = async () => {
  const usersURL = "https://dummyjson.com/users1231231231";

  try {
    const response = await fetch(usersURL);

    // przyklad wyrzucania bledow
    // const myError = {
    //   message: "Cos nie tak",
    //   name: "my error",
    // };
    // if (!response.ok) throw myError;
    if (!response.ok) throw new Error("Something wrong with fetch");

    // wyciaganie userow od razu
    // const { users } = await response.json();

    // wyciaganie data i dopiero potem odczytanie users
    const data = await response.json();
    // const users = data.users;
    console.log(data.users);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

// fetchUsers();

// fetch - PUT przykład
// endpoint - https://dummyjson.com/users/:id

const updateUser = async (id) => {
  const userURL = `https://dummyjson.com/users/${id}`;

  const userUpdate = {
    firstName: "nowe imie",
  };
  // opcja alternatywna - moze komus przypasuje (osobiscie nie uzywam)
  // const fetchOptions = {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(userUpdate),
  // };

  try {
    // opcja ktorej uzywam - przekazanie jako II parametru obiektu bezposrednio
    const response = await fetch(userURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    });

    if (!response.ok) throw new Error("Cannot update user!");

    // serwer zwraca zaktualizowane dane
    const updatedUser = await response.json();

    console.log(updatedUser);
    alert("udało sie", updatedUser);
  } catch (error) {
    console.log(error);
  }
};

updateUser(1);
