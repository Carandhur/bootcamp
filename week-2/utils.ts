//utils.ts
/**
 * This function converts values from meters to feet.
 * @param meters asks the value in meters.
 * @returns the value in feet.
 */
function metersToFeet(meters: number): number {
  let feet = meters * 3.28084;
  return feet;
}

/**
 * This function converts values from feet to meters.
 * @param feet asks for the value in feet.
 * @returns the value in meters.
 */
const feetToMeters = (feet: number): number =>
  Math.round((feet / 3.28084) * 100) / 100;

/**
 * Converts a value in square meters to square feet.
 * @param sqm asks for the value in square meters.
 * @returns the value in square feet.
 */
const squareMetersToSquareFeet = (sqm: number): number => sqm * 10.7639;

/**
 * Alerts is the action is overdue or if there is still time.
 * @param dueDate is the date of deadline.
 * @param today is the current date to start counting.
 * @returns True or false.
 */
function isOverdue(dueDate: Date, today: Date = new Date()): boolean {
  return today > dueDate;
}

/**
 * Gives the day count until the next event.
 * @param target is the date of the next event.
 * @param from the current date.
 * @returns the number of days left to the event.
 */
function daysUntil(target: Date, from: Date = new Date()): number {
  return Math.round((target.getTime() - from.getTime()) / 86400000);
}

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

/**
 * Describes a building category and its physical condition.
 * @param category the building element or category.
 * @param condition the real element condition.
 * @returns elements and its condition.
 */
function formatFinding(category: string, condition: string): string {
  return `${category}: ${condition}`;
}

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
console.log(metersToFeet(2)); //Value in feet
console.log(feetToMeters(2)); //Value en meters
console.log(squareMetersToSquareFeet(1)); //Value in Square feet
console.log(isOverdue(new Date("2026-08-10"))); // Expected to write true
console.log(daysUntil(new Date("2026-08-20"), new Date("2026-08-15"))); //Expected number 5
console.log(isWithinTolerance(27, 25)); //Expected false
console.log(formatFinding("Roof", "Poor")); //Expected "Roof: Poor"
console.log(nextInspectionDate(new Date("2026-08-05")).toLocaleDateString()); //Expected 2027-08-05
