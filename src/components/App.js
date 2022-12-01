import React from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
  {
    id: 1,
    title: "Alfredo Pasta",
    servings: 3,
    cookTime: 45,
    instructions:
      "1. Make White sauce,\n2. Fry Veggies and boil penne pasta,\n3. Add veggies and pasta to white sauce,\n4. Serve With Herbs.\n",
    ingredients: [
      {
        id: 1,
        name: "Milk",
        amount: "500ml",
      },
      {
        id: 2,
        name: "Pasta",
        amount: "200gm",
      },
      {
        id: 3,
        name: "Cheese",
        amount: "1 cube",
      },
    ],
  },
  {
    id: 2,
    title: "Arrabiata Pasta",
    servings: 3,
    cookTime: 45,
    instructions:
      "1. Make Tamato Pury,\n2. Cook Pury with Onion and Garlic,\n3. Add Ketchup and Spices,\n4. Add Boiled Pasta into the sauce and enjoy.\n",
    ingredients: [
      {
        id: 1,
        name: "Tamato",
        amount: "4",
      },
      {
        id: 2,
        name: "Pasta",
        amount: "200gm",
      },
      {
        id: 3,
        name: "Cheese",
        amount: "1 cube",
      },
    ],
  },
];

export default App;
