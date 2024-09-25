//Task 1: Variables and Operators
const personName = "Reymart"; 
const personAge = 20;          
const personCity = "Baguio"; 

const currentYear = new Date().getFullYear();
const birthYear = currentYear - personAge;

const isPersonAdult = personAge >= 18;

const ageRemainder = personAge % 5;

document.getElementById("name").innerText = `Name: ${personName}`;
document.getElementById("age").innerText = `Age: ${personAge}`;
document.getElementById("city").innerText = `City: ${personCity}`;
document.getElementById("yearBorn").innerText = `Year Born: ${birthYear}`;
document.getElementById("isAdult").innerText = `Is Adult: ${isPersonAdult}`;
document.getElementById("remainder").innerText = `Remainder when age is divided by 5: ${ageRemainder}`;




//Task 2: String Manipulation 
const name2 = "Reymart";
const city2 = "Sagada";
const sentence = name2 + " from " + city2;

document.getElementById("sentence").innerText = sentence;

function toUpperCase(str) {
    return str.toUpperCase();
}

document.getElementById("upperCase").innerText = toUpperCase("quiboloy");

function firstOccurrenceOfA(str) {
    return str.indexOf('a');
}

document.getElementById("firstOccurrence").innerText = firstOccurrenceOfA("banana");

let originalString = "I am learning Javascript at school";
let updatedString = originalString.replace(/Javascript/g, "JS");

document.getElementById("updatedString").innerText = updatedString;





// Task 3: Array Manipulation
let favoriteFoods = ["Pizza", "Sushi", "Tacos", "Ice Cream", "Pasta"];

favoriteFoods.push("Burgers");
favoriteFoods.splice(1, 1);
favoriteFoods.sort();

function printFavoriteFoods(foods) {
    const foodList = document.getElementById("foodList");
    foods.forEach(food => {
        const listItem = document.createElement("li");
        listItem.innerText = food;
        foodList.appendChild(listItem);
    });
}

printFavoriteFoods(favoriteFoods);

document.getElementById("modifiedFoods").innerText = `Modified Favorite Foods: ${favoriteFoods.join(', ')}`;

