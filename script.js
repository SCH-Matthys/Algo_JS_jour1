// Exercice 1 :
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Exercice 2 :
// for(let i = 0; i<=10; i++){
//     let x;
//     console.log(x = x+i);
// }

// Exercice 3 :
// const a = 5;
// const b = 8;
// let c = (a*2 + b*2);
// console.log("le perimetre est de " + c); 

// Exercice 4 :
// const x = 15;
// if( x % 3 == 0 || x % 5 ==0 ){
//     if( x % 3 == 0 && x % 5 == 0){
//         console.log( x + " est multiple de 3 et de 5")
//     }else if( x % 3 == 0){
//         console.log( x + " est multiple de 3")
//     }else{
//         console.log( x + " est multiple de 5")
//     }
// }else{
//     console.log( x + " est ni multiple de 3, ni de 5")
// }

// Exercice 5 :
// const a = 56;
// const b = 78;
// const c = 45;
// console.log("Le plus grand est " + Math.max(a,b,c));

// Exercice 6 :
// const x = 29;
// if(x >= 1){
//     if( let i = 2; i/Math.sqrt(i); i++){
        
//     }
// } else{
//     console.log( x + " doit être un nombre superieur à 1 pour être un nombre premier.")
// }

// Exercice 7 :
// let x = 1;
// while( x <= 30){
//     if( x % 3 == 0){
//         console.log( x + " est un multiple de 3")
//     }
//     x++;
// }

// Exercice 8 :
// const x = 98765;
// console.log(x.toString().length);

// Exercice 9 :
// const x = 12345; 
// const addition = x
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((acc, val) => acc + val, 0);
// console.log(addition);

// Exercice 10 :
// const x = 375;
// console.log( x + " secondes vaut " + Math.floor(x / 60) + " minutes et " + x%60 +" secondes")

// Exercice 11 :
// const x = 12345;
// console.log(Number(x.toString().split("").reverse().join("")))

// Exercice 12 :
// let i =1;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// Exercice 13 :
// let a =5;
// let b = "5";
// b = Number(b);
// if(a == b){
//     console.log(a + " et " + b + " sont égaux");
// } else {
//     console.log("Les nombres sont différents");
// }

// Exercice 14 : 
// let number = 10;
// if (number % 2 === 0){
//     console.log(number + " est pair");
// } else if (number % 2 !== 0){
//     console.log(number + " est impair");
// }
// if ( number % 2 === 0 ? console.log(number + " est pair") : console.log(number + " est impair"));

// Exercice 15 :
// for (let i = 1; i<= 20; i++){
//     if (i %2 === 0 ? console.log(i) : " ");
// }

// Exercice 16 : 
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// Exercice 17 :
// let color = "vert";
// if (color === "rouge"){
//     console.log("la couleur est rouge")
// } else if (color === "bleue"){
//     console.log("la couleur est bleue")
// } else if (color === "jaune"){
//     console.log("la couleur est jaune")
// } else{
//     console.log("la couleur n'est pas reconnue")
// }




// ///////////////////////////////////////////////////////////////////////////////////////

// ARRAYS



// Exercice 1 : 
// let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.map( x => x * 2));

// Exercice 2 :
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[2]);

// Exercice 3 :
// let fruits = ["apple", "banana", "cherry"];
// for( let fruit of fruits ){
//     console.log(fruit);
// }

// Exercice 4 :
// let fruits = ["apple", "banana", "cherry"];
// function reverseArray(arr){
//     return arr.reverse()
// }
// console.log(reverseArray(fruits));

// Exercice 5 :
// let fruits = ["apple", "banana", "cherry", "cherry", "cherry", "cherry"];
// function countOccurrences(arr, value) {
//     let i = 0;
//     for(let occ of arr){
//         if(occ === value){ 
//             i++;
//         }
//     }
//     return i;
// }
// console.log(countOccurrences(fruits, "cherry"));

