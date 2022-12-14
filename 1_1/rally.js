function rally() {
	let carNumbers = +prompt("Enter the number of cars to start the rally:");
	// let playZone = new Array(300).fill("*");
	let cars = [];
	for (let i = 0; i < carNumbers; i++)
		cars[i] = prompt("Enter the car name:");

	let sequence = [];
	while (sequence.length < cars.length) {
		let index = Math.floor(Math.random() * cars.length);
		if (sequence.includes(cars[index])) continue;
		sequence.push(cars[index]);
	}
	return sequence;
}

console.log(rally());
// let cars = ['a', 'b', 'c', 'd'];
// let sequence = [];
// while (sequence.length < cars.length) {
// 	let index = Math.floor(Math.random() * cars.length);
// 	if (sequence.includes(cars[index])) continue;
// 	sequence.push(cars[index]);
// }
// console.log(sequence);