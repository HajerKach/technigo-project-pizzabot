// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Food choice
// Your code goes here
const foodMenu = {
  1: "Pizza",
  2: "Pasta",
  3: "Sallad"
};

let choice = Number(prompt(
  "Välkommen till vår Pizzeria Town, dagens meny innehåller tre olika rätter, vilken vill du beställa: \n1. Pizza\n2. Pasta\n3. Sallad\n\n Välj din favorti rätt genom att ange en siffra i rutan."
));

if (choice === 1) {
  alert("Du valde Pizza - Vår mest populära rätt!");
} else if (choice === 2) {
  alert("Yammi Pasta - ett klassiskt val!")
} else if (choice === 3) {
  alert("Sallad är ett fräscht och hälsosamt alternativ!")
} else {
  alert("Du behöver välja ett annat alternativ. Välj 1, 2 eller 3.")
};


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
