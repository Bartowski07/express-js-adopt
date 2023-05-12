const express = require("express");
const app = express();
const port = 3000;

const pets = require("./petList");

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Adopt a Pet</title>
  </head>
  <body>
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
    <li><a href="/animals/dogs">Dogs</a></li>
    <li><a href="/animals/cats">Cats</a></li>
    <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
  </body>
</html>
  `);
});

app.get("/animals/:pet_type", (req, res) => {
  const { pet_type } = req.params;
  res.send(`
    <html>
  <head>
    <title>Adopt a Pet</title>
  </head>
  <body>
    <h1>List of ${pet_type}</h1>
    <ul>
    ${petList
      .map(
        (pet) => `<li>${pet.name} - ${pet.age} years old - ${pet.breed}</li>`
      )
      .join("")}
    </ul>
    </ul>
  </body>
</html>
    `);
});

app.get("/animals/:pet_type/:pet_id", (req, res) => {
  const pet_type = req.params;
  const pet_id = req.params;
  const pet = pets[pet_type][pet_id];

  res.send(`
      <h1>${pet.name}</h1>
      <img src="${pet.url}" alt="${pet.name}">
      <p>${pet.description}</p>
      <ul>
        <li>Breed: ${pet.breed}</li>
        <li>Age: ${pet.age}</li>
      </ul>
    `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
