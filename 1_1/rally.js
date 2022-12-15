// function rally() {
// 	let carNumbers = +prompt(
// 		"Enter the number of carNames to start the rally:"
// 	);

// let places = {};
// function Car() {
// 	for (let i = 0; i < carNumbers; i++) {
// 		let carName = prompt("Enter the car name:");
// 		// let car = new Car(carName);
// 		this[carName] = 0;
// 	}
// 	// this.name = name;
// 	// this.palce = 0;
// }

// let places = new Car();
// let randomCars = [];
// let carNames = Object.keys(places);
// // let playZone = new Array(50).fill("*");
// let endSequence = [];
// while (randomCars.length < carNames.length) {
// 	let index = Math.floor(Math.random() * carNames.length);
// 	if (randomCars.includes(carNames[index])) continue;
// 	randomCars.push(carNames[index]);
// }
// // console.log(randomCars);
// // if (Object.hasOwnProperty.call(object, key)) {
// // 	const element = object[key];
// while (true) {
// 	let playZone = new Array(50).fill("*");
// 	randomCars.map(function (car) {
// 		let move = Math.floor(Math.random() * 10) + 1;
// 		places[car] += move;
// 		if (places[car] > 50) {
// 			endSequence.push(car);
// 			delete places.car;
// 			if (endSequence.length === carNames.length) {
// 				console.log(`the winner is ${endSequence[0]}`);
// 				return;
// 			}
// 		}
// 		// console.log(randomCars);
// 		for (const key in Object.keys(places)) {
// 			if (key !== car && places[key] === places[car]) places[key] = 0;
// 		}
// 		// console.log("places: ", places);
// 		// console.log("playZone: ", playZone);
// 	});
// 	// console.log(places);
// 	playZone = new Array(50).fill("*");
// 	for (const car in places) {
// 		playZone[places[car]] = car;
// 		console.log("playZone: ", playZone);
// 	}
// }

// 	function Car(name) {
// 		this.name = name;
// 		this.position = 0;
// 	}
// 	for (let i = 0; i < carNumbersr; i++) {
// 		let carName = prompt("Enter the car name:");
// 	}
// }

function rally() {
	let carNumbers = +prompt(
		"Enter the number of carNames to start the rally:"
	);
	let cars = [];

	function Car(name) {
		this.name = name;
		this.position = 0;
	}

	for (let i = 0; i < carNumbers; i++) {
		let carName = prompt("Enter the car name:");
		cars.push(new Car(carName));
	}

	function shuffleArray(array) {
		let shuffled = array
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		return shuffled;
	}

	cars = shuffleArray(cars);
	console.log(`cars: ${cars.forEach(car =>console.log(car))}`);

	let winners=[];

	let playZone = new Array(20).fill("*");
	for (let j = 0; j < 50; j++) {
		for (let i = 0; i < cars.length; i++) {
			let move = Math.floor(Math.random() * 10)+1;
			
			cars[i].position += move;
			console.log(`${cars[i].name} should move ${move} box`);
			if (cars[i].position > 20) {
				winners.push(cars[i].name);
				console.log(`%%%%%%%%%% ${cars[i].name} first! %%%%%%%%%%`);
				playZone[(cars[i].position-move)]="*"
				cars.splice(i, 1);
				if (winners.length === carNumbers) {
					console.log(`the winner is ${winners}`);
					return;
				}
				continue;
				// playZone[cars[i].position] = "*";
			}
			// }
			for (const otherCar of cars
				.slice(0, i)
				.concat(cars.slice(i + 1, cars.length))) {
				if (cars[i].position === otherCar.position) {
					otherCar.position = 0;
					break;
				}
			}
			
			playZone[cars[i].position] = cars[i].name;
			playZone[cars[i].position - move] = "*";
			console.log(playZone);
		}
		// console.log(winners);
	}
}

// }
rally();
// console.log(Math);
// console.log(rally());

// let a = [2, 3, 4, 5, 6];
// for (let i = 0; i < a.length; i++) {
// 	console.log(
// 		(a.slice(0, i)).concat(a.slice(i + 1, a.length)));
// }
// let a = [{name:'reza'},{name:'ahmad'},{name:'hadi'}];
// function shuffleArray(array) {
// 	let shuffled = array
// 		.map((value) => ({ value, sort: Math.random() }))
// 		.sort((a, b) => a.sort - b.sort)
// 		.map(({ value }) => value);
// 	return shuffled;
// }

// console.log(shuffleArray(a));
