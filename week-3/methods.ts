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
    category: "door",
    lastInspected: new Date(2016, 6, 25),
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
    category: "floor",
    lastInspected: new Date(2024, 7, 10),
    objectsInspected: 2,
  },
  {
    id: "E05",
    condition: "poor",
    category: "pool",
    lastInspected: new Date(2026, 2, 20),
    objectsInspected: 1,
  },
  {
    id: "E06",
    condition: "good",
    category: "balcony",
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

console.log(`Special cases*****************************************`); //false

console.log(firstOverdue(element, new Date(201, 8, 12))); //undefined

const empty: BuildingElement[] = [
  {
    id: "E06",
    condition: "good",
    category: "terrasse",
    lastInspected: new Date(2011, 2, 20),
    objectsInspected: 1,
  },
];
console.log(`Is any in poor condition : ${anyPoor(empty)}`); //false
