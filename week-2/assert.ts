//assert.ts
//Module for testing functions

//CONVERSION FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/**
 * This function converts values from meters to feet.
 * @param meters asks the value in meters.
 * @returns the value in feet.
 */
function metersToFeet(meters: number): number {
  let feet = meters * 3.28084;
  return feet;
}

//-----------------------------------------------------------------------------------------------------------

/**
 * This function converts values from feet to meters.
 * @param feet asks for the value in feet.
 * @returns the value in meters.
 */
const feetToMeters = (feet: number): number =>
  Math.round((feet / 3.28084) * 100) / 100;

//-----------------------------------------------------------------------------------------------------------

/**
 * Converts a value in square meters to square feet.
 * @param sqm asks for the value in square meters.
 * @returns the value in square feet.
 */
const squareMetersToSquareFeet = (sqm: number): number => sqm * 10.7639;

//HELPER FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Range 0-50 "Good"> 80 | "Fair" 50-80  | "Poor" 0-50| "Invalid";
/**
 * This function identifies the condition of an element according to 4 criteria.
 */
type Grade = "Good" | "Fair" | "Poor" | "Invalid";
function gradeCondition(score: number): Grade {
  if (!Number.isFinite(score)) {
    return "Invalid";
  } else if (score < 0) {
    return "Invalid";
  } else if (score <= 49) {
    return "Poor";
  } else if (score <= 79) {
    return "Fair";
  } else if (score <= 100) {
    return "Good";
  } else {
    return "Invalid";
  }
}

