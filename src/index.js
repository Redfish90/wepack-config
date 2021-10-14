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
