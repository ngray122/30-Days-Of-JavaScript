//1.
const emptyArray = [];

//2.
const favNumbers = [2, 6, 8, 67, 44];

//3.
favNumbers.length;

//4.
console.log(favNumbers[0]);
console.log(favNumbers[2]);
console.log(favNumbers[5]);

//5.
const mixedDataTypes = [
    48, 
    "Hello", 
    false, 
    {name: "Nicole", age: "34"}, 
    null];

console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

//6.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7.
console.log(itCompanies);

//8.
console.log(itCompanies.length);

//9.
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//10. 
//11. 
itCompanies[0] = "FACEBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";

console.log(itCompanies);

//12.
itCompanies.toString();

//15.
itCompanies.sort();

//16.
itCompanies.reverse();

//17.  console prints that 
itCompanies.slice(0, 3);

//18.
itCompanies.slice(4, 7);

//19.
itCompanies.slice(3, 4);

//20. 
itCompanies.shift(3);

let removeMiddle = itCompanies.length;


//21.

//22.
itCompanies.pop();

itCompanies.slice(-1);

itCompanies.slice(6, 7);

//23.


console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')