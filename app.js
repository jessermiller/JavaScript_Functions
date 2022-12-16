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

checkAge("Jim", 18);
checkAge("Leeroy", 15);
checkAge();