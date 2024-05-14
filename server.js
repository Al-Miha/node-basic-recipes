import express from "express";
import recipes from "./recipes.js";

const port = 5000;

const app = express();
app.enable("trust proxy");

app.get("/", (req, res) => {
  // console.log(req.ip);
  // console.log("test log");
  res.send(`<h1>API is running..., your IP is ${req.ip}</h1>`);
});

app.get("/api/recipes", (req, res) => {
  const recipesAll = recipes.map(function (recipe) {
    return {
      id: recipe.id,
      time: recipe.time,
      name: recipe.name,
      type: recipe.type,
      image: recipe.image,
      category: recipe.category,
    };
  });
  res.json(recipesAll);
});

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((recipe) => recipe.id === req.params.id);
  res.json(recipe);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
