import { useState } from "react";

const elvenShiedlRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntlRecipe = {
  ...elvenShiedlRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

console.log(elvenShiedlRecipe);
console.log(elvenGauntlRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShiedlRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntlRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
