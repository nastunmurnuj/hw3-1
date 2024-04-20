// Import library that support for input users
const readline = require('readline');

// Setup readline to support stid - stdout 
const inputUserFunction = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const рік = [1]
const роки = [2,3,4]
const років = [0,5,6,7,8,9,11,12,13,14]

inputUserFunction.question('Enter a year: ', (year) => {
  // This function will run when the user inputs a year
  // 'year' will contain the user's input
  year = parseInt(year); // Convert input to an integer

  // I'm checking that the value enter by the user it's a number and not a string
  if (isNaN(year) || year < 0) {
    console.log('Please enter a valid non-negative number for the year.');
  } else {
    // I'm getting the 2 last numnbers and the last number from the input of the user
    let last2Numbers = year % 100; // The last 2 numbers
    let lastNumber = year % 10; // the last number

    // I'm checking if lastNumber only the last number exist in the variable pik
    if(рік.includes(lastNumber) && !років.includes(last2Numbers)){
        console.log(`The input is: ${year} pik`);
        inputUserFunction.close(); // Close the readline interface
    }
    // I'm checking if lastNumber only the last number exist in the variable pik
    if(роки.includes(lastNumber) && !років.includes(last2Numbers)){
        console.log(`The input is: ${year} роки`);
        inputUserFunction.close(); // Close the readline interface
    }
    // I'm checking if lastNumber only the last number exist in the variable pik
    if(років.includes(last2Numbers) || років.includes(lastNumber)){
        console.log(`The input is: ${year} років`);
        inputUserFunction.close(); // Close the readline interface
    }
  }
  inputUserFunction.close(); // Close the readline interface
});

