//Schedule.TS

/**
 * Returns the numnber of inspection dates.
 * @param lastInspected the last inspection date
 * @param intervalMonths interval between inspections
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
nextInspectionDate(new Date(2025, 0, 12));

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
printNextInspection(new Date(2025, 0, 15), 6, 3);

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
printInspectionUntil(new Date(2025, 0, 15), 6, 2028);

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
scanConditions("GF");
