//1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
//316.25”
//Test data:
//§ Data 1: Test for bill values 275, 40 and 430
//Hints:
//§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
//§ Value X is between 50 and 300, if it's >= 50 && <= 300

const x =85;
const tip = 0.2;
if(x >= 50){
    console.log(`The bill was ${x}, the tip was ${tip} and the Total value is ${x + tip}`);
}else if (x <=300){
    console.log(`The bill was ${x}, the tip was ${tip} and the Total value is ${x + tip}`);
}