// console.log("Using for loop:");
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log("Using while loop:");
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// console.log("Using do-while loop:");
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);


// console.log("Using for loop:");
// for (let l = 10; l >= 0; l--) {
//     console.log(l);
// }
// console.log("Using while loop:");
// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// console.log("Using do-while loop:");
// let j = 10;
// do {
//     console.log(j);
//     j--;
// } while (j >= 0);


// let arr=[]
// while(arr.length<5){
// let num=Math.floor(Math.random()*10)
// if(!arr.includes(num)){
//     arr.push(num)
// }
// }
// console.log(arr)

let arr=[]
let max=50
let min=10
while(arr.length<5){
let num=Math.floor(Math.random()* (max-min)+(min+1))
if(!arr.includes(num)){
    arr.push(num)
}
}
console.log(arr)