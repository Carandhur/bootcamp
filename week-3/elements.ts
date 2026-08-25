//code elements.ts
const element = [
  {
    id: "E-001",
    category: "wall",
    condition: "good",
    lastInspected: new Date(2022, 3, 2),
  },
];

console.log(`Last element: ${element[8]}`); //undefinied
console.log(`Element objects : ${element.length}`); //element lenght = number of objects = 1

const addition = element.push(
  {
    id: "E-002",
    category: "roof",
    condition: "fair",
    lastInspected: new Date(2025, 5, 15),
  },
  {
    id: "E-003",
    category: "window",
    condition: "fair",
    lastInspected: new Date(2025, 2, 15),
  },
  {
    id: "E-004",
    category: "pergola",
    condition: "poor",
    lastInspected: new Date(2023, 5, 15),
  },
  {
    id: "E-005",
    category: "door",
    condition: "good",
    lastInspected: new Date(2025, 11, 11),
  },
  {
    id: "E-006",
    category: "balcony",
    condition: "good",
    lastInspected: new Date(2019, 11, 15),
  },
);

console.log(addition); // should print 6 after the push
console.log(`Element objects : ${element.length}`); // should be 6 after the push

console.log(element.at(-1)); //Shows last element should be E-006

console.log(element.pop()); // shows the E-006 just deleted
console.log(element.at(-1)); //last element should be E-005

const copy = element.slice(0, 2); // copy E-001 and E-002
console.log(copy); // shows E-001 and E-002
console.log(element); // shows 5 objects
const double = [...element]; // new array
const oneMore = [
  ...element,
  {
    id: "E-007",
    category: "pool",
    condition: "fair",
    lastInspected: new Date(2021, 2, 3),
  },
]; // new array
console.log(`double objects : ${double.length}`); // should be 5 objects

console.log(`oneMore objects : ${oneMore.length}`); // should be 6 objects
console.log(`Original element objects : ${element.length}`); // should be 5 objects

const change = [...element];

console.log(`change objects : ${change.length}`); // should be 5 objects
console.log(`element object 1 category: ${element[0]!.category}`); //first object category
change[0]!.category = "helicopter"; //category change on both element and change array
console.log(`change object 1 category: ${change[0]!.category}`); //first object category of change array
console.log(`element object 1 category: ${element[0]!.category}`); //first object category of element array same as change array
const deepCopy = structuredClone(element);
console.log(deepCopy);
deepCopy[0]!.category = "wall"; // changes the first object only
console.log(`fix object 1 category: ${deepCopy[0]!.category}`); //first object category of element array same as change array
console.log(`element object 1 category: ${element[0]!.category}`); //first object category of element array same as change array
