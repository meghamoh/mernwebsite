

// Declare an empty array
const emptyArray = [];

// Declare an array with more than 5 elements
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.length); // Length of the array

// Get the first, middle, and last item of the array
console.log(numbers[0], numbers[Math.floor(numbers.length / 2)], numbers[numbers.length - 1]);

// Declare a mixedDataTypes array
const mixedDataTypes = [1, 'Hello', true, null, undefined, { key: 'value' }];
console.log(mixedDataTypes.length); // Length should be greater than 5

// Declare itCompanies array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies); // Print array
console.log(itCompanies.length); // Number of companies
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

// Print out each company
itCompanies.forEach(company => console.log(company));

// Change to uppercase
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Print as a sentence
console.log(`${itCompanies.join(', ')} are big IT companies.`);

// Check if a certain company exists
const companyToCheck = 'Google';
console.log(itCompanies.includes(companyToCheck) ? companyToCheck : 'Company not found');

// Filter out companies with more than one 'o' manually
const filteredCompanies = [];
for (let company of itCompanies) {
  if ((company.match(/o/g) || []).length <= 1) {
    filteredCompanies.push(company);
  }
}
console.log(filteredCompanies);

// Sort and reverse the array
console.log(itCompanies.sort());
console.log(itCompanies.reverse());

// Slice and remove companies
console.log(itCompanies.slice(0, 3)); // First 3 companies
console.log(itCompanies.slice(-3)); // Last 3 companies
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2))); // Middle company
itCompanies.shift(); // Remove first
itCompanies.splice(Math.floor(itCompanies.length / 2), 1); // Remove middle
itCompanies.pop(); // Remove last
console.log(itCompanies); // Remaining companies
itCompanies.length = 0; // Remove all
console.log(itCompanies);


// Create countries.js and web_techs.js, import them into main.js
// countries.js
export const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia'];

// web_techs.js
export const webTechs = ['HTML', 'CSS', 'JavaScript', 'React'];

// main.js
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// String to array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[^\w\s]/g, '').split(' ');
console.log(words);
console.log(words.length);

// Shopping cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
const allergicToHoney = true;
if (allergicToHoney) shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// Check if Ethiopia exists
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// Check if Sass exists
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess.');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// Concatenate arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`Min: ${ages[0]}, Max: ${ages[ages.length - 1]}`);

const median = ages.length % 2 === 0
  ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
  : ages[Math.floor(ages.length / 2)];
console.log(`Median: ${median}`);

const average = ages.reduce((acc, cur) => acc + cur, 0) / ages.length;
console.log(`Average: ${average}`);

const range = ages[ages.length - 1] - ages[0];
console.log(`Range: ${range}`);

console.log(Math.abs(ages[0] - average) < Math.abs(ages[ages.length - 1] - average) ? 'Min closer' : 'Max closer');

// Slice first 10 countries
console.log(countries.slice(0, 10));

// Middle country(ies)
const middleIndex = Math.floor(countries.length / 2);
console.log(countries.length % 2 === 0 ? countries.slice(middleIndex - 1, middleIndex + 1) : countries[middleIndex]);

// Divide into two halves
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(firstHalf, secondHalf);

