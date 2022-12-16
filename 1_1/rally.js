function rally() {
	let carNumbers = prompt("Enter the number of carNames to start the rally:");
	if (isNaN(carNumbers) || carNumbers === "0") {
		//validation part
		console.log(
			"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
		);
		console.log("not a valid number!");
		return;
	}

	carNumbers = +carNumbers;
	let cars = [];

	function Car(name) {
		this.name = name;
		this.position = 0;
	}

	while (cars.length < carNumbers) {
		let carName = prompt("Enter the car name:");
		if (!carName) {
			alert("you should write a valid name!");
			continue;
		}
		cars.push(new Car(carName));
	}

	function shuffleArray(array) {
		//shuffle function for random cars sequence
		return array
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	cars = shuffleArray(cars); //randomize the car orders
	console.log("the sequence for cars is 👇👇");
	cars.forEach((car) => console.log(car.name));
	console.log("------------------- and the fun starts --------------------");

	let winners = [];
	let stepNumbers = 20;
	let playZone = new Array(stepNumbers).fill("*");
	while (true) {
		for (let i = 0; i < cars.length; i++) {
			let move = Math.floor(Math.random() * 10) + 1; //defines the move size

			cars[i].position += move;
			console.log(`${cars[i].name} should move ${move} box`);
			if (cars[i].position > stepNumbers) {
				//shows the car has reached the end
				winners.push(cars[i].name);
				playZone[cars[i].position - move] = "*";
				console.log(`🎁 ${cars[i].name} Crossed the deadLine!`);
				console.log(playZone);
				cars.splice(i, 1);
				if (winners.length === carNumbers) {
					console.log(`the winner is 🥇🏆🥇 ${winners[0]} 🥇🏆🥇`);
					return;
				}
				continue;
			}
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
	}
}
