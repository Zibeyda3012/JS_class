// const divItem = document.getElementsByClassName("divItem")[0];
// const changeTextBtn = document.getElementById("changeTextBtn");
// const changeElementVisibility = document.getElementById(
//   "changeElementVisibility"
// );

// console.log(divItem)

// changeTextBtn.addEventListener("click", () => {
//   console.log("Button clicked");
//   //   divItem.innerText = "New text added";
//   //   divItem.style.backgroundColor = "red";
//   //   divItem.style.fontSize = "30px";
//   //   divItem.classList.add("green");

//   const itemClasses = divItem.classList;
//   //   console.log(itemClasses);

//   const isGreen = itemClasses.contains("green");
//   //   console.log(isGreen);

//   if (isGreen) {
//     divItem.classList.remove("green");
//     divItem.classList.add("red");
//   } else {
//     divItem.classList.remove("red");
//     divItem.classList.add("green");
//   }
// });

// let isItemVisible = true;

// changeElementVisibility.addEventListener("click", () => {
//   //way 1

//   // isItemVisible = !isItemVisible;
//   // if(isItemVisible)
//   // {
//   //     divItem.style.display = "none";
//   //     changeElementVisibility.innerText = "Make Visible";
//   // }

//   // else{
//   //     divItem.style.display = "block";
//   //     changeElementVisibility.innerText = "Make Invisible";
//   // }

//   //way 2

//   divItem.classList.toggle("makeInvisible");
//   isItemVisible = !isItemVisible;
//   changeElementVisibility.innerText = isItemVisible
//     ? "Make Invisible"
//     : "Make Visible";
// });

// const data = [
//   {
//     name: "Zibeyda",
//     age: 21,
//     job: "developer",
//   },

//   {
//     name: "Vaqif",
//     age: 21,
//     job: "developer",
//   },

//   {
//     name: "Afet",
//     age: 20,
//     job: "developer",
//   },
// ];

// const container = document.getElementById("container");

// data.map((person) => {

//   //way 1

//   //   const div = document.createElement("div");
//   //   const h3 = document.createElement("h3");
//   //   const p = document.createElement("p");
//   //   const span = document.createElement("span");

//   //   h3.innerText = person.name;
//   //   p.innerText = person.job;
//   //   span.innerText = `Age: ${person.age}`;

//   //   div.appendChild(h3);
//   //   div.appendChild(p);
//   //   div.appendChild(span);

//   //   div.classList.add("cardItem");
//   //   container.appendChild(div);

//   //way 2

//   const div = `<div class="cardItem">
//     <h3>${person.name}</h3>
//     <p>${person.job}</p>
//     <span> Age: ${person.age}</span>
//     </div>`;

//   const containerContent= container.innerHTML;
//   container.innerHTML =`${containerContent} ${div}`;

// });

// const div = document.getElementsByTagName("div");

// const item = document.querySelector(".cardItem.green");
// const items = document.querySelectorAll(".cardItem.green");

// Class task

const container = document.getElementById("container");

const data = [
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero qui maiores ipsum sint velit ipsa perspiciatis placeat at, fugiat sit corrupti tenetur quos, autem eveniet alias repudiandae, dolorum odio.",
  },

  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero qui maiores ipsum sint velit ipsa perspiciatis placeat at, fugiat sit corrupti tenetur quos, autem eveniet alias repudiandae, dolorum odio.",
  },

  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero qui maiores ipsum sint velit ipsa perspiciatis placeat at, fugiat sit corrupti tenetur quos, autem eveniet alias repudiandae, dolorum odio.",
  },
];

data.map((text) => {
  const mainDiv = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const icon = document.createElement("i");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  icon.classList.add("fa-solid");
  icon.classList.add("fa-angle-down");

  h3.innerText = text.title;
  p.innerText = text.description;

  div1.appendChild(h3);
  div1.appendChild(icon);
  div2.appendChild(p);

  div1.style.display = "flex";
  div1.style.padding = "10px";
  div1.style.justifyContent="space-between";
  div1.style.border = "1px solid lightGray";
  div1.style.borderRadius = "10px";
  div2.style.display = "none";
  div2.style.border="1px solid lightGray";
  div2.style.borderTopColor="transparent";
  div2.style.padding="10px";

  mainDiv.appendChild(div1);
  mainDiv.appendChild(div2);


  mainDiv.addEventListener("click", () => {
    console.log("clicked");
    div2.classList.toggle("visible");
  });

  container.appendChild(mainDiv);
});
