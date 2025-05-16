// Leap Year Checker
// This program prints all the leap years between 2000 and 3000.

// Loop through years from 2000 to 3000 (inclusive)
for (let year = 2000; year <= 3000; year++) {
    // Check if the year is a leap year
    // A leap year is:
    //  - Divisible by 4 and not divisible by 100
    //  - OR divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`✅ ${year} is a leap year.`);
    }
}

// Optional message after loop completes
console.log("Leap year check complete. 🌟");
