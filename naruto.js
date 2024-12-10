/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/

const appDiv = document.querySelector(".app");

const cards = [
  {
    title: "naruto",
    description: "alsjd jalks jdalskf jlasjf ",
    imgUrl: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
  },
  {
    title: "sasuke",
    description: "alsjd jalks jdalskf jlasjf ",
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZTLj5DaybiUlsUst8BQn1_1_a5wk4e_JzJOcQ7C2cqEX41ZQI2HPStuiG_ZUknTwrSHtQFoXAm1PAc1BPSS9KFv5OhMbYTnYEV4SKew",
  },
  {
    title: "hinata",
    description: "alsjd jalks jdalskf jlasjf ",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1z_HuHKFeM--sICVIkz2hlrFWM8lnZGZrwQ&s",
  },
  {
    title: "gaara",
    description: "alsjd jalks jdalskf jlasjf ",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTu54Es37QxGtWjWGnt3ksW8rH663OQuyJGA&s",
  },
];

function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  //<div class="card"></div>
  // <img />
  appDiv.appendChild(cardDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const pTag = document.createElement("p");
  pTag.innerText = description;
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", imgUrl);

  cardDiv.appendChild(h2);
  cardDiv.appendChild(pTag);
  cardDiv.appendChild(imgTag);
}

// generateCard(
//   "Naruto",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
//   "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
// );
// containerItems.map((item) => {
//     addTaskList(item.title, item.color, item.count, item.id);
//   });
cards.map((card) => {
  generateCard(card.title, card.description, card.imgUrl);
});
