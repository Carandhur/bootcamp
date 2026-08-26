//code elements.ts
type Condition = "good" | "fair" | "poor";

interface ElementSize {
  area: string;
  color: string;
  location: string;
}

interface BuildingElement {
  id: string;
  category: string;
  condition: Condition;
  lastInspected: Date;
  size?: ElementSize; //Nested interface. this property may not be relevant to the inspection.
}

const element: BuildingElement[] = [
  {
    id: "E-001",
    category: "wall",
    condition: "good",
    lastInspected: new Date(2022, 3, 2),
    size: { area: "big", color: "red", location: "exterior" },
  },
];
console.log(`Last BuildingElement: ${element[8]}`); //Intentionally undefinied,
console.log(`element objects : ${element.length}`); //BuildingElement lenght = number of objects = 1
console.log(`element nested object property: ${element[0]!.size!.area}`); //big
console.log(
  `element nested bracket object property: ${element[0]!.size!["area"]}`,
); // Bracket notation is useful for a dynamic key or a key with special characters.

const addition = element.push(
  {
    id: "E-002",
    category: "roof",
    condition: "fair", //tesnting --noEmit error
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

console.log(addition); // should print the 6 after the push
console.log(`Element objects : ${element.length}`); // should be 6 after the push

console.log(element.at(-1)); //Shows last BuildingElement should be E-006

console.log(element.pop()); // shows the E-006 just deleted
console.log(element.at(-1)); //last BuildingElement should be E-005

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
console.log(`Original BuildingElement

 objects : ${element.length}`); // should be 5 objects

const change = [...element];

//  console.log(`change objects : ${change.length}`); // should be 5 objects
console.log(`BuildingElement
 object 1 category: ${element[0]!.category}`); //first object category
change[0]!.category = "6"; //category change on both BuildingElement and change array
console.log(`change object 1 category: ${change[0]!.category}`); //first object category of change array : helicopter
console.log(`BuildingElement
 object 1 category: ${element[0]!.category}`); //first object category of BuildingElement array same as change array: helicopter
const deepCopy = structuredClone(element);
console.log(deepCopy);
deepCopy[0]!.category = "wall"; // changes the first object only
console.log(`fix object 1 category: ${deepCopy[0]!.category}`); //wall : first object category of BuildingElement array same as change array
console.log(`BuildingElement
 object 1 category: ${element[0]!.category}`); //helicopter: first object category of BuildingElement array
