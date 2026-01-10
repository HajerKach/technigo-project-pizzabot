// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Food choice
// Your code goes here


// Step 3 - Subtype choice
// Your code goes here

const foodMenu = {
  1: "Pizza",
  2: "Pasta",
  3: "Sallad"
};

let choice = Number(prompt(
  "Välkommen till vår Pizzeria Town, dagens meny innehåller tre olika maträtter, vilken vill du beställa: \n1. Pizza\n2. Pasta\n3. Sallad\n\n Välj din favorti rätt genom att ange en siffra i rutan."
));

let selectedFood = "";
let selectedSubType = "";

if (choice === 1) {
  selectedFood = "Pizza";

  alert("Du valde Pizza - Vår mest populära rätt!");
  let pizzaChoice = Number(prompt(
    "Vilken pizzatyp vill du ha? \n1. Margareta\n2. Pepperoni\n3. Kebabpizza\n\ Ange en siffra:"
  ));
  if (pizzaChoice === 1) {
    alert("Du valde Pizza Margareta!");
    selectedSubType = "Margareta";
  } else if (pizzaChoice === 2) {
    selectedSubType = "Pepperoni";
    alert("Din Pepperoni pizza blir snart klar!");
  } else if (pizzaChoice === 3) {
    selectedSubType = "Kebab";
    alert("Kebab Pizza, det fixar vi! ");
  } else
    alert("Tyvärr vi har inte den typ av pizza, testa någon av våra andra alternativ.");


} else if (choice === 2) {
  selectedFood = "Pasta";
  alert("Yammi Pasta - ett klassiskt val!");

  let pastaChoice = Number(prompt(
    "Vilken typ av pasta vill du ha? \n1. Ceasar pasta\n2. Tonfisk pasta\n3. Kebabpasta\n\ Ange en siffra:"
  ));
  if (pastaChoice === 1) {
    selectedSubType = "Ceasar";
    alert("Du valde Ceasar Pasta!");
  } else if (pastaChoice === 2) {
    selectedSubType = "Tonfisk";
    alert("Din Tonfisk pasta blir snart klar!");
  } else if (pastaChoice === 3) {
    selectedSubType = "Kebab";
    alert("Kebab Pasta, det fixar vi! ");
  } else
    alert("Tyvärr vi har inte den typ av pasta, testa någon av våra andra alternativ.");


} else if (choice === 3) {
  selectedFood = "Sallad";
  alert("Sallad är ett fräscht och hälsosamt alternativ!")
  let salladChoice = Number(prompt(
    "Vad vill du ha för toppning? \n1. Tonfisk och Lax\n2. Kyckling\n3. Kebab\n\ Ange en siffra:"
  ));
  if (salladChoice === 1) {
    selectedSubType = "Tonfisk och Lax";
    alert("Du valde Tonfisk som toppning, det fixar vi!");
  } else if (salladChoice === 2) {
    selectedSubType = "Kyckling";
    alert("Din Kycklings sallad blir snart klar!");
  } else if (salladChoice === 3) {
    selectedSubType = "Kebab";
    alert("Kebab på sallad, kommer strax! ");
  } else
    alert("Tyvärr vi har inte den typ av toppning till sallad, testa någon av våra andra alternativ.");

} else {
  alert("Du behöver välja ett annat alternativ. Välj 1, 2 eller 3.")
};



// Step 4 - Age
// Your code goes here
let customerAge = Number(prompt(
  "Är denna beställning avsedd för barn eller vuxen? Vänligen ange ålder i rutan"
));

if (customerAge <= 18) {
  alert(" Vi förbereder en barn portion.");
} else { alert("Vi förbereder en portion för vuxen!") };



// Step 5 - Order confirmation
// Your code goes here

let portionType = "";
let price = 0;

if (customerAge <= 18) {
  portionType = "Barnportion";
  price = 79;
} else {
  portionType = "Vuxenportion";
  price = 129;
}

let confirmMessage = prompt(
  "Ta en snabb titt på din beställning och bekräfta att allt stämmer, svara gärna med ja eller nej:\n\n" +
  "Maträtt: " + selectedFood + "\n" +
  "Typ: " + selectedSubType + "\n" +
  "Portion: " + portionType + "\n" +
  "Pris: " + price + " kr\n\n" +
  ""
);
if (confirmMessage === "ja") {
  alert("Då är maten snart klar. Du kan hämta den i delivery box nr 6! \nTack för ditt besök och välkommen åter!")
} else {
  alert("Oj, Vad tråkigt att det blev fel. Vi ber dig göra om din bestälnning!")
}




