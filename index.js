console.log("Welcome to the array & DOM challenges");

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = ["Hello", "my", "name", "is", "John"];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {
    input.forEach(function(element) {
        console.log(element);
    });
}

logArrayElements(arr);

console.log("\n");

// -----------CHALLENGE 2----------
// INSTRUCTIONS: use Array.map() to return a new array with the uppercase elements
// expected result:

function transformUppercase(input) {
    const newArray = input.map(function(element) {
        return element.toUpperCase();
    });
    return newArray;
}

console.log(transformUppercase(arr));

console.log("\n");

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'

function reduceStrings(input) {
    const newArray = input.reduce((acc, val) => {
        return acc + " " + val;
    });
    return newArray;
}

console.log(reduceStrings(arr));
console.log("\n");

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.map() to return an array containing the city of each element
// expected result:
// [
//     'Berlin',
//     'New York',
//     'Sydney',
//     'Tokyo',
// ];

// DO NOT TOUCH BELOW
arr = [
    {
        name: "John",
        address: { city: "Berlin" }
    },
    {
        name: "Albert",
        address: { city: "New York" }
    },
    {
        name: "Hannah",
        address: { city: "Sydney" }
    },
    {
        name: "Paul",
        address: { city: "Tokyo" }
    }
];
// DO NOT TOUCH ABOVE

function getCitiesArray(input) {
    const citiesArray = input.map(function(element, index) {
        return element.address.city;
    });
    return citiesArray;
}

console.log(getCitiesArray(arr));
console.log("\n");

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {
    const personSydney = input.find(function(element, index) {
        if (element.address.city === "Sydney") {
            return true;
        }
    });
    return personSydney;
}

console.log(getSydneyCitizen(arr));
console.log("\n");

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.filter() to return a new Array with persons older than 24 years
// expected result:
// [
//     {
//         name: 'Hannah',
//         age: 36
//         address: { city: 'Sydney' },
//     },
//     {
//         name: 'Paul',
//         age: 48,
//         address: { city: 'Tokyo' },
//     },
// ];

// DO NOT TOUCH BELOW
arr.forEach(function(el, index) {
    el.age = (index + 1) * 12;
});
// DO NOT TOUCH ABOVE
function getWisePeople(input) {
    const wiserPerson = input.filter(function(element) {
        if (element.age > 24) return element;
    });
    return wiserPerson;
}

// UNCOMMENT BELOW
console.log(getWisePeople(arr));
console.log("\n");

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.slice() to return a new array with the two people in the middle
// expected result:
// [
//     {
//         name: 'Albert',
//         age: 24,
//         address: { city: 'New York' },
//     },
//     {
//         name: 'Hannah',
//         age: 36,
//         address: { city: 'Sydney' },
//     },
// ]

function getMiddlePeople(input) {
    return input.slice(1, 3);
}

// UNCOMMENT BELOW
console.log(getMiddlePeople(arr));
console.log("\n");

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight)
// of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {
    const paragraphs = Array.from(document.querySelectorAll("p"));
    const paragHeight = paragraphs.map(function(element, index) {
        return element.clientHeight;
    });
    return paragHeight;
}

// UNCOMMENT BELOW
console.log(getParagraphHeights());
console.log("\n");

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {
    const paragraph1 = document.querySelector("p");
    const paragraphOne = Object.keys(paragraph1.style);
    const mKeys = paragraphOne.filter(function(element) {
        if (element[0] === "m" || element[0] === "M") {
            return true;
        }
    });
    return mKeys;
}

// UNCOMMENT BELOW
console.log(getFilteredStyleKeys());
console.log("\n");

// -----------CHALLENGE 7----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element.
// You can set just any text inside.

function changeHtml() {
    const allParagraphs = Array.from(document.querySelectorAll("p"));
    allParagraphs.forEach(function(element) {
        element.innerHTML = "Pilalla – Pelkkää paskaa tilalla";
    });
    return allParagraphs;
}

// UNCOMMENT BELOW
changeHtml();
