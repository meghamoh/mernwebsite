//Level 1:

let challenge = '30 Days Of JavaScript \n';


console.log(challenge);


console.log(challenge.length);


console.log(challenge.toUpperCase());


console.log(challenge.toLowerCase());


console.log(challenge.substring(0, 2));


console.log(challenge.substring(3));


console.log(challenge.includes('Script'));


console.log(challenge.split());


console.log(challenge.split(' '));


let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));


console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));


let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let c = '    30 Days Of JavaScript  ';
console.log(c.length);
let d=c.trim()
console.log(c.trim());
console.log(d.length);

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('30'));

console.log(challenge.match(/a/gi));

let a= "30 Days of"
let b= "javascript"
console.log(a.concat(b));

console.log(challenge.repeat('2 '));

//Level 2:

// 1. Print the quote by John Holmes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print the quote by Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is exactly equal to 10, if not, make it exactly equal
let value = '10';
if (typeof value !== 'number') {
    value = Number(value);
}
console.log(value);

// 4. Check if parseFloat('9.8') is equal to 10, if not, make it exactly equal
let num = parseFloat('9.8');
if (num !== 10) {
    num = Math.ceil(num);
}
console.log(num);

// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on') && 'jargon'.includes('on'));

// 6. Check if jargon is in the sentence
console.log('I hope this course is not full of jargon.'.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101));

// 8. Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));

// 10. Access the 'JavaScript' string characters using a random number
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// 11. Print the pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12. Use substr to slice out 'because because because'
let sentenc = 'You cannot end a sentence with because because because is a conjunction';
let phrase = 'because because because';
console.log(sentenc.substr(sentence.indexOf(phrase), phrase.length));

//Level 3:

// 1. Count the number of word "love" in the sentence
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = (loveSentence.match(/love/gi) || []).length;
console.log(loveCount);

// 2. Count the number of all "because" in the sentence
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = (becauseSentence.match(/because/gi) || []).length;
console.log(becauseCount);

// 3. Clean the text and find the most frequent word
const dirtyText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanText = dirtyText.replace(/[%$@&#;!?#]/g, '');
let words = cleanText.split(/\s+/);

let wordFrequency = {};
for (let word of words) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}

let mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b);
console.log(mostFrequentWord);

// 4. Calculate the total annual income
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g).map(Number);

let totalAnnualIncome = incomeNumbers[0] * 12 + incomeNumbers[1] + incomeNumbers[2] * 12;
console.log(totalAnnualIncome);

//Boolean
//level 1:

let firstname="megha"
let lastname="mohan"
let country="india"
let city="chengannur"
let age=30
let ismarried="true"
let year=2024

console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(ismarried))
console.log(typeof(year))

let ab='10'
let abc=10
console.log(typeof(ab===abc))
console.log(typeof '10'=== typeof 10)

console.log(parseInt('9.8')=== 10)

console.log(!!1)
console.log(!!"bn")
console.log(!![])
console.log(!!0)
console.log(!!null)
console.log(!!'')

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
let e="python"
let f="jargon"
console.log(e.length !== f.length)


console.log(4>3 && 10<12)
console.log(4>=3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4==='4'))
let g="python"
let h="dragon"
console.log(!(g.includes("on")&& e.includes("on")))

let t=new Date()
console.log(t.getFullYear())
console.log(t.getMonth())
console.log(t.getDate())
console.log(t.getDay())
console.log(t.getHours())
console.log(t.getMinutes())
console.log(t.getSeconds())

//level 2:

// 1. Calculate the area of a triangle
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let triangleArea = 0.5 * base * height;
console.log(`The area of the triangle is ${triangleArea}`);

// 2. Calculate the perimeter of a triangle
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
let trianglePerimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is ${trianglePerimeter}`);

// 3. Calculate the area and perimeter of a rectangle
let length = prompt("Enter length:");
let width = prompt("Enter width:");
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (Number(length) + Number(width));
console.log(`The area of the rectangle is ${rectangleArea}`);
console.log(`The perimeter of the rectangle is ${rectanglePerimeter}`);

// 4. Calculate the area and circumference of a circle
let radius = prompt("Enter radius:");
const pi = 3.14;
let circleArea = pi * radius * radius;
let circleCircumference = 2 * pi * radius;
console.log(`The area of the circle is ${circleArea}`);
console.log(`The circumference of the circle is ${circleCircumference}`);

// 5. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2
let slope1 = 2;
let xIntercept = -(-2) / 2; // x when y = 0
let yIntercept = -2; // y when x = 0
console.log(`Slope: ${slope1}, x-intercept: ${xIntercept}, y-intercept: ${yIntercept}`);

// 6. Calculate the slope between two points
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(`Slope between points: ${slope2}`);

// 7. Compare slopes
if (slope1 === slope2) {
    console.log("The slopes are equal.");
} else {
    console.log("The slopes are not equal.");
}

// 8. Calculate y = x^2 + 6x + 9 and find when y is 0
for (let x = -10; x <= 10; x++) {
    let y = x ** 2 + 6 * x + 9;
    console.log(`x: ${x}, y: ${y}`);
    if (y === 0) {
        console.log(`y is 0 when x is ${x}`);
    }
}

// 9. Calculate weekly earnings
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
let weeklyEarnings = hours * rate;
console.log(`Your weekly earning is ${weeklyEarnings}`);

// 10. Compare name length
let name = prompt("Enter your name:");
if (name.length > 7) {
    console.log("Your name is long.");
} else {
    console.log("Your name is short.");
}

// 11. Compare first name and last name lengths
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
    console.log(`Your first name, ${firstName} is shorter than or equal to your family name, ${lastName}`);
}

// 12. Compare ages
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// 13. Check driving eligibility
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// 14. Calculate seconds lived
let years = prompt("Enter number of years you live:");
let secondsLived = years * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);

// 15. Create a human-readable time format
let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hoursNow = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hoursNow}:${minutes}`); // YYYY-MM-DD HH:mm
console.log(`${date}-${month}-${year} ${hoursNow}:${minutes}`); // DD-MM-YYYY HH:mm
console.log(`${date}/${month}/${year} ${hoursNow}:${minutes}`); // DD/MM/YYYY HH:mm







