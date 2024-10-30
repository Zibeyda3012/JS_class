// expression

// async function getUsers()
// {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const data = await response.json;
//    console.log(data);
// }

// getUsers();

// const container = document.getElementById("container");

// // declaration
// const getUsers = async() =>
// {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const data = await response.json();

//    createUserItems(data);
// }

// getUsers();

// const userItem = (user) => {
//    const div = document.createElement("div");
//    const h3 = document.createElement("h3");
//    const p = document.createElement("p");

//    h3.innerText = user.name;
//    p.innerText = user.email;

//    div.append(h3);
//    div.append(p);
//    div.classList.add("userItem");

//    container.append(div);
// }

// const createUserItems = (users) =>
// {
//     users.map(user => {
//         userItem(user);
//     })
// }

const container = document.getElementById("container");

const getData = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  createAlbumItems(data);
};

const albumItem = (item) => {
  const div =document.createElement("div");
  const title =document.createElement("p");
  const id =document.createElement("p");

  title.innerText = item.title;
  id.innerText = item.id;
  id.classList.add("id");
  div.append(title);
  div.append(id);
  div.classList.add("albumItem");

  container.append(div);

}


const createAlbumItems = (albums) =>{
    albums.map(album => {
        albumItem(album);
    })
}

getData();
