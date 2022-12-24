console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
if (count < 0) {
   for (let i = 1; i >= count; i--){
    if (i % 2 != 0) {
        console.log(i);
    }
   }
}
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(20);
printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(uname, age) {
    let aboveSixteen = `Congrats ${uname}, you can drive!`;
    let belowSixteen = `Sorry ${uname}, but you need to wait until youre sixteen`;
    if (age < 16) {
        console.log(belowSixteen);

    }
    else if (age >= 16) {
        console.log(aboveSixteen);
    }
     else {
        console.log(`Im sorry were unable to verify wihtout a valid age`);
     }
}


checkAge("James", 21);
checkAge("Tom", 15);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// negPos = (-, +) | posNeg = (+, -)

function coordinates(x, y) {
    let doublePos = `Coordinates (${x}, ${y}) are in Quadrant one.`;
    let xAxis = `Coordinates (${x}, ${y}) are along the X axis.`;
    let yAxis = `Coordinates (${x}, ${y}) are along the Y one.`;
    let negPos = `Coordinates (${x}, ${y}) are in Quadrant two.`;
    let doubleNeg = `Coordinates (${x}, ${y}) are in Quadrant three.`;
    let posNeg = `Coordinates (${x}, ${y}) are in Quadrant four.`;
    if (x > 0 && y > 0) {
        console.log(doublePos);
    }
    else if (x < 0 && y > 0) {
        console.log(negPos);
    }
    else if (x < 0 && y < 0) {
        console.log(doubleNeg);
    }
    else if (x > 0 && y < 0) {
        console.log(posNeg);
    }
    else if (y == 0 && x != 0) {
        console.log(xAxis);
    }
    else if (x == 0 && y != 0) {
        console.log(yAxis);
    }
    else {
        console.log(`You must be in the middle, sorta the x and y axis. Brimuda triangle of Quadrants.`)
    }
}

coordinates (0, 0);
coordinates (1, 2);
coordinates (-1, 2);
coordinates (-5, -5);
coordinates (5, -1);
coordinates (5, 0);
coordinates (0, 5);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function validTriangle (s1, s2, s3) {
  return s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1 
}

function checkTriangle(s1, s2, s3) {
     let validTri = validTriangle(s1, s2, s3);
     if (validTri) {
        if (s1 == s2 && s2 == s3) {
            return `Equilateral`;
        } else if (s1 == s2 || s2 == s3 || s1 == s3 ) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
     } else {
        return `This is not a valid Triangle.`
     }
}

console.log(checkTriangle (2, 3, 4));
console.log(checkTriangle (2, 2, 2));
console.log(checkTriangle (1, 2, 2));
console.log(checkTriangle (1, 1, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let estimatedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let estimatedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > estimatedAvg) {
        statusMsg =  "Exceeding";
    } else if (currentAvg < estimatedAvg){
        statusMsg = "Below";
    } else {
        statusMsg = "At";
    }
  
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${estimatedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, youll end up using ${planLimit - (usage + estimatedUsage)
    } GB from your data limit.
    To stay below your data plan, use no more than ${(remainingData / remainingDays
    ).toFixed(2)} GB/day.`);



}

dataUsage(45, 10, 25);
dataUsage(30, 0, 0);