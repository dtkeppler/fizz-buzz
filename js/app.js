for (var fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz++) {
	if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0) {
		document.write("Fizz Buzz" + ", ");
	}
	else if (fizzBuzz % 5 === 0) {
		document.write("Buzz" + ", ");
	}
	else if (fizzBuzz % 3 === 0) {
		document.write("Fizz" + ", ");
	}
	else {
		document.write(fizzBuzz + ", ");
	}
}
