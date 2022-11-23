import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Alfredo Pasta",
    servings: 2,
    cookTime: "0:45",
    instructions:
      "1. Boil Penne Pasta\n2. Make White sauce\n3. [optional]Fry Exotic Vegs to add in pasta\n4. Add Pasta and Veggies to White Sauce and serve hot.",
  },
  {
    id: 2,
    name: "Veg Grilled Cheese Sandwhich",
    servings: 1,
    cookTime: "0:30",
    instructions:
      "1. Stir Fry Veggies\n2. Let them Cool and add Mayo sauce and Spicies to make the tasty filling\n3. Take two bread Slices and Apply Butter on outer sides\n4. Fill in with Veggie Filling and add cheese slice\n5. Grill it, Enjoy it.",
  },
];

export default App;
