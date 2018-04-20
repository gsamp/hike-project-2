// This file contains the javascript code of a calculator.

/**
 * Returns the result of an operation over two numbers.
 * Arguments: two numbers and one operation symbol.
 * Supports sum, subtraction, multiplication, division, exponentiation, percentage, nth roots, and logarithms. 
 * Employs Math.pow() when calculating exponents and nths roots to support negative and decimal values.
 * Employs Math.lo() to calculate logarithms. 
 */
function getResult(num1, num2, operation) {
	if (operation === '+') {
		return num1 + num2; 
	} else if (operation === '-') {
		return num1 - num2; 
	} else if (operation === '*') {
		return num1 * num2; 
	} else if (operation === '/') {
		return num1 / num2; 
	} else if (operation === '**') {
		return Math.pow(num1, num2); 
	} else if (operation === '%') {
		return (num1/num2)*100; 
	} else if (operation === '√') {
		return Math.pow(num1, 1/num2); 
	} else if (operation === 'l') {
		return Math.log(num1)/Math.log(num2); 
	}
}

/**
 * Reacts to clickling 'calculate-button'. Collects and parses values, determines operation, calculates result, 
 * assigns resulting value to element with id "result", and displays reults checking for non-numerical values.
 * Arguments: none.
 * Emplyos parseFloat() to support decimals and isNaN() to check non-numeric values. 
 */
document.getElementById('calculate-button').onclick = function () {
	// Gets input boxes 1 and 2.
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	
	// Gets values inside input boxes 1 and 2.
	let val1 = parseFloat(elem1.value);
	let val2 = parseFloat(elem2.value);
	
	// Creates variable to determine which operation was chosen.
	let operation = document.querySelector('input[name="operation"]:checked').value;
	
	// Performs operation and stores result into variable. This is useful to check isNan() later. 
	let operationResult = getResult(val1, val2, operation);
	
	// Puts resulting value inside element with id "result".
	let resultElement = document.getElementById('result');
	
	// Displays result.
	if (!isNaN(operationResult)) {
		resultElement.innerHTML = operationResult;
	} else { 
		alert('Digite um valor numérico nas caixas!'); // Alerts about NaN values.
		if (!val1) {
			elem1.select(); // Focuses empty input boxes. When both are empty, it focuses on the first one.
		} else if (!val2) {
			elem2.select();		
		} else if (!val1 && !val2) {
			elem1.select();
		}
	}
}
