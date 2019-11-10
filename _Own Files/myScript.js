/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

var job;
console.log(job)

job = 'Teachter'
console.log(job)
*/
/*
var firstName = 'John';
var age = 28;
console.log(firstName+ ' ' + age);

var job, isMarried;
job = 'teacher'
isMarried = false;

console.log(firstName + ' ' + isMarried)

age = "Yes!"

console.log(age)

alert("did this work?")

var lastName = prompt('What did you say your last name was?')
console.log(lastName)
*/
//year = 2018
//var yearJohn = year - 33
//console.log(yearJohn)

/* CODING CHALLENGE 
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's
3. Create a boolean variable contaiing infomration about whether Mark has a higher BMI than John.
4. Print a string to the console contaiing the varaibles form Step 3. ("Is Marks' BMI shigher than John's? True")

*/
/*
var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;
alert("This is a BMI calculator using alerts on a webpage... it's an excercise!")
markMass = prompt("Enter Marks Weight")
console.log(markMass)
markHeight = prompt("Enter Marks Height")
console.log(markHeight)
johnMass = prompt("Enter John Weight")
console.log(johnMass)
johnHeight = prompt("Enter John's Height")
console.log(johnHeight)
johnBMI = johnMass / (johnHeight^2)
markBMI = markMass / (markHeight^2)
console.log(markBMI + " " + johnBMI)
alert("Mark's BMI: " + markBMI + "\nJohn's BMI " + johnBMI )
*/

// var firstName = 'John'
// var civilStatus = 'single'

// // if (civilStatus === "married"){
// // 	console.log(firstName + ' is married')
// // } else {
// // 	console.log(firstName + ' will probably marry soon!')
// // }

// var isMarried = true

// if (isMarried){
// 	console.log(firstName + ' is married')
// } else {
// 	console.log(firstName + ' will probably marry soon!')
// }

// Boolean logic

// var firstName = 'John'
// var age = 16

// if (age >= 18) {
// 	console.log(firstName + ' is an adult.')
// } else if (age > 12 && age < 20) {
// 	console.log(firstName + ' is a teenage.')
// } else {
// 	console.log(firstName + ' is a child.')
// }

// var firstName = 'John'
// var age = 16

// age >= 18 ? console.log(firstName+ ' drinks beer.') : console.log(firstName + ' drinks beer.')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)

// now lets learn the switch statement
// var firstName = 'Michael'
// var job = 'teacher'
// switch(job) {
// 	case 'teacher':
// 		console.log(firstName + ' teachers kids how to code!')
// 		break
// 	case 'driver':
// 		console.log(firstName + ' probably drives for uber?')
// 		break
// 	default:
// 		console.log('yea probably an engineer')
// }

// var johnTeamAve = (89+120+103)/3
// var mikeTeamAve = (116+94+123)/3
// var maryTeamAve = (97+134+105)/3

// if (johnTeamAve > mikeTeamAve && johnTeamAve > maryTeamAve) {
// 	console.log(johnTeamAve)
// 	console.log(mikeTeamAve)
// 	console.log(maryTeamAve)
// 	console.log("John's team won")
// } else if (mikeTeamAve > johnTeamAve && mikeTeamAve > maryTeamAve) {
// 	console.log(johnTeamAve)
// 	console.log(mikeTeamAve)
// 	console.log(maryTeamAve)
// 	console.log("Mike's team won")
// } else if (maryTeamAve > johnTeamAve && maryTeamAve > mikeTeamAve) {
// 	console.log(johnTeamAve)
// 	console.log(mikeTeamAve)
// 	console.log(maryTeamAve)
// 	console.log("Mary's team won")
// } else {
// 	console.log("There was draw... somewhere let\'s find it!")
// }

function calculateAge(birthYear){
	return 2019 - birthYear
}

var ageJohn = calculateAge(1990)
var ageMike = calculateAge(1948)
var ageJane = calculateAge(1969)

console.log(ageJohn, ageMike, ageJane)

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year)
	var retirement = 65 - age
	console.log(firstName + " retires in " + retirement + " years")
}

yearsUntilRetirement(1990, 'John')
