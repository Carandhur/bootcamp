//k3.ts Week 3 checkPoint

function inspectionCycle(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`Full Review`);
    } else if (i % 5 === 0) {
      console.log(`Repair`);
    } else if (i % 3 === 0) {
      console.log(`Inspect`);
    } else {
      console.log(i);
    }
  }
}
inspectionCycle(15); //Full review
inspectionCycle(-3); //

function conditionBand(score: number): string {
  if (score < 0) {
    return "Invalid";
  } else if (Number.isNaN(score)) {
    return "Invalid";
  } else if (score > 100) {
    return "Invalid";
  } else if (score >= 85) {
    return "Excellent";
  } else if (score > 59) {
    return "Serviceable";
  } else {
    return "Deficient";
  }
}
console.log(conditionBand(NaN));
console.log(conditionBand(59));
console.log(conditionBand(101));
console.log(conditionBand(60));
console.log(conditionBand(58));

function sumEven(start: number, end: number): number {
  let evenNumbers = 0;
  for (let i = 0; i <= end; i++) {
    if (i >= start && i % 2 === 0) {
      evenNumbers = i + evenNumbers;
    } else if (start > end) {
      evenNumbers = 0;
    }
  }
  //console.log(evenNumbers);
  return evenNumbers;
}

console.log(sumEven(1, 5));
sumEven(1, 5);

function countCritical(ratings: string): number {
  let count = 0;

  for (let r of ratings) {
    if (r === "P") {
      count++;
    } else {
    }
  }
  //console.log(count);

  return count;
}
console.log(countCritical(""));

function reverseCode(code: string): string {
  let reverse = "";

  for (let r of code) {
    reverse = r + reverse;
  }
  //console.log(reverse);
  return reverse;
}

console.log(reverseCode("X"));

function assertEqual(
  result: number | string | Date | boolean,
  expected: number | string | Date | boolean,
): void {
  if (result === expected) {
    console.log(`Passed`);
  } else if (Number.isNaN(result) && Number.isNaN(expected)) {
    console.log(`Passed`);
  } else {
    console.log(`Not passed`);
  }
}
assertEqual(conditionBand(59), "Deficient");
