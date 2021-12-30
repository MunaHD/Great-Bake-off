
//kata 12 The Great Codeville Bake-off

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i in recipes) {
    let name = recipes[i].name;
    // this is the array of elements that I want to check for
    let recipeIngredients = recipes[i].ingredients;
    //.some method check to see if there is at least 1 element that passes the condition
    // in this case it checks if the bakery array includes any elements from the recipe array
    if (recipeIngredients.some(el => bakeryA.includes(el)) && recipeIngredients.some(el => bakeryB.includes(el))) {
      return name;
    }
  }
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));



bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

