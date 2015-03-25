for (var fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz++) {
	if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0) {
		console.log("Fizz Buzz");
	}
	else if (fizzBuzz % 5 === 0) {
		console.log("Buzz");
	}
	else if (fizzBuzz % 3 === 0) {
		console.log("Fizz");
	}
	else {
		console.log(fizzBuzz);
	}
}