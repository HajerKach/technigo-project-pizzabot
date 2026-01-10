// Step 1 - Welcome and introduction
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

// Step 2 - Food choice
const foodMenu = {
    1: "Pizza",
    2: "Pasta",
    3: "Sallad"
};

let choice = Number(prompt(
    "Välkommen till vår Pizzeria Town, dagens meny innehåller tre olika maträtter, vilken vill du beställa: \n1. Pizza\n2. Pasta\n3. Sallad\n\nVälj din favorit rätt genom att ange en siffra i rutan."
));

let selectedFood = "";
let selectedSubType = "";

switch (choice) {
    case 1:
        selectedFood = "Pizza";
        alert("Du valde Pizza - Vår mest populära rätt!");

        let pizzaChoice = Number(prompt(
            "Vilken pizzatyp vill du ha? \n1. Margareta\n2. Pepperoni\n3. Kebabpizza\nAnge en siffra:"
        ));

        switch (pizzaChoice) {
            case 1:
                selectedSubType = "Margareta";
                alert("Du valde Pizza Margareta!");
                break;
            case 2:
                selectedSubType = "Pepperoni";
                alert("Din Pepperoni pizza blir snart klar!");
                break;
            case 3:
                selectedSubType = "Kebab";
                alert("Kebab Pizza, det fixar vi!");
                break;
            default:
                alert("Tyvärr vi har inte den typen av pizza, testa någon av våra andra alternativ.");
        }
        break;

    case 2:
        selectedFood = "Pasta";
        alert("Yammi Pasta - ett klassiskt val!");

        let pastaChoice = Number(prompt(
            "Vilken typ av pasta vill du ha? \n1. Ceasar pasta\n2. Tonfisk pasta\n3. Kebabpasta\nAnge en siffra:"
        ));

        switch (pastaChoice) {
            case 1:
                selectedSubType = "Ceasar";
                alert("Du valde Ceasar Pasta!");
                break;
            case 2:
                selectedSubType = "Tonfisk";
                alert("Din Tonfisk pasta blir snart klar!");
                break;
            case 3:
                selectedSubType = "Kebab";
                alert("Kebab Pasta, det fixar vi!");
                break;
            default:
                alert("Tyvärr vi har inte den typen av pasta, testa någon av våra andra alternativ.");
        }
        break;

    case 3:
        selectedFood = "Sallad";
        alert("Sallad är ett fräscht och hälsosamt alternativ!");

        let salladChoice = Number(prompt(
            "Vad vill du ha för toppning? \n1. Tonfisk och Lax\n2. Kyckling\n3. Kebab\nAnge en siffra:"
        ));

        switch (salladChoice) {
            case 1:
                selectedSubType = "Tonfisk och Lax";
                alert("Du valde Tonfisk som toppning, det fixar vi!");
                break;
            case 2:
                selectedSubType = "Kyckling";
                alert("Din Kycklings sallad blir snart klar!");
                break;
            case 3:
                selectedSubType = "Kebab";
                alert("Kebab på sallad, kommer strax!");
                break;
            default:
                alert("Tyvärr vi har inte den typen av toppning till sallad, testa någon av våra andra alternativ.");
        }
        break;

    default:
        alert("Du behöver välja ett annat alternativ. Välj 1, 2 eller 3.");
}

// Step 4 - Age
let customerAge = Number(prompt("Är denna beställning avsedd för barn eller vuxen? Vänligen ange ålder i rutan"));

if (customerAge <= 18) {
    alert("Vi förbereder en barnportion.");
} else {
    alert("Vi förbereder en portion för vuxen!");
}

// Step 5 - Order confirmation
let portionType = customerAge <= 18 ? "Barnportion" : "Vuxenportion";
let price = customerAge <= 18 ? 79 : 129;

let confirmMessage = prompt(
    "Ta en snabb titt på din beställning och bekräfta att allt stämmer, svara gärna med ja eller nej:\n\n" +
    "Maträtt: " + selectedFood + "\n" +
    "Typ: " + selectedSubType + "\n" +
    "Portion: " + portionType + "\n" +
    "Pris: " + price + " kr\n\n"
);

switch (confirmMessage.toLowerCase()) {
    case "ja":
        alert("Då är maten snart klar. Du kan hämta den i delivery box nr 6!\nTack för ditt besök och välkommen åter!");
        break;
    default:
        alert("Oj, vad tråkigt att det blev fel. Vi ber dig göra om din beställning!");
}
