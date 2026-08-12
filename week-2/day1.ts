const buildingId = "B-104"; //string
const conditionScore = 3.5; // number
const summary = `Building ${buildingId}`; // string
const elementCategory: string = "Roof";
const yearBuilt: number = 1998;
let currentCondition: string = "Good";
const hasDefect: boolean = false;
let inspectorNotes: string;

const floorCount: number = 7; //numbers dont need quotes
let isOverdue: boolean = true; //true or false only
const score: number = 3.5; //the "score = 4.0" is an error and should be deleted
const category: string = "Roof"; //strings should be on quotes
const lastInspected: string = "2024-03-15";
const nextDue: string = "2026-03-15";

console.log(
  `Element ${buildingId} last inspected ${lastInspected}, next due ${nextDue}`,
);