// Exercice 6 : PAS FINI
// let fruits = ["apple", "banana", "cherry", "cherry", "cherry", "cherry", "banana", "banana", "apple"];
// function countOccurrences(arr, value) {
//     let i = 0;
//     for(let occ of arr){
//         if(occ === value){ 
//             i++;
//         }
//     }
//     return i;
// }

// function mostFrequent(arr){
//     const occMax = 0;
//     for(let occ of arr){
//         return "AHAHAHAH";
//     }
// }
// console.log(mostFrequent(fruits));


// Exercice 7 :
// let sentence = "Je suis nul !";
// function reverseWords(arr){
//     const reverseArr = arr.split(" ").reverse().join(" ")
//     return reverseArr;
// }
// console.log(reverseWords(sentence));

// Exercice 8 
// let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterEven(arr){
//     let numbersEven = [];
//     for (let number of arr){
//         if ( number % 2 === 0 ){
//             numbersEven.push(number);
//         }
//     }
//     return numbersEven;
// }

// function filterEven(arr){
//     return arr.filter(number => number % 2 === 0);
// }
// console.log(filterEven(numbers));

// Exercice 9 : 
// let numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fruits = ["apple", "banana", "cherry", "cherry", "cherry", "cherry", "banana", "banana", "apple"];
// function mergeArrays(arr1, arr2){
//     let mergedArray = arr1.concat(arr2);
//     return mergedArray;
// }
// console.log(mergeArrays(fruits, numbers));

// Exercice 10 :
// let fruits = ["apple", "banana", "cherry", "cherry", "cherry", "cherry", "banana", "banana", "apple"];
// function removeDuplicates(arr){
//     let items = [];
//     for(let item of arr){
//         if(!items.includes(item)){
//             items.push(item);
//         }    
//     }
//     return items;
// }
// console.log(removeDuplicates(fruits));

// Exercice 11 :
// let numbers1 = [1,2,3,4,5,6,7,8,9];
// let numbers2 = [1,2,3,4,5,6,2,8];
// function isSorted(arr){
//     let sorted = [...arr].sort();
//     return arr.join("") === sorted.join("");
// }
// console.log(isSorted(numbers2));

// Exercice 12 :
// let test = "je ne suis pas un hero !"
// function textUpper(txt){
//     return txt.split(" ").toUpperCase().join(" ");
// }
// console.log(textUpper(test));



// ///////////////////////////////////////////////////////////////////////////////////////

// OBJECTS


// Exercice 1 : 
// let person = {
//     firstNmae: "Hella",
//     lastName: "Jonson"
// };
// console.log(person);


// Exercice 2 :
// let person = {
//     firstName: "Hella",
//     lastName: "Jonson",
//     greet: function(){
//         return console.log("Hello, my name is " + this.firstName + " " + this.lastName);
//     }
// };
// console.log(person.greet());


// Exercice 3 :
// let person = {
//     firstNmae: "Hella",
//     lastName: "Jonson"
// };
// person.age = 30;
// delete person.lastName;
// console.log(person);


// Exercice 4 :
// let car = {
//     brand: "Tesla",
//     model: "X",
//     year: 2020,
//     start: function(){
//         return console.log("The car is starting");
//     },
//     info: function(){
//         return console.log(car);
//     }
// }
// car.start();
// car.info();


// Exercice 5 : 
// const Car = new Object();
// Car.brand = "carBrandName";
// Car.model = "carModelName";
// Car.year = "carYear";
// Car.start = function(){
//     return console.log("The car is starting");
// };

// function Object(brandName, modelName, year){
//     this.brand = brandName;
//     this.model = modelName;
//     this.year = year;
// };

// const car1 = new Object("Tesla", "X", 2020);
// const car2 = new Object("Tesla", "S", 2023);

// console.log(car1, car2);


/////////////////////////////////////////////////////////////////////////////////////////

