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
let gg="python"
let hh="dragon"
console.log(!(gg.includes("on")&& e.includes("on")))

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
let agee = currentYear - birthYear;
if (agee >= 18) {
    console.log(`You are ${agee}. You are old enough to drive.`);
} else {
    console.log(`You are ${agee}. You will be allowed to drive after ${18 - agee} years.`);
}

// 14. Calculate seconds lived
let yearrs = prompt("Enter number of years you live:");
let secondsLived = yearrs * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);

// 15. Create a human-readable time format
let now = new Date();
let years = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hoursNow = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${years}-${month}-${date} ${hoursNow}:${minutes}`); 
console.log(`${date}-${month}-${year} ${hoursNow}:${minutes}`);
console.log(`${date}/${month}/${year} ${hoursNow}:${minutes}`); 

//level 3:

let n = new Date();
let y = now.getFullYear();
let mo = String(now.getMonth() + 1).padStart(2, '0'); 
let d = String(now.getDate()).padStart(2, '0');       
let h = String(now.getHours()).padStart(2, '0');    
let mi = String(now.getMinutes()).padStart(2, '0'); 

let formattedTime = `${y}-${mo}-${d} ${h}:${mi}`;
console.log(formattedTime); 


