function rally() {
	let carNumbers = +prompt("Enter the number of cars to start the rally:");
	let playZone = new Array(300).fill("*");
	let cars = [];
	for (let i = 0; i < carNumbers; i++)
		cars[i] = prompt("Enter the car name:");
	return cars;
}

console.log(rally());

// function user(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let reza = new user('reza', 34);
// console.log(reza);
