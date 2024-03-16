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

fetchUsers();

const catchFunction = (paramError) => console.log(paramError);
