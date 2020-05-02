const EvenFibonacciNumber = number => {
	let firstNumber = 1;
	let secondNumber = 2;
	evenSum = 0;
	while (secondNumber<4000000) {
		secondNumber % 2 == 0 ? evenSum += secondNumber : evenSum += 0;
		nextNumber = firstNumber + secondNumber
		firstNumber = secondNumber
		secondNumber = nextNumber;
	};	
	return evenSum;
};

console.log(EvenFibonacciNumber(4000000));
