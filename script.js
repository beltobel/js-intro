// check if given number is a number or not
// let x = prompt("please input x");
// x = Number(x);
// let s = 7;
// let isNumber = Number.isInteger(x);
// if (isNumber) {
// 	console.log("it is a number");
// } else {
// 	console.log("it is not a number");
// }

function checkNum(x) {
	let isNumber = Number.isInteger(x);

	if (isNumber) {
		console.log("it is a number");
	} else {
		console.log("it is not a number");
	}
}
let x = prompt("please input x");
// x = Number(x);

checkNum(x);
