// Condition helpers.ts
//0-49 Poor . 50-79 Fair . 80-100 Good . Else Invalid
type Grade = "Good" | "Fair" | "Poor" | "Invalid";
function gradeCondition(score: number): Grade {
  if (!Number.isFinite(score)) {
    return "Invalid";
  }
  if (score < 0) {
    return "Invalid";
  }
  if (score <= 49) {
    return "Poor";
  } else if (score <= 79) {
    return "Fair";
  } else if (score <= 100) {
    return "Good";
  } else {
    return "Invalid";
  }
}
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
console.log(gradeCondition(1.3)); // expected Poor
console.log(gradeCondition(80)); // expected Good
console.log(gradeCondition(79)); // expected Fair
console.log(gradeCondition(50)); // expected Fair
console.log(gradeCondition(49)); // expected Poor
console.log(gradeCondition(0)); // expected Poor
console.log(gradeCondition(8 / 0)); // expected Invalid
console.log(gradeCondition(-1)); // expected Invalid
console.log(gradeCondition(101)); // expected Invalid
console.log(conditionColor("Fair")); // expected Amber
console.log(conditionColor("Good")); // expected Green
console.log(conditionColor("Poor")); // expected red
console.log(conditionColor("broken")); // expected Grey

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

console.log(gradeUrgency(NaN)); //Expected Invalid
console.log(gradeUrgency(-5)); //Expected Not due
console.log(gradeUrgency(0)); //Expected Due today
console.log(gradeUrgency(5)); //Expected Low
console.log(gradeUrgency(50)); //Expected Medium
console.log(gradeUrgency(91)); //Expected High
