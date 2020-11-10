/* Opdracht: gebruik Eventhandlers (defer)
Voor het doen van deze opdracht gaan we losse files gebruiken:

index.html
script.js
style.css
We koppelen zoals we dat eerder gedaan hebben de JavaScript en CSS aan de HTML file.

De JavaScript moet voor deze opdracht per sé een losse file zijn omdat we gebruik maken van defer.


Opdracht 1: Een click event vastmaken aan een button

<!DOCTYPE html>
<html>
<head>
    <title>Practice Event Handlers</title>
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <button id="mybutton" type="button" class="btn-alert">Alert Me!</button>
</body>
</html>
Gebruik een click event en "attach" het click event aan de button
Wanneer er op de button geklikt wordt, geef een alert: "button clicked" (net zoals je in de video hebt gezien) */

const btn = document.querySelector(".btn-alert");
btn.addEventListener("click", () => {
   alert ("button clicked");
});


/* Opdracht 2:

Voeg een tweede button toe aan je HTML met de tekst "Change Background"

Voeg de volgende CSS toe in je CSS file

.blue-background {
background-color: blue;
}
.red-background {
background-color: red;
}
Geef de body tag de class "blue-background"

Maak een nieuwe functie die de volgende functionaliteiten in zich heeft:

Maak een klik event vast aan de nieuwe button

Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 

Na de click op de button ziet de class van je body tag er zo uit: class="blue-background red-background" . Door de volgorde van de CSS in de CSS file, zal de laatste stijl in je stylesheet toegepast. In dit geval staat in je stylesheet eerst de blauwe achtergrond en daarna de rode achtergrond gedefineerd. De body heeft nu 2 styles, waarvan de rode achtergrond nu toegepast zal worden. */

const btn2 = document.querySelector(".btn2");

const colorBtn = document.querySelector(".btn2");

const changeColor = () => {
    
    btn2.classList.add("red-background");
};
colorBtn.addEventListener("click", changeColor);


/* Opdracht 3:

We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er op de knop wordt geklikt. De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer afgehaald en er weer opgezet, etc.
Verander de naam van de functie van changeColor naar toggleColor
In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen. Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.

Inleveren

Deze opdracht kun je inleveren op de volgende pagina! */

const btn3 = document.querySelector(".btn3");

const toggleBtn = document.querySelector(".btn3");

const toggleColor = () => {
    
    btn3.classList.toggle("red-background");
};
toggleBtn.addEventListener("click", toggleColor);