//-----------------------------------------------------------------------------------------------------------
function conditionColor(grade: string) {
  switch (grade) {
    case "Good":
      return "green";
    case "Fair":
      return "amber";
    case "Poor":
      return "red";
    default:
      return "grey";
  }
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Condition ratings scan
 * @param ratings letter of diagnostic condition : Good, Fair, Poor
 */
function scanConditions(ratings: string): void {
  for (const condition of ratings) {
    if (condition === "G") {
      continue;
    }
    if (condition === "F") {
      console.log(`Fair, but Needs attention`);
    }

    if (condition === "P") {
      console.log(`Poor, CRITICAL - stopping scan`);
      break;
    }
  }
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Checks the acceptable tolerance on the required measure test.
 * @param measured the real measure.
 * @param target the expected measure.
 * @param tolerancePct the tolerance percentage set to 5%.
 * @returns True or False.
 */
function isWithinTolerance(
  measured: number,
  target: number,
  tolerancePct: number = 5,
): boolean {
  return (
    target - measured > -(target * (tolerancePct / 100)) &&
    target - measured < target * (tolerancePct / 100)
  );
}

//-----------------------------------------------------------------------------------------------------------

/**
 * Describes a building category and its physical condition.
 * @param category the building element or category.
 * @param condition the real element condition.
 * @returns elements and its condition.
 */
function formatFinding(category: string, condition: string): string {
  return `${category}: ${condition}`;
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Alerts the urgency of doing the inspection
 * @param daysOverdue is how many days is past date of inspecition
 * @returns
 */
// < 0 "Not due" Due today, 1-30 ->"Low", 31-90 -> "Medium", > 90 "High"

function gradeUrgency(daysOverdue: number): string {
  if (!Number.isFinite(daysOverdue)) {
    return "Invalid";
  } else if (daysOverdue < 0) {
    return "Not due";
  } else if (daysOverdue === 0) {
    return "Due today";
  } else if (daysOverdue <= 30) {
    return "Low";
  } else if (daysOverdue <= 90) {
    return "Medium";
  } else {
    return "High";
  }
}

//SCHEDULING FUNCTIONS
/**
 * Alerts is the action is overdue or if there is still time.
 * @param dueDate is the date of deadline.
 * @param today is the current date to start counting.
 * @returns True or false.
 */
function isOverdue(dueDate: Date, today: Date = new Date()): boolean {
  return today > dueDate;
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Gives the day count until the next event.
 * @param target is the date of the next event.
 * @param from the current date.
 * @returns the number of days left to the event.
 */
function daysUntil(target: Date, from: Date = new Date()): number {
  return Math.round((target.getTime() - from.getTime()) / 86400000);
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Informs the next inspection date.
 * @param lastInspected The last inspection date.
 * @param intervalMonths How often the inspection is done.
 * @returns the next inspection date.
 */
function nextInspectionDate(
  lastInspected: Date,
  intervalMonths: number = 12,
): Date {
  return new Date(
    lastInspected.getFullYear(),
    lastInspected.getMonth() + intervalMonths,
    lastInspected.getDate(),
  );
}

//-----------------------------------------------------------------------------------------------------------
/**
 * Gives the next inspection date
 * @param lastInspected las inspection date
 * @param intervalMonths interval bettween inspections
 * @param n years
 * @returns
 */
function printNextInspection(
  lastInspected: Date,
  intervalMonths: number,
  n: number,
): void {
  if (!Number.isFinite(intervalMonths) || intervalMonths <= 0) {
    console.log(`Not a Valid number`);
    return;
  }
  for (let i = 0; i < n; i++) {
    let date = new Date(
      lastInspected.getFullYear(),
      lastInspected.getMonth() + intervalMonths * i,
      lastInspected.getDate(),
    );
    console.log(date.toDateString());
  }
}
//-----------------------------------------------------------------------------------------------------------
/**
 * gives the inspection dates up to a given year
 * @param lastInspected date of last inspection
 * @param intervalMonths inspection interval
 * @param endYear limit year
 */
function printInspectionUntil(
  lastInspected: Date,
  intervalMonths: number,
  endYear: number,
): void {
  let cursor = new Date(
    lastInspected.getFullYear(),
    lastInspected.getMonth(),
    lastInspected.getDate(),
  );
  cursor.setMonth(cursor.getMonth() + intervalMonths);
  while (cursor.getFullYear() <= endYear) {
    console.log(cursor.toDateString());
    cursor.setMonth(cursor.getMonth() + intervalMonths);
  }
}

//TESTING FUNCTION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/**
 * Test the results of a function to look for ilent bugs
 * @param result is the function output.
 * @param expected the expected result.
 */
function assertEqual(
  result: number | string | Date | boolean | Grade,
  expected: number | string | Date | boolean | Grade,
): void {
  if (result === expected) {
    console.log(`Passed`);
  } else if (Number.isNaN(result) && Number.isNaN(expected)) {
    console.log(`Passed`);
  } else {
    console.log(`Not passed`);
  }
}

//CONVERSION GROUP TEST --------
//03

assertEqual(metersToFeet(NaN), NaN);
assertEqual(feetToMeters(Infinity), Infinity);
assertEqual(squareMetersToSquareFeet(NaN), NaN);

//HELPER FUNCTIONS
assertEqual(gradeCondition(49), "Poor");
assertEqual(gradeCondition(-1), "Invalid");
assertEqual(gradeCondition(80), "Good");
assertEqual(gradeCondition(50), "Fair");
assertEqual(gradeCondition(101), "Invalid");
assertEqual(conditionColor("Good"), "green");
assertEqual(conditionColor("Broken"), "grey");
//assertEqual(scanConditions("P"), void);
assertEqual(isWithinTolerance(100, 100, 5), true);
assertEqual(isWithinTolerance(100, 109, 5), false);
assertEqual(formatFinding("roof", "good"), "roof: good");
assertEqual(gradeUrgency(0), "Due today");
assertEqual(gradeUrgency(31), "Medium");
assertEqual(gradeUrgency(101), "High");

//SCHEDULING
assertEqual(isOverdue(new Date(2025, 0, 15)), true);
assertEqual(daysUntil(new Date(2026, 10, 20), new Date(2026, 9, 20)), 31);
assertEqual(
  nextInspectionDate(new Date(2025, 1, 5)).getTime(),
  new Date(2026, 1, 5).getTime(),
);

scanConditions("GFGFP"); // your Day-4 edge case
printNextInspection(new Date(2025, 0, 15), 6, 3);
printInspectionUntil(new Date(2025, 0, 15), 6, 2027);
