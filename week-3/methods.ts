//methods.ts

type Condition = "poor" | "fair" | "good";

interface BuildingElement {
  id: string;
  condition: Condition;
  category: string;
  lastInspected: Date;
  objectsInspected: number;
  notes?: string;
}

const elementVide: BuildingElement[] = [];
const element: BuildingElement[] = [
  {
    id: "E01",
    condition: "good",
    category: "wall",
    lastInspected: new Date(2018, 2, 25),
    objectsInspected: 2,
  },
  {
    id: "E02",
    condition: "good",
    category: "wall",
    lastInspected: new Date(2005, 6, 25),
    objectsInspected: 3,
  },
  {
    id: "E03",
    condition: "poor",
    category: "roof",
    lastInspected: new Date(2025, 2, 15),
    objectsInspected: 1,
  },
  {
    id: "E04",
    condition: "fair",
    category: "pool",
    lastInspected: new Date(2024, 7, 10),
    objectsInspected: 2,
  },
  {
    id: "E05",
    condition: "poor",
    category: "roof",
    lastInspected: new Date(2026, 2, 20),
    objectsInspected: 1,
  },
  {
    id: "E06",
    condition: "good",
    category: "floor",
    lastInspected: new Date(2025, 2, 3),
    objectsInspected: 2,
  },
];

function poorElements(elements: BuildingElement[]): BuildingElement[] {
  return elements.filter((n) => n.condition === "poor");
}
console.log(poorElements(element));

function summaries(elements: BuildingElement[]): string[] {
  return elements.map((n) => `${n.id} (${n.category}): ${n.condition}`);
}
console.log(summaries(element));

function firstOverdue(
  elements: BuildingElement[],
  cutoff: Date,
): BuildingElement | undefined {
  return elements.find((n) => n.lastInspected < cutoff);
}
console.log(firstOverdue(element, new Date(2020, 8, 12))); //Array element

function anyPoor(elements: BuildingElement[]): boolean {
  return elements.some((n) => n.condition === "poor");
}
console.log(`Is any in poor condition : ${anyPoor(element)}`); //true

function allInspectedSince(elements: BuildingElement[], cutoff: Date): boolean {
  return elements.every((n) => n.lastInspected > cutoff);
}
console.log(
  `All Elements inspected after deadline: ${allInspectedSince(element, new Date(2024, 5, 10))}`,
); //false
console.log(allInspectedSince([], new Date(2024, 5, 10))); // => true

console.log(`Special cases*****************************************`); //false

console.log(firstOverdue(element, new Date(2010, 8, 12))); //undefined

const noPoor: BuildingElement[] = [
  {
    id: "E06",
    condition: "good",
    category: "terrasse",
    lastInspected: new Date(2011, 2, 20),
    objectsInspected: 1,
  },
];
console.log(`Is any in poor condition : ${anyPoor(noPoor)}`); //false
console.log(
  `*****************************************************************`,
);

function conditionScore(elements: BuildingElement[]): number {
  const score = new Map<string, number>();
  score.set("poor", 1);
  score.set("fair", 2);
  score.set("good", 3);

  if (elements.length === 0) {
    return 0;
  }
  const average = elements.reduce(
    (sum, n) => sum + (score.get(n.condition) ?? 0),
    0,
  );

  return average / elements.length;
}
console.log(conditionScore(element));
console.log(conditionScore(elementVide));
/*
conditionScore: what is sum carrying during reduce? sum starts at 0 and keeps the running total 
of he condition weights; each loop adds the current element’s weight, and the final total is divided by the number of elements to get the average.
*/
console.log(
  `*****************************************************************`,
);

function countByCategory(elements: BuildingElement[]): Map<string, number> {
  const cat = new Map<string, number>();
  for (const object of elements) {
    cat.set(object.category, (cat.get(object.category) ?? 0) + 1);
  }
  return cat;
}
console.log(countByCategory(element));

//countByCategory: how does the Map count categories? by adding 1 to the 0 get call, then it continues from there as the loop executes

console.log(
  `*****************************************************************`,
);

function distinctCategories(elements: BuildingElement[]): string[] {
  const ca = elements.map((n) => n.category);
  const uniq = [...new Set(ca)];
  return uniq;
}
console.log(distinctCategories(element));
//distinctCategories: why does Set remove duplicates? distinctCategories: Set removes duplicate category strings, leaving each category only once.

console.log(
  `*****************************************************************`,
);

function sortByLastInspected(elements: BuildingElement[]): BuildingElement[] {
  const last = [...elements].sort(
    (a, b) => a.lastInspected.getTime() - b.lastInspected.getTime(),
  );

  return last;
}
//console.log(sortByLastInspected(element));
/*sortByLastInspected: why does subtracting the two .getTime() values put older dates first? 
sortByLastInspected:older dates have smaller getTime() numbers, so a - b is negative when a is older, which puts a first.
*/
console.log(
  "BEFORE:",
  element.map((n) => n.id),
);

const sorted = sortByLastInspected(element);

console.log(
  "SORTED:",
  sorted.map((n) => n.id),
);

console.log(
  "AFTER:",
  element.map((n) => n.id),
);